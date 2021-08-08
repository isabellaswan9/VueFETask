<template>
	<div>
		<tab></tab>
		<subTab :showHot='position'></subTab>
	</div>
</template>

<script>
	export default{
		name:'floorPlan',
		data(){
			return {
				position:0,
			}
		}
	}
</script>

<style>
</style>
