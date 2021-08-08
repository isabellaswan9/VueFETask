<template>
	
	<div>
		<loading v-if="!isReady"></loading>
		<a-spin :spinning="spinning">
			<!--向子组件传值isClickable，定义右上图标是否可点击-->
		<tab :isClickable='isClickable' @parentSubmit="formSubmit"></tab>
		<subTab :showHot='position'></subTab>
		<!--通过path和query获取参数，也可以利用params接收参数-->
		<p>{{this.$route.query.planName}}</p>	
		</a-spin>
	</div>

</template>

<script>
	import loading from '../components/loading.vue'
	
	let pic = false;
	let pic2 = true;
	
	export default{
		name:'inspeFormB',
		components:{
			loading,
		},
		data(){
			return {
				isClickable: false,
				position:-1,
				spinning: pic,
				isReady: pic2,
				change: function(){
					setTimeout(function(){
						//alert('等待中');
						Console.log('等待中');
					},1000);
					}
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
					},1000)
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
