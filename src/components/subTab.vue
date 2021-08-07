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
		data(){
			return {showHot:1};
		}
	}
</script>

<style>
</style>
