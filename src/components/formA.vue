<template>
	<div class="myForm">
		  <a-form :form="form" @submit="handleSubmit">
			  <fieldset :disabled="edit">
			<quesList :sites="queses1"></quesList>
			<quesList :sites="queses2"></quesList>
			<quesList :sites="queses3"></quesList>
			<quesList :sites="queses4"></quesList>
			<div>
				<h5>3. Composition</h5>
				<div>
					<input class="smallInput"/>- storey
					<input class="middleInput"/>purposes
				</div>
				<div>
					<input class="smallInput"/>- storey
					<input class="middleInput" />purposes
				</div>
			</div>
			<div>
				<h5>4. Facilities Provided</h5>
				<div>
					<a-textarea placeholder="Basic usage" :rows="4" />
				</div>
			</div>
			<div>
				<h5>5. Lifts</h5>
				<div>
					<input class="smallInput" />     
					<input class="smallInput" />Service
					<input class="smallInput" />Vehicle
				</div>
			</div>
			<div>
				<button class="middleButton2" id="save" @click="disableAll">{{butName}}</button>
				<button class="middleButton" id="mark" @click='$router.push({name:"floorPlan"})'>Mark as Completed</button>
			</div>
			</fieldset>
		</a-form>
	</div>
</template>

<script>
	import quesList from './quesList'
	
	export default {
		name:'formA',
		components:{
			quesList,
		},
		data(){
			return {
				edit: false,
				butName: 'Save Only',
				queses1:[
								{text:'Residential',value:1,title:'1a. Type of Building/Land Use',},
								{ text: 'Composite' ,value:2},
								{ text: 'Industrial' ,value:3},
								{ text: 'Retail' ,value:4},
								{ text: 'Agricultural' ,value:5},
				],
				queses2:[
					{text:'Reinforced Concrete',value:1,title:'1b. Mode of Construction'},
				],
				queses3:[
						{text:'Painted',value:1,title:'1c. External Wall Finished',},
						{ text: 'Tiled' ,value:2},
						{ text: 'Agricultural' ,value:3},
						{ text: 'Others' ,value:4},
								{ text: 'Retail' ,value:5},
						{ text: 'Agricultural' ,value:6},
				],
				queses4:[
					{text:'Good',value:1,title:'2. External Condition:'},
					{ text: 'Reasonable' ,value:2},
					{ text: 'Poor' ,value:3},
				],
			};
		},
		methods:{
			disableAll () {
						this.edit = true;
						this.butName = 'Read Only';
					},
		}
	}
</script>

<style>
	.myForm{
		width: 85%;
	}
</style>
