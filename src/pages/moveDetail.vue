<template>
	<div>
		<tab :isClickable='isClickable' :lastLev='lastLev'></tab>
		<subTab :showHot=1 :isClickable='subTabClick'></subTab>
	  <div class="subNav">
	    <li :class="[showHot2==1?'subActive':'']" @click="showHot2=1"><a-icon type="form" /></li>
	    <li :class="[showHot2==0?'subActive':'']" @click="showHot2=0"><a-icon type="camera" /></li>
	  </div>
	  <div class="set-padding">
		  <h6>
			Job No.: 2020/20390/BOC
		  </h6>
		  <h6>Assigned Inspector: David Chow</h6>
		  <div class="font2">S9 Florissa Park Giffard Mansion</div>
		  <div class="font3">Part A: The Subject Building/Land</div>
	  </div>
	  <hr />
	  <a-row type="flex" justify="space-between" align="top" class="main set-padding">
		  <steps></steps>
		  <formA ref="mychild"></formA>
	</a-row>
	<div>
		<button class="middleButton2" id="save" @click="disableAll">{{butName}}</button>
		<button class="middleButton" id="mark" @click='$router.push({name:"floorPlan"})'>Mark as Completed</button>
	</div>
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
			butName: 'Save Only',
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
		  disableAll () {
			  //使用refs触发子组件方法，可传参
		  			this.$refs.mychild.disableAll()
		  		},
		},
	};
</script>

<style>
	div{
		border: 2px;
	}
	h5{
		
	}
	.font2{
		font-family:"agency fb";
		font-size: 0.45rem;
		font-weight: bold;
	}
	.font3{
		font-family:"agency fb";
		font-size: 0.5rem;
		font-weight: bold;
		margin-top: 0.3125rem ;
	}
	hr{
		color: #ececec;
		opacity: 0.25;
	}
	.subNav{
	  display: flex;
	  flex-direction: row;
	  justify-content: space-around;
	  align-items: center;
	  background-color: #7a838a;
	}
	.subNav li{
		padding: 8px;
		cursor: pointer;
		width: 50%;
		text-align: center;
	}
	.subActive{
	  color: #FFFFFF;
	  border-bottom:2px solid #fdde07;
	}
	.set-padding{
		padding:10px;
	}

	.middleButton{
		height:50px;
		width: 45%;
		margin: 10px;
		border: none;
		background-color: #fdde07;
		color: #2c3500;
	}
	.middleButton2{
		height:50px;
		width: 45%;
		margin: 10px;
		border: none;
		background-color: #252839;
		color: #fafbff;
	}

</style>
