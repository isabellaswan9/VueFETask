<template>
	<div>
		<a-row type="flex" justify="space-around">
		      <a-col>
		        <a-button class='littleButton' @click='$router.push({name:lastLev})'> <a-icon type="left" /></a-button>
		      </a-col>
		      <a-col >
		        <div class='font1'>Job Report - Part A</div>
		      </a-col>
		      <a-col >
		        <a-button class='littleButton' :disabled='isClickable' @click="toSubmit()" style="color: #7e97b6;"><a-icon type="share-alt" /></a-button>
		      </a-col>
		    </a-row>
	</div>
</template>

<script>
	export default {
		name: 'tab',
		props: ["isClickable","lastLev"],
		data(){
			return {
				lastLev:"floorPlan"
			}
		},
		methods:{
			//通过$emit触发事件
			toSubmit: function(){
				this.$emit('parentSubmit')
			}
		}
	}
</script>

<style>
	.littleButton{
		border: none;
	}
	.font1{
		font-family:"agency fb";
		font-size: 0.5rem;
		font-weight: bold;
		margin-top: 0.25rem;
	}
</style>
