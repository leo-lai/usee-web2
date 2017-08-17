<template>
	<div class="l-page">
		<l-header></l-header>
		<div class="l-page-banner" style="background-image:url('/static/banner-002.jpg')">
			<img src="/static/banner-002.jpg" alt="">
		</div>
		<div class="l-page-bd">
    	<div class="_inner">
    		<div class="l-product-info l-text-center l-padding l-bg-white">
    			<img :src="info.info" alt="">
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
	data() {
		return {
			info: {},
			productList: [
				{
					id: 1,
					img: '/static/product/penpen.jpg',
					qr: '/static/product/penpen-qr.png',
					info: '/static/product/penpen-info.jpg',
					name: '舒眼喷雾',
					desc: '一款喷于眼皮的舒眼水',
					flip: false
				},
				{
					id: 2,
					img: '/static/product/gold.jpg',
					qr: '/static/product/gold-qr.png',
					info: '/static/product/gold-info.jpg',
					name: '舒眼喷雾加强版补充装',
					desc: '适合严重眼疲劳成人/老人使用',
					flip: false
				},
				{
					id: 3,
					img: '/static/product/buchongshuhuan.jpg',
					qr: '/static/product/buchongshuhuan-qr.png',
					info: '/static/product/buchongshuhuan-info.jpg',
					name: '舒眼喷雾舒缓版补充装',
					desc: '适合18岁以下轻度眼疲劳者使用',
					flip: false
				},
				{
					id: 4,
					img: '/static/product/huyanyidetail.jpg',
					qr: '/static/product/huyanyidetail-qr.png',
					info: '/static/product/huyanyidetail-info.jpg',
					name: '智慧护眼仪',
					desc: '一台会说话的护眼仪',
					flip: false
				},
				{
					id: 5,
					img: '/static/product/baijiahei.jpg',
					qr: '/static/product/baijiahei-qr.png',
					info: '/static/product/baijiahei-info.jpg',
					name: '白加黑舒视眼贴',
					desc: '缓解视疲劳、提升睡眠质量，现代眼贴“黑科技”',
					flip: false
				},
				{
					id: 6,
					img: '/static/product/yihaoyantieindex.jpg',
					qr: '/static/product/yihaoyantieindex-qr.png',
					info: '/static/product/yihaoyantieindex-info.jpg',
					name: '舒润盈亮眼贴',
					desc: '针对青少年的眼贴',
					flip: false
				},
				{
					id: 7,
					img: '/static/product/erhaoyantieindex.jpg',
					qr: '/static/product/erhaoyantieindex-qr.png',
					info: '/static/product/erhaoyantieindex-info.jpg',
					name: '轻柔舒缓眼贴',
					desc: '针对办公一族的眼贴',
					flip: false
				},
				{
					id: 8,
					img: '/static/product/sanhaoyantieidnex.jpg',
					qr: '/static/product/sanhaoyantieidnex-qr.png',
					info: '/static/product/sanhaoyantieidnex-info.jpg',
					name: '晶润紧致眼贴',
					desc: '针对电脑一族的眼贴',
					flip: false
				},
				{
					id: 9,
					img: '/static/product/yiyonglengfuindex.jpg',
					qr: '/static/product/yiyonglengfuindex-qr.png',
					info: '/static/product/yiyonglengfuindex-info.jpg',
					name: '医用冷敷眼贴',
					desc: '15分钟重回明亮双眸',
					flip: false
				}
			]
		}
	},
	created() {
		this.info = this.productList[this.$route.params.id-1] || {}
		console.log(this.info)
	}
}
</script>
<style scoped lang="scss">
.l-product-list{
	overflow: hidden; padding: 0 20px;
	._item {
		float: left; width: 33.33%; text-align: center; margin:0 0 2rem; border-bottom: 1px solid #eee; padding: 0.5rem 1rem; box-sizing: border-box; height: 420px;
		img{width: 100%;vertical-align: top;}
		._txt{
			padding: 0.75rem;
			h4{margin:0 0 5px 0;}
		}
	}
}
</style>