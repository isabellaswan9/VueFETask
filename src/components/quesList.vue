<template>
	<div>
		<h5>{{sites[0].title}}</h5>
	<a-radio-group v-model="value" @change="onChange" :disabled="edit">
			  <a-radio-button class="option"  
			  :style="{backgroundColor:(value==site.value?'#fdde07':'#eeeeee'),color:(value==site.value?'#181200':'#808183')}" 
			  :class="{'option-active':value==site.value}"
			  v-for="site in sites" :key="site.value"  :value="site.value" >
				  <a-icon v-if="site.value==value" type="check-circle" style="color:green"/>
				  {{ site.text }}
			  </a-radio-button>

	    <a-radio-button class="option" 
		:style="{backgroundColor:(value==sites.length+1?'#fdde07':'#eeeeee'),color:(value==sites.length+1?'#181200':'#808183')}" 
		:class="{'option-active':value==sites.length+1}"
		:value="sites.length+1">Other...
		<a-input placeholder="Please state" class="bigInput" @click="value=sites.length+1"/>
	    </a-radio-button>
	  </a-radio-group>
	  
	  </div>
</template>

<script>
	export default {
		name:'quesList',
		props: ["sites"],
		data(){
			return {
				isChecked:true,
				value:0,
				radioStyle: {
				        display: 'block',
				        height: '30px',
				        lineHeight: '30px',
				      },
			};
		},
		methods: {
		    onChange(e) {
		      console.log('radio checked', e.target.value);
		    },
				},
	};
</script>

<style>
	.bigInput{
		border: none;
		height:50px
	}
	.option{
		width:100%;
		height: auto;
		padding-left: 40px;
		padding-top: 5px;
		padding-bottom: 5px;
		background-color: #eeeeee;
		margin-bottom: 5px;
		border: none;
	}
	.option-active{
		margin-left: 10px;
		font-weight: bold;
	}
</style>
