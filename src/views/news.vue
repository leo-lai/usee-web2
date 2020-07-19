<template>
	<div class="l-page">
		<l-header></l-header>
		<div class="l-page-banner" style="background-image:url('/static/article_banner.jpg')">
			<img src="/static/article_banner.jpg" alt="">
		</div>
		<div class="l-page-bd">
    	<div class="_inner">
    		<div class="l-bd-tab">
    			<div class="_tit">
    				<a class="_item" :class="{'_active': tabIndex == 1}" @click="tabClick(1)">企业动态</a>
    				<a class="_item" :class="{'_active': tabIndex == 2}" @click="tabClick(2)">护眼知识</a>
    			</div>
    			<div class="_cont">
    				<div class="_item" :class="{'_active': tabIndex == 1}">
    					<div class="l-news-list">
    						<div class="_item" v-for="item in new1.data">
    							<h3>{{item.newsTitle}}</h3>
    							<p><span class="l-text-gray l-fs-m">{{item.published}}</span></p>
    							<p>{{item.newsDescribe}}</p>
    							<p class="l-text-right"><router-link :to="'/news/info/' + item.newsId">阅读全文</router-link></p>
    						</div>
    					</div>
    					<div class="l-margin l-text-center" v-if="new1.total > 0">
    						<br><br>
							  <el-pagination @current-change="getList"
							    layout="prev, pager, next"
							    :total="new1.total">
							  </el-pagination>
							</div>
    				</div>
    				<div class="_item" :class="{'_active': tabIndex == 2}">
    					<div class="l-news-list">
    						<div class="_item" v-for="item in new2.data">
    							<h3>{{item.newsTitle}}</h3>
    							<p><span class="l-text-gray l-fs-m">{{item.published}}</span></p>
    							<p>{{item.newsDescribe}}</p>
    							<p class="l-text-right"><router-link :to="'/news/info/' + item.newsId">阅读全文</router-link></p>
    						</div>
    					</div>
    					<div class="l-margin l-text-center" v-if="new2.total > 0">
    						<br><br>
							  <el-pagination @current-change="getList"
							    layout="prev, pager, next"
							    :total="new2.total">
							  </el-pagination>
							</div>
    				</div>
    			</div>
    		</div>
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
	methods: {
		tabClick(index = 1) {
			this.tabIndex = index
			this.getList()
		},
		getList(page){
			let list = this['new' + this.tabIndex]
			page = page || list.page
			this.$api.news.getList(this.tabIndex, page).then(({data})=>{
				list.data = data.websiteNews
				list.total = data.total
				list.page = data.page
			})
		}
	},
	data() {
		return {
			tabIndex: 1,
			new1: {
				data: [],
				total: 0,
				page: 1
			},
			new2: {
				data: [],
				total: 0,
				page: 1
			}
		}
	},
	created() {
		this.tabClick(this.$route.query.tab)
	}
}
</script>
<style scoped lang="scss">
.l-page-bd{
	background: #eff3f5; position: relative; z-index: 1;
	>._inner{background-color: transparent;}
}

.l-news-list{
	._item{
		margin: 10px 0 30px; border-bottom: 1px dashed #ddd;
		h3{margin: 0;}
		p{margin-top: 10px;}
		a{color: #20a0ff; text-decoration: underline; cursor: pointer;}
	}
}

</style>