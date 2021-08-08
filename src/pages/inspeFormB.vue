<template>
	<div>
		<tab :isClickable=false></tab>
		<subTab :showHot='position'></subTab>
		<p>{{this.$route.query.planName}}</p>
	</div>
</template>

<script>
	export default{
		name:'inspeFormB',
		data(){
			return {
				position:-1,
			}
		}
	}
</script>

<style>
	
</style>
