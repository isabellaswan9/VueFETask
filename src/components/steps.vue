<template>
	<div class="steps">
	<div class="font4">Part A</div>
	<div>
		
				  <div class="stepsItem">
					  <div class="icon"></div>
					  <div class="line"></div>
				  </div>
				  <div class="stepsItem">
				  		<div class="icon"></div>
				  		<div class="line"></div>
				  </div>
				  <div class="stepsItem">
				  		<div class="icon"></div>
				  		<div class="line"></div>
				  </div>
				  <div class="stepsItem">
				  		<div class="icon"></div>
				  		<div class="line"></div>
				  </div>
				  <div class="stepsItem">
				  		<div class="icon"></div>
				  		<div class="line"></div>
				  </div>
				  <div class="stepsItem">
				  		<div class="icon"></div>
				  		<div class="line"></div>
				  </div>
	</div>
	</div>
</template>

<script>
	export default{
		name:'steps',
	}
</script>

<style>
	.icon {
	      width: 13px;
	      height: 13px;
	      border-radius: 50%;
	      background: rgba(226, 226, 226, 1);
	      position: relative;
	    }
	.line{
	      position: absolute;
		  background: rgba(226, 226, 226, 1);
		  left:15px;
	      width: 4px;
		  height: 25px;
	    }
	.stepsItem{
		width: 13px;
		height: 38px;
	}
	.steps{
		width: 15%;
	}
	.font4{
		font-size: small;
		opacity: 0.75;
	}
</style>
