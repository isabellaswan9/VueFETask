<template>
	<a-radio-group v-model="value" @change="onChange">
			  <a-radio v-for="site in sites" :key="site.value"  :value="site.value" :style="radioStyle">
				  {{ site.text }}
			  </a-radio>
	    <a-radio :style="radioStyle" :value="6">
	          Other...<a-input placeholder="Basic usage" />
	        <a-input v-if="value === 6" :style="{ width: 100, marginLeft: 10 }" />
	    </a-radio>
	  </a-radio-group>
</template>

<script>
	export default {
		name:'quesList',
		props: ["sites"],
		data(){
			return {
				value:1,
				radioStyle: {
				        display: 'block',
				        height: '30px',
				        lineHeight: '30px',
				      },
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
</style>
