<template>
	<div>
		<tab :isClickable='isClickable' :lastLev='lastLev'></tab>
		<subTab :showHot='position' :isClickable='subTabClick'></subTab>
		<div>
			<h5>Job No.: 2020/20390/B0C</h5>
			<h5>Assigned Inspector: David Chow</h5>
			<h4>S9 Florissa Park Giffard Mansion</h4>
		</div>
		<div>
		    <img src="../assets/floorPlanA.jpg" height="auto" width="90%" alt="">
			<div>{{planName[0].name1}}</div>
			<a-button 
			class="buttoncolor" 
			block :size="size" 
			@click="$router.push({name:'inspeFormB',query:{planName:planName[0].name1}})">Mark Inspection Spot</a-button>
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
				subTabClick: [true,true,false],
				lastLev: 'moveDetail',
				isClickable: true,
				position:0,
				planName:[
					{name1:'Floor Plan A'}
				],
				onClick:function(){
					this.$router.push({name:"index"});
				}
				
			}
		}
	}
</script>

<style>
</style>
