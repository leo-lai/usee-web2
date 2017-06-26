<template>
	<div class="l-page">
		<l-header></l-header>
		<div class="l-page-banner" style="background-image:url('/static/banner-001.jpg')">
			<img src="/static/banner-001.jpg" alt="">
		</div>
		<div class="l-page-bd">
    	<div class="_inner">
    		<p class="l-text-center">
    			<img src="~assets/images/u2.png" alt="U视一号区域合伙人">
    		</p>
    		<p class="l-text-center">
    			<img src="~assets/images/u1.png" alt="U视一号小U店长">
    		</p>
    		<div class="l-column-tit">
    			<div class="_inner">
    				<h3>如何申请代理商</h3>
    				<p>How To Apply</p>
    			</div>
    		</div>
        <el-steps class="l-step-center" :space="250" :active="stepIndex" >
          <el-step title="关注公众号"></el-step>
          <el-step title="点击推送图文"></el-step>
          <el-step title="填写资料"></el-step>
          <el-step title="提交申请等待审核"></el-step>
        </el-steps>
        <el-carousel class="l-step-apply" trigger="click" height="300px" @change="carouselChange">
          <el-carousel-item>
            <table class="_item">
              <tr>
                <td width="200"><img width="200" height="200" src="~assets/images/usee-online.jpg" alt=""></td>
                <td>1.扫描左侧二维码，关注U视一号官方公众号，如果为其他人推荐，则直接扫描其他人的推荐码即可；</td>
              </tr>
            </table>
          </el-carousel-item>
          <el-carousel-item>
            <table class="_item">
              <tr>
                <td width="200"><img width="200" height="100%" src="~assets/images/apply2.png" alt=""></td>
                <td>2. 点击推送图文消息的第二条，进入申请页面；</td>
              </tr>
            </table>
          </el-carousel-item>
          <el-carousel-item>
            <table class="_item">
              <tr>
                <td width="200"><img width="200" height="100%" src="~assets/images/apply3.png" alt=""></td>
                <td>3. 按实际情况填写资料，并提交申请，只能本人申请，请勿替他人提交申请；</td>
              </tr>
            </table>
          </el-carousel-item>
          <el-carousel-item>
            <table class="_item">
              <tr>
                <td width="200"><img width="200" height="100%" src="~assets/images/apply4.png" alt=""></td>
                <td>4. 提交成功之后将会有工作人员审核并于您核实，审核结果也会在公众号推送给您，通过则获得对应代理商资格，如还有疑问请联系客服：400-180-6900；</td>
              </tr>
            </table>
          </el-carousel-item>
        </el-carousel>
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
			stepIndex: 1
		}
	},
  methods: {
    carouselChange(index) {
      this.stepIndex = index+1
    }
  }
}
</script>
<style scoped lang="scss">
.l-step-index{
  overflow: hidden;
  ._item{
    float: left; width: 25%; text-align: center; 
    i{display: inline-block; width: 40px; height: 40px; line-height: 40px; border-radius: 50%; border: 1px solid #ddd; font-style: normal; margin-bottom: 10px; font-size: 1rem;}
  }
  ._item._active{
    i{background: #3498db; border-color: #3498db; color: #fff;}
  }
}
.l-step-apply{
  margin: 50px 0;
  ._item{
    display: block; width: 600px; height: 100%; margin: auto;
    td{height: 300px; vertical-align: middle; padding: 0 20px;}
  }
}
</style>