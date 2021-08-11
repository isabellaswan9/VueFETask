<template>
	<div class="loading-backdrop">
		<div class="loading-bg">
			<img class="loading" src="../assets/loading.gif">
			<p>Submitting</p>
		</div>
	</div>
</template>

<script>
	export default {
		name: "loading",
	};
</script>

<style lang='scss' scoped>
	.loading-backdrop{
		background-color: rgba(32, 32, 32, 0.493);
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 99;
	}
	.loading-bg {
	  text-align: center;
	  position: fixed;
	  padding: 20px;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	  border-radius: 8px;
	  z-index: 100;
	  > .loading {
	    width: 60px;
	    height: 60px;
	  }
	  > p {
	    color: #fff;
	  }
	}
</style>
