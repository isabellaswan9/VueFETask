<template>
	<div>
		<tab></tab>
		<subTab :showHot='position'></subTab>
		<div>
			<h5>Job No.: 2020/20390/B0C</h5>
			<h5>Assigned Inspector: David Chow</h5>
			<h4>S9 Florissa Park Giffard Mansion</h4>
		</div>
		<div>
		    <img src="../assets/floorPlanA.jpg" height="auto" width="90%" alt="">
			<div>{{planName[0].name1}}</div>
			<hoting></hoting>
		</div>
		
		<div>
		    <img src="../assets/floorPlanB.jpg" height="auto" width="90%" alt="">
		</div>
	</div>
</template>

<script>
	export default{
		name:'floorPlan',
		data(){
			return {
				position:0,
				planName:[
					{name1:'floor plan A'}
				]
					
				
			}
		}
	}
</script>

<style>
</style>
