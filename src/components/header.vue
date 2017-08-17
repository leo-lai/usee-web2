<template>
	<div class="l-page-hd l-sticky">
		<el-row class="_inner" :gutter="0">
		  <el-col :span="8">
		  	<a class="l-page-hd-logo" href="/">
			  	<img src="~assets/logo32px.png" alt="优视一号">
			  	<p>护眼解决方案服务商</p>
		  	</a>
		  </el-col>
		  <el-col :span="16">
		  	<el-menu class="l-page-hd-menu" mode="horizontal" router :default-active="$route.path" @select="clickMenu">
				  <el-menu-item index="/">首页</el-menu-item>
				  <el-submenu index="/sys/">
				    <template slot="title">爱眼护眼</template>
				    <el-menu-item index="/sys?_sto=eye" >瞳诊系统</el-menu-item>
				    <el-menu-item index="/sys?_sto=train" >护眼训练</el-menu-item>
				    <el-menu-item index="/sys?_sto=check" >体质检测</el-menu-item>
				  </el-submenu>
				  <el-menu-item index="/shop/">U视商城</el-menu-item>
				  <el-menu-item index="/join/">区域合作</el-menu-item>
				  <el-menu-item index="/about/">关于我们</el-menu-item>
				</el-menu>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
import VueScrollTo from 'vue-scrollto'

export default {
	computed: {
		defaultActive() {
			return window.location.pathname
		}
	},
	methods: {
		clickMenu(path) {
			let query = this.$utils.url.getArgs(path)
			let toEle = document.getElementById(query._sto)
			if(query._sto && toEle){
				VueScrollTo.scrollTo( toEle, 300, {
			    container: 'body',
			    easing: 'ease-in',
			    offset: -60,
			    cancelable: true
				})
			}else{
				window.location.href = path
			}
			return false
		}
	},
}
</script>
<style lang="scss">
.l-page-hd{
	background: rgba(255,255,255,1); padding: 0; border-bottom: 1px solid #efefef;
	>._inner{width: 1000px; margin: auto;}
}
.l-page-hd-logo{
	display: block; padding: 7px 0; color: inherit; text-decoration: none;
}
.l-page-hd-menu{
	background-color: transparent; float: right;
	.el-menu-item, .el-submenu .el-submenu__title{
		height: 74px; line-height: 74px; font-size: 0.8rem;
	}
	.el-submenu>.el-menu{
		top: 75px; border:none;
	}
}
.l-page-hd-menu .el-menu-item:hover, .l-page-hd-menu .el-submenu__title:hover{
	background-color: transparent;
}

</style>