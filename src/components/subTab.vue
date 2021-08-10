<template>
	<div class="topNav">
	  <li :class="[showHot==1?'active':'']" :style="{pointerEvents:(isClickable[0]?'auto':'none')}" @click="$router.push({name:'moveDetail'})"><a-icon type="form" /></li>
	  <li :class="[showHot==0?'active':'']" :style="{pointerEvents:(isClickable[1]?'auto':'none')}" @click="$router.push({name:'floorPlan'})"><a-icon type="diff" /></li>
			<li :class="[showHot==-1?'active':'']" :style="{pointerEvents:(isClickable[2]?'auto':'none')}" @click="$router.push({name:'inspeFormB'})" ><a-icon type="edit" /></li>
	</div>
</template>

<script>
	export default {
		name:'subTab',
		props: ["showHot","isClickable"],
		data(){
			return {
				
			};
		}
	}
</script>

<style>
	.topNav{
	  display: flex;
	  flex-direction: row;
	  justify-content: space-around;
	  align-items: center;
	}
	.topNav li{
		width: 50%;
		text-align: center;
	  padding: 8px;
	  cursor: pointer;
	}
	.active{
	  color: #002f6d;
	  border-bottom: 2px solid #002f6d;
	}
</style>
