<template>
	<div>
		<tab></tab>
		<subTab></subTab>
	  <ul class="topNav">
	    <li :class="[showHot2==1?'active':'']" @click="showHot2=1"><a-icon type="form" /></li>
	    <li :class="[showHot2==0?'active':'']" @click="showHot2=0"><a-icon type="camera" /></li>
	  </ul>
	  <div class="set-padding">
		  <p>
			Job No.: 2020/20390/BOC
		  </p>
		  <h6>Assigned Inspector: David Chow</h6>
		  <h5>S9 Florissa Park Giffard Mansion</h5>
		  <h3>Part A: The Subject Building/Land</h3>
	  </div>
	  <hr>
	  <a-radio-group v-model="value" @change="onChange">
		  <a-radio v-for="site in sites" :value="site.value" :style="radioStyle">
			  {{ site.text }}{{site.value}}
		  </a-radio>
	      <a-radio :style="radioStyle" :value="4">
	        More...
	        <a-input v-if="value === 4" :style="{ width: 100, marginLeft: 10 }" />
	      </a-radio>
	    </a-radio-group>
	</div>
</template>

<script>
	import hoting from '../components/hoting'
		import comming from '../components/comming'
		import tab from '../components/tab'
		import subTab from '../components/subTab'
	export default {
	  name: "movieDetail",
	  //引入并注册组件
	  components: {
	      hoting,comming,tab,subTab
	    },
	  data() {
	    return {
		  showHot2:1,
		  value:1,
		  radioStyle: {
		          display: 'block',
		          height: '30px',
		          lineHeight: '30px',
		        },
			sites:[
				{text:'Google',value:1},
				{ text: 'Runoob' ,value:2},
				{ text: 'Taobao' ,value:3}
			]
	    };
	  },
	  methods: {
	      onChange(e) {
			  alert(e.target.value);
	        console.log('radio checked', e.target.value);
	      },
		},
	};
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
	.set-padding{
		padding:10px;
	}
</style>
