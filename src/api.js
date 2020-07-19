import Vue              from 'vue'
import axios 						from 'axios'
import { utils, storage }      from 'src/scripts/utils'

let _vue = Vue.prototype

let baseUrl = 'http://api.usee1.com.cn/useeproject/interface/'
// 正式
if (['www.ushiyihao.com', 'ushiyihao.com'].indexOf(window.location.host) > -1) {
  baseUrl = 'https://api.ushiyihao.com/useeproject02/interface/'
}
const _http = {
  ajax(url = '', data = {}, method = 'GET', contentType = 'form') {
  	let headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }

    url = baseUrl + url
    data.sessionId = storage.local.get('sessionId')
    return new Promise((resolve, reject)=>{
    	axios({
    		url,
	    	method,
	      data,
	      headers,
	      timeout: 60000,
			  transformRequest: [function (data) {
			    let ret = []
			    for (let key in data) {
			    	ret.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
			    }
			    return ret.join('&')
			  }]
	    }).then(function ({ data }){
	      if (data.resultCode === 4002) { // 登录失效
	        storage.local.remove('sessionId')
	        _vue.$message({
						type: 'error',
						message: data.message || '登录失效，请重新登录。',
						onClose(instance) {
							_api.logout()
						}
					})
					reject(data.message)
	      } else if (data.resultCode !== 200) {
	      	_vue.$message({
	          message: data.message,
	          type: 'error'
	        })
	        reject(data.message)
	      }
	      resolve(data)
		  })
		  .catch(function (message) {
		  	_vue.$message('服务器连接失败')
		  	reject('服务器连接失败')
		  })
    })
  },
  get(url, data) {
    return _http.ajax(url, data)
  },
  post(url, data) {
    return _http.ajax(url, data, 'POST')
  }
}

const _api = {
	baseUrl,
	product: {
		getList() {
			
		}
	},
	news: {
		getList(newsType = '', page = 1, rows = 10) {
			return _http.post('/websiteNews/websiteNewsList', {
				newsType, page, rows
      }).then((response) => {
        !response.data && (response.data = [])
        response.data.rows = rows
        return response
      })
		},
		getInfo(newsId) {
			return _http.post('/websiteNews/websiteNewsInfo', {
				newsId
      })
		}
	}
}

Vue.mixin({
  created() {
  	this.$utils = utils
    // 接口
    this.$api = _api
    // 本地缓存
    this.$storage = storage
  }
})

export default _api
