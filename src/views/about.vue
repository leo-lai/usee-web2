<template>
	<div class="l-page">
		<l-header></l-header>
		<div class="l-page-banner" style="background-image:url('/static/aboutus_banner.jpg')">
			<img src="/static/aboutus_banner.jpg" alt="">
		</div>
		<div class="l-page-bd">
    	<div class="_inner">
    		<div class="l-bd-tab">
    			<div class="_tit">
    				<a class="_item" :class="{'_active': tabIndex == 1}" @click="tabIndex = 1">关于我们</a>
    				<a class="_item" :class="{'_active': tabIndex == 2}" @click="tabIndex = 2">团队介绍</a>
    				<a class="_item" :class="{'_active': tabIndex == 3}" @click="tabIndex = 3">融资情况</a>
    			</div>
    			<div class="_cont">
    				<div class="_item" :class="{'_active': tabIndex == 1}">
    					<div class="l-column-tit">
			    			<div class="_inner">
			    				<h3>公司简介</h3>
			    				<p>Introduce</p>
			    			</div>
			    		</div>
			    		<div>
			    			<p>贵州优视一号生物科技有限公司（以下简称“U视一号”）是护眼解决方案服务商。近年来，公司携手中国各大中医药科研队伍结合当代科学技术研发出一系列致力于改善视力疲劳的产品、服务与全生命周期的“眼保姆”视力健康管理平台、及实时生活环境数据监测后台，是专注于研发生产缓解视力疲劳产品的领导品牌。“U视一号”眼健康项目启动于2014 年，是由贵州优视一号生物科技有限公司运营的高端视力健康管理品牌。经过多年的蕴育与成长，U 视一号视力健康体验、改善及训练服务得到越来越多用户的实践认可与口碑传播。目前已开设两百多家门店，帮助万名近视用户提升视力，改善视力健康问题。</p>
			    			<p class="l-margin-t-s">科研成果。“U 视一号”作为专业的视力健康管理及体验机构，拥有一个由国内中医药院校教授、博士组成的核新技术团队，他们以传统中医基础理论为指导，探寻中医明目古方古法，研究中医调理视力问题之机理，结合应用国际先进的视觉训练方式，融合视光学、经络腧穴学、心理学，项目经广东省中医药局批准立项、历经 3 年临床双盲试验后成功将成果推向市场。</p>
			    		</div>
			    		<br>
							<div class="l-column-tit">
			    			<div class="_inner">
			    				<h3>发展历程</h3>
			    				<p>Development</p>
			    			</div>
			    		</div>
			    		<div>
			    			<p>2014年9月，项目正式启动运营。</p>
			    			<p>2014年，U视一号护眼项目启动，开设253家门店，通过五位一体明目法，帮助万名近视用户提升视力。</p>
			    			<p>2016年，原有项目升级为“培元启明护目法”，综合运用经络刺激、穴位敷贴、手法推拿、视觉训练、体质干预、营养支持等方式，进行视力养护调理。</p>
			    			<p>2016年12月，U视一号发展前景良好，获得启赋资本、蛮子基金、众投邦三大机构的天使轮投资。</p>
			    			<p>2017年，U视一号集团进军电商，并建立三大销售渠道。同时将掌握的大量真实可靠的视力数据构建成属于自己的大数据管理中心，接轨智能医疗。</p>
			    		</div>
							<br>
			    		<div class="l-column-tit">
			    			<div class="_inner">
			    				<h3>联系我们</h3>
			    				<p>Contact us</p>
			    			</div>
			    		</div>
			    		<div class="l-text-center">
			    			<p>联系电话: 400-1806900</p>
			    			<p>邮箱：service@ushiyihao.com</p>
			    			<p>地址：广州市天河区沙太路陶庄5号空间3F009</p>
			    		</div>
    				</div>
    				<div class="_item" :class="{'_active': tabIndex == 2}">
    					<ul class="l-team-list">
    						<li>
    							<img class="_avatar" src="~assets/images/li.jpg" alt="">
    							<p><span class="l-text-gray l-margin-r-s">创始人</span><span class="l-fs-xl">李玉萍</span></p>
    							<p>贵州优视一号生物科技有限公司董事长。</p>
    							<p>从事营销工作23年，2014年自己女儿近视被调理好，本着“心存善念”原则创建优视一号。</p>
    						</li>
    						<li>
    							<img class="_avatar" src="~assets/images/cheng.jpg" alt="">
    							<p><span class="l-text-gray l-margin-r-s">互联网IT总监</span><span class="l-fs-xl">程晶</span></p>
    							<p>新西兰坎特伯雷国立大学B.Sc计算机科学专业。 </p>
    							<p>担任过HWS，Torrent Forest，云端物联等国内外公司核心岗位，创造过千万级别业绩。 擅长团队搭建，多维度，跨行业数据闭环系统设计，建设，执行，优化，维护。</p>
    						</li>
    						<li>
    							<img class="_avatar" src="~assets/images/xie.jpg" alt="">
    							<p><span class="l-text-gray l-margin-r-s">市场二部运营总监</span><span class="l-fs-xl">谢卓明</span></p>
    							<p>广东海洋大学。</p>
    							<p>大处着眼，小处着手，快消品行业多年实战运营经验。</p>
    						</li>
    						<li>
    							<img class="_avatar" src="~assets/images/kong.jpg" alt="">
    							<p><span class="l-text-gray l-margin-r-s">技术总监</span><span class="l-fs-xl">孔显坤</span></p>
    							<p>临床医学硕士。</p>
    							<p>深耕中医眼科及视光领域多年，主持省级中医视力康复课题1项，擅长中医治疗青少年近视，中医经络养生，多年临床，科研，培训经验。</p>
    						</li>
    					</ul>

    				</div>
    				<div class="_item" :class="{'_active': tabIndex == 3}">
    					<div class="l-padding l-text-center">
    						<h3 class="l-fs-l">三大知名风投机构携手投资</h3>
								<p>
									<img src="/static/img-101.jpg" alt="三大知名风投机构携手投资U视一号">
									<img src="/static/img-102.jpg" alt="三大知名风投机构携手投资U视一号">
									<img src="/static/img-103.jpg" alt="三大知名风投机构携手投资U视一号">
								</p>
								<br>
								<p>U视一号合作了253家线下门店专业从事是6-16青少年视力预防与保健；</p>
								<p>2016年底公司获得启赋资本、蛮子基金、众投邦三大知名机构投资；</p>
								<p>2017年公司将成为视力预防与保健解决方案平台；</p>
								<p>2020年公司将在全国开设30家中医眼科门诊；</p>
								<br>
								<p>一个平台</p>
								<p>所有与解决眼疾、与视力相关产品议器均可与我平台合作</p>
								<br>
								<p>二大核心</p>
								<p>IT系统自主研发，千万级U粉，自行运营</p>
								<br>
								<p>四大产品</p>
								<p>近视调理型产品：明目I型 、明目II型、体质贴、智慧护眼议、眼贴系列、喷喷第列</p>
								<br><br><br>
								<p>相关报道链接</p>
								<p><a target="_blank" href="http://www.e521.com/pl/cjpl/482117.shtml">投资新闻链接（中华财会网）</a></p>
								<p><a target="_blank" href="https://v.qq.com/x/page/v0359reqn1j.html">U视一号投资战略合作发布会</a></p>
								<p><a target="_blank" href="http://mp.weixin.qq.com/s/-pSyUWdA0Wyl6W6K7gsrEg">薛蛮子 我为U视喷喷代言视频</a></p>
								<p><a target="_blank" href="http://mp.weixin.qq.com/s/8z81lYY3-tzCg3pTCASywA">中国新三板报道：Pre-IPO概念成新三板主流投资逻辑：（启赋资本曾总为什么会投U视一号视频）</a></p>
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
	data() {
		return {
			tabIndex: 1
		}
	}
}
</script>
<style scoped lang="scss">
.l-page-bd{
	background: #eff3f5; position: relative; z-index: 1;
	>._inner{background-color: transparent;}
}

.l-team-list{
	width: 600px; margin: auto;
	li{list-style: none; padding: 30px 0; margin: 30px 0;}
	._avatar{margin-top: -40px;}
	li:nth-child(odd) ._avatar{
		float: left;
	}
	li:nth-child(even) ._avatar{
		float: right;
	}
}
</style>