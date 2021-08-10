<template>
	<div>
		<tab :isClickable='isClickable' :lastLev='lastLev'></tab>
		<subTab :showHot='position' :isClickable='subTabClick'></subTab>
		<div class='set-margin'>
			<div >
				<h5>Job No.: 2020/20390/B0C</h5>
				<h5>Assigned Inspector: David Chow</h5>
				<h4>S9 Florissa Park Giffard Mansion</h4>
			</div>
			<div style="margin-bottom: 1.25rem;">
				<img src="../assets/floorPlanA.jpg" height="auto" width="100%" alt="">
				<div style="background-color: #ffffff;margin-top: 10px;padding: 10px"> {{planName[0].name}}</div>
				<a-button 
				class="bigButton" 
				block :size="size" 
				@click="$router.push({name:'inspeFormB',query:{planName:planName[0].name}})">Mark Inspection Spot</a-button>
			</div>
			
			<div>
				<img src="../assets/floorPlanB.jpg" height="auto" width="100%" alt="">
				<div style="background-color: #ffffff;margin-top: 10px;padding: 10px"> {{planName[1].name}}</div>
				<a-button 
				class="bigButton" 
				block :size="size" 
				@click="$router.push({name:'inspeFormB',query:{planName:planName[1].name}})">Mark Inspection Spot</a-button>
			</div>
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
					{name:'Floor Plan A'},
					{name:'Floor Plan B'},
				],
				onClick:function(){
					this.$router.push({name:"index"});
				}
				
			}
		}
	}
</script>

<style>
	
	.bigButton{
		background-color: #fdde07;
		margin-top: 10px;
		width: 100%;
		height: 8vh;
		font-weight: 600;
	}
	.set-center{
		display: flex;
		justify-content: center;
	}
	.set-margin{
		background-color: #f9f9f9;
		padding: 20px;
	}
</style>
