<template>
	<div class="hoting">
		<a-button class="buttoncolor" block :size="size" @click='$router.push({name:"moveDetail"})'>Login</a-button>
	</div>
</template>

<script>
	//导出组件
	export default {
		name:'hoting',
		data(){
			return {
				size:'large',
			};
		}
	}
</script>

<style>
	.buttoncolor{
		background-color: #fdde07;
		margin: 10px;
		width: 90%;

		font-weight: 600;
	}
</style>
