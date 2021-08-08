<template>
  <div class="back" :style="conTop">
	  <div>
	      <img :src="imgSrc" width="100%" height="100%" alt="" />
	  </div>
	  <a-col type="flex" justify="space-around" align="middle">
	        <a-row :span="4">
				<div>
				    <img  src="../assets/test.png" height="100" width="100" alt="">
				</div>
	        </a-row>
	        <a-row :span="4">
				<img  src="../assets/appname.png" height="50" alt="">
	        </a-row>
	        <a-row :span="4">
	          <hoting></hoting>
	        </a-row>
	   </a-col>
</div>
</template>
   
<script>
	import hoting from '../components/hoting'
	let pic = { url : 'src/assets/login.png' }
	
export default {
  name: "index",
  //引入并注册组件
  components: {
      hoting
    },
  data() {
    return {
	  conTop: {
	              backgroundImage:'url(' + pic.url + ')',
	              backgroundRepeat:'no-repeat',
	              backgroundSize: 'cover',
	      },
    };
  }
};
</script>

<style scoped>
	.back{
		width:100%;  
		height:100%;  /**宽高100%是为了图片铺满屏幕 */
		z-index:1;
		position: absolute;
	}
</style>
