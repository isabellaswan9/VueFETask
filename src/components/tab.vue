<template>
	<div>
		<a-row type="flex" justify="space-around">
		      <a-col>
		        <a-button @click='$router.push({name:"index"})'> <a-icon type="left" /></a-button>
		      </a-col>
		      <a-col >
		        <p>Job Report - Part A</p>
		      </a-col>
		      <a-col >
		        <a-button :disabled='isClickable'><a-icon type="share-alt" /></a-button>
		      </a-col>
		    </a-row>
	</div>
</template>

<script>
	export default {
		name: 'tab',
		props: ["isClickable"],
		data(){
			return {
			}
		}
	}
</script>

<style>
</style>
