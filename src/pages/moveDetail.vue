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
		<quesList :sites="sites"></quesList>
		<quesList :sites="queses"></quesList>
	</div>
</template>

<script>
		import tab from '../components/tab'
		import subTab from '../components/subTab'
		import quesList from '../components/quesList'
		
	export default {
	  name: "movieDetail",
	  //引入并注册组件
	  components: {
		  tab,subTab,quesList
	    },
	  data() {
	    return {
		  showHot2:1,
		  sites:[
		  	{text:'Residential',value:1},
		  	{ text: 'Composite' ,value:2},
		  	{ text: 'Industrial' ,value:3},
			{ text: 'Retail' ,value:4},
			{ text: 'Agricultural' ,value:5},
		  ],
		  queses:[
		  	{text:'Google',value:1},
		  	{ text: 'Runoob' ,value:2},
		  	{ text: 'Taobao' ,value:3},
		  ],
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
