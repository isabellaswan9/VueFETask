<template>
	<div>
		<tab :isClickable='isClickable' :lastLev='lastLev'></tab>
		<subTab :showHot=1 :isClickable='subTabClick'></subTab>
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
	  <a-divider />
	  <a-row type="flex" justify="space-between" align="top" class="main">
		  <steps></steps>
		  <formA></formA>
	</a-row>
	</div>
</template>

<script>
		import steps from '../components/steps.vue'
		import formA from '../components/formA.vue'
	export default {
	  name: "movieDetail",
	  //引入并注册组件
	  components: {
		 steps,formA
	    },
	  data() {
	    return {
			subTabClick: [true,false,false],
			lastLev: 'index',
			isClickable: true,
			isActive: true,
		  showHot2:1,
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
	.smallInput{
		width:40px;
		height: 40px;
		margin: 8px;
	}
	.middleInput{
		width:85px;
		height: 40px;
		margin: 10px;
	}
	.middleButton{
		height:50px;
		width: 40%;
		margin: 10px;
		border: none;
		background-color: #fdde07;
		color: #2c3500;
	}
	.middleButton2{
		height:50px;
		width: 40%;
		margin: 10px;
		border: none;
		background-color: #252839;
		color: #fafbff;
	}

</style>
