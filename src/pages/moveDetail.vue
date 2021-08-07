<template>
	<div>
		<div>
			<a-row type="flex" justify="space-around">
			      <a-col>
			        <a-button @click='$router.push({name:"index"})'> <a-icon type="left" /></a-button>
			      </a-col>
			      <a-col >
			        <p>Job Report - Part A</p>
			      </a-col>
			      <a-col >
			        <a-button ><a-icon type="share-alt" /></a-button>
			      </a-col>
			    </a-row>
		</div>
	  <ul class="topNav">
	    <li :class="[showHot==1?'active':'']" @click="showHot=1"><a-icon type="form" /></li>
	    <li :class="[showHot==0?'active':'']" @click="showHot=0"><a-icon type="diff" /></li>
		<li :class="[showHot==-1?'active':'']" @click="showHot=-1"><a-icon type="edit" /></li>
	  </ul>
	  <ul class="topNav">
	    <li :class="[showHot2==1?'active':'']" @click="showHot2=1"><a-icon type="form" /></li>
	    <li :class="[showHot2==0?'active':'']" @click="showHot2=0"><a-icon type="camera" /></li>
	  </ul>
	  <div class="main">
	    <hoting v-show="showHot==1"></hoting>
	    <comming v-show="showHot==0"></comming>
	  </div>
	  
	</div>
</template>

<script>
	import hoting from '../components/hoting'
		import comming from '../components/comming'
	export default {
	  name: "movieDetail",
	  //引入并注册组件
	  components: {
	      hoting,comming
	    },
	  data() {
	    return {
	      showHot:1,
		  showHot2:1,
	    };
	  }
	};
</script>

<style>
	.pageTitle{
	  height: 51px;
	  width: 100%;
	  background-color: white;
	  text-align: center;
	  line-height: 51px;
	  color: black;
	  font-size: 1.1em;
	}
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
	.main{
	  padding: 50px;
	}
</style>
