<template>
	<div class="l-page">
		<l-header></l-header>
		<el-carousel class="l-index-banner" trigger="click" height="400px">
      <el-carousel-item>
      	<a href="/join" class="_img" style="background-image:url('https://www.ushiyihao.com/static/banner-001.jpg')"></a>
      </el-carousel-item>
      <el-carousel-item>
      	<a href="/shop" class="_img" style="background-image:url('https://www.ushiyihao.com/static/banner-002.jpg')"></a>
      </el-carousel-item>
      <el-carousel-item>
      	<a href="/about" class="_img" style="background-image:url('https://www.ushiyihao.com/static/banner-003.jpg')"></a>
      </el-carousel-item>
    </el-carousel>
    <div class="l-page-bd">
    	<div class="_inner">
    		<!-- 产品列表 -->
    		<div class="l-column-tit">
    			<div class="_inner">
    				<h3>产品列表</h3>
    				<p>Product</p>
    			</div>
    		</div>
    		<div class="l-product-keyword">
    			<span>舒眼喷雾</span>
    			<span>保护眼睛</span>
    			<span>缓解眼睛干涩</span>
    			<span>缓解视疲劳</span>
    			<span>缓解眼睛酸胀</span>
    			<span>系列护眼产品</span>
    			<span>改善视力模糊</span>
    			<span>保护视力健康</span>
    			<span>改善眼睛充血</span>
    			<span>首款舒眼喷雾</span>
    		</div>
    		<el-carousel class="l-carousel-product" :interval="4000" type="card" height="350px">
			    <el-carousel-item v-for="(item,index) in productList" :key="index">
			      <router-link :to="'/shop/info/' + item.id" class="_item">
			      	<div class="_img" @mouseenter="flipShow($event.currentTarget, item)" @mouseleave="timeout(item.timeid)">
			      		<img style="visibility: hidden;" :src="item.img" alt="">
	    					<img class="flip out" :src="item.qr" alt="">
	    					<img class="flip in" :src="item.img" alt="">
			      	</div>
			      	<div class="_txt">
			      		<h4>{{item.name}}</h4>
			      		<p>{{item.desc}}</p>
			      	</div>
			      </router-link>
			    </el-carousel-item>
			  </el-carousel>
			  <!-- 产品列表 end-->

			  <!-- U视资讯 -->
				<div class="l-column-tit">
    			<div class="_inner">
    				<h3>U视资讯</h3>
    				<p>News</p>
    			</div>
    		</div>
    		<el-row class="l-padding-lr" :gutter="40">
				  <el-col :span="12">
				  	<div class="l-box-news">
				  		<div class="_hd">
				  			<a class="l-fr" @click="$router.push('/news?tab=1')">更多&gt;&gt;</a>
				  			<h3>企业动态</h3>
				  		</div>
				  		<div class="_bd">
				  			<ul>
				  				<li v-for="item in newsList1"><router-link :to="'/news/info/' + item.newsId">{{item.newsTitle}}</router-link></li>
				  			</ul>
				  		</div>
				  	</div>
				  </el-col>
				  <el-col :span="12">
				  	<div class="l-box-news">
				  		<div class="_hd">
				  			<a class="l-fr" @click="$router.push('/news?tab=2')">更多&gt;&gt;</a>
				  			<h3>护眼知识</h3>
				  		</div>
				  		<div class="_bd">
				  			<ul>
				  				<li v-for="item in newsList2"><router-link :to="'/news/info/' + item.newsId">{{item.newsTitle}}</router-link></li>
				  			</ul>
				  		</div>
				  	</div>
				  </el-col>
				</el-row>
    		<!-- U视资讯 end-->
				<br>
				<!-- 友情链接 -->
    		<div class="l-column-tit">
    			<div class="_inner">
    				<h3>友情链接</h3>
    				<p>Links</p>
    			</div>
    		</div>
    		<div class="l-text-center">
    			<a target="_blank" href="http://www.o2opc-cn.com" style="color:inherit; text-decoration:none;">
    				<img src="~assets/images/sdh-logo.png" alt="">
    				<p>中国O2O私董会</p>
    			</a>
    		</div>
    		<!-- 友情链接 end-->
    		<br><br>
    	</div>
    </div>
    <l-footer></l-footer>
	</div>
</template>
<script>
import lHeader from 'src/components/header'
import lFooter from 'src/components/footer'
export default {
	components: {
		lHeader, lFooter
	},
	data () {
		return {
			productList: [
				{
					id: 1,
					img: 'https://www.ushiyihao.com/static/product/penpen.jpg',
					qr: 'https://www.ushiyihao.com/static/product/penpen-qr.png',
					info: 'https://www.ushiyihao.com/static/product/penpen-info.jpg',
					name: '舒眼喷雾',
					desc: '一款喷于眼皮的舒眼水',
					flip: false
				},
				{
					id: 2,
					img: 'https://www.ushiyihao.com/static/product/gold.jpg',
					qr: 'https://www.ushiyihao.com/static/product/gold-qr.png',
					info: 'https://www.ushiyihao.com/static/product/gold-info.jpg',
					name: '舒眼喷雾加强版补充装',
					desc: '适合严重眼疲劳成人/老人使用',
					flip: false
				},
				{
					id: 3,
					img: 'https://www.ushiyihao.com/static/product/buchongshuhuan.jpg',
					qr: 'https://www.ushiyihao.com/static/product/buchongshuhuan-qr.png',
					info: 'https://www.ushiyihao.com/static/product/buchongshuhuan-info.jpg',
					name: '舒眼喷雾舒缓版补充装',
					desc: '适合18岁以下轻度眼疲劳者使用',
					flip: false
				},
				{
					id: 4,
					img: 'https://www.ushiyihao.com/static/product/huyanyidetail.jpg',
					qr: 'https://www.ushiyihao.com/static/product/huyanyidetail-qr.png',
					info: 'https://www.ushiyihao.com/static/product/huyanyidetail-info.jpg',
					name: '智慧护眼仪',
					desc: '一台会说话的护眼仪',
					flip: false
				},
				{
					id: 5,
					img: 'https://www.ushiyihao.com/static/product/baijiahei.jpg',
					qr: 'https://www.ushiyihao.com/static/product/baijiahei-qr.png',
					info: 'https://www.ushiyihao.com/static/product/baijiahei-info.jpg',
					name: '白加黑舒视眼贴',
					desc: '缓解视疲劳、提升睡眠质量，现代眼贴“黑科技”',
					flip: false
				},
				{
					id: 6,
					img: 'https://www.ushiyihao.com/static/product/yihaoyantieindex.jpg',
					qr: 'https://www.ushiyihao.com/static/product/yihaoyantieindex-qr.png',
					info: 'https://www.ushiyihao.com/static/product/yihaoyantieindex-info.jpg',
					name: '舒润盈亮眼贴',
					desc: '针对青少年的眼贴',
					flip: false
				},
				{
					id: 7,
					img: 'https://www.ushiyihao.com/static/product/erhaoyantieindex.jpg',
					qr: 'https://www.ushiyihao.com/static/product/erhaoyantieindex-qr.png',
					info: 'https://www.ushiyihao.com/static/product/erhaoyantieindex-info.jpg',
					name: '轻柔舒缓眼贴',
					desc: '针对办公一族的眼贴',
					flip: false
				},
				{
					id: 8,
					img: 'https://www.ushiyihao.com/static/product/sanhaoyantieidnex.jpg',
					qr: 'https://www.ushiyihao.com/static/product/sanhaoyantieidnex-qr.png',
					info: 'https://www.ushiyihao.com/static/product/sanhaoyantieidnex-info.jpg',
					name: '晶润紧致眼贴',
					desc: '针对电脑一族的眼贴',
					flip: false
				},
				{
					id: 9,
					img: 'https://www.ushiyihao.com/static/product/yiyonglengfuindex.jpg',
					qr: 'https://www.ushiyihao.com/static/product/yiyonglengfuindex-qr.png',
					info: 'https://www.ushiyihao.com/static/product/yiyonglengfuindex-info.jpg',
					name: '医用冷敷眼贴',
					desc: '15分钟重回明亮双眸',
					flip: false
				}
			],
			newsList1: [],
			newsList2: []
		}
	},
	methods: {
		flipShow (target, item) {
			clearTimeout(item.timeid)
			item.timeid = setTimeout(()=>{
				let eleFront = target.querySelector('.flip.in')
				let eleBack  = target.querySelector('.flip.out')

				if(eleFront){
					eleFront.classList.add('out')
					eleFront.classList.remove('in')
			    setTimeout(function () {
			    	eleBack.classList.add('in')
			    	eleBack.classList.remove('out')
			    }, 225)	
				}
			}, 100)
		},
		timeout (timeid) {
			clearTimeout(timeid)
		}
	},
	created () {
		this.$api.news.getList(1).then(({data})=>{
			this.newsList1 = data.websiteNews
		})

		this.$api.news.getList(2).then(({data})=>{
			this.newsList2 = data.websiteNews
		})
	}
}
</script>
<style lang="scss">
.l-index-banner{
	._img{display: block; height: 100%; background-repeat: no-repeat; background-position: 50% 50%;}
}

.l-carousel-product{
	text-align: center; margin: 1rem auto;
	.el-carousel__item{visibility: visible;}
	.el-carousel__indicators{visibility: hidden;}
	._item{
		width: 250px; display: inline-block; text-align: left; border:1px solid #64c4a8; color: inherit; text-decoration: none;
		img{width: 250px; height: 250px;vertical-align: top;}
		._img{
			position: relative;
			img.flip{position: absolute; top:0; left: 0; width: 100%;}
		}
		._txt{
			background: #64c4a8; color: #fff; padding: 0.75rem;
			h4{margin:0 0 5px 0;}
		}
	}
	.is-active ._item{
		// box-shadow: -7px 7px 5px 0px #ddd;
	}
}
.l-product-keyword{
	overflow: hidden;
	span{float: left;width: 20%; text-align: center; margin: 0.75rem 0;}
}
.l-box-news{
	min-height: 200px;
	._hd{
		background: #00a0e9; color: #fff; padding: 0.75rem 1rem;
		h3{margin: 0;}
		a{color: #fff; cursor: pointer;margin-top: 1px;}
	}

	._bd{
		border: 1px solid #ccc; border-top: none; overflow: hidden; height: 339px;
		ul{padding: 0 1rem 0 2rem;}
		li{margin: 0.5rem 0;}
		a{color: #333; text-decoration: none;cursor: pointer;}
		a:hover{color: #00a0e9; text-decoration: underline;}
	}
}
</style>