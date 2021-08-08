<template>
	<ul class="topNav">
	  <li :class="[showHot==1?'active':'']" @click="showHot=1"><a-icon type="form" /></li>
	  <li :class="[showHot==0?'active':'']" @click="showHot=0"><a-icon type="diff" /></li>
			<li :class="[showHot==-1?'active':'']" @click="showHot=-1"><a-icon type="edit" /></li>
	</ul>
</template>

<script>
	export default {
		name:'subTab',
		props: ["showHot"],
		data(){
			return {};
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
	  padding: 8px;
	  cursor: pointer;
	}
	.active{
	  color: rgb(229, 72, 71);
	  border-bottom: 2px solid rgb(229, 72, 71);
	}
</style>
