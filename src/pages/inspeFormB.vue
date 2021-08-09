<template>
	
	<div>
		<loading v-if="!isReady"></loading>
		<a-spin :spinning="spinning">
			<!--向子组件传值isClickable，定义右上图标是否可点击-->
			<tab :isClickable='isClickable' @parentSubmit="formSubmit" :lastLev='lastLev'></tab>
			<subTab :showHot='position' :isClickable='subTabClick'></subTab>
		<!--通过path和query获取参数，也可以利用params接收参数-->
		<p>{{this.$route.query.planName}}</p>	
		</a-spin>
	</div>

</template>

<script>
	import loading from '../components/loading.vue'
	
	
	export default{
		name:'inspeFormB',
		components:{
			loading,
		},
		data(){
			return {
				lastLev: 'floorPlan',
				subTabClick: [true,true,true],
				isClickable: false,
				position:-1,
				spinning: false,
				isReady: true,
			}
		},
		methods: {
			formSubmit(){
				//alert(this);
				var vm = this;
				this.spinning=true;
				this.isReady=false;
				setTimeout(function(){	
					//alert(vm);
					vm.spinning=false;
					vm.isReady=true;
					},3000)
			}
		}
	};
</script>

<style>
	.backdrop {
	    position: fixed;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100vh;
	    z-index: 1000;
	    background: rgba(0, 0, 0, 0.75);
	  }
</style>
