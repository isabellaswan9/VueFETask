<template>
	<div>
		<roomItem v-for="(item,index) in roomNames" :roomName='item.name' :key='index'></roomItem>
	</div>
	
</template>

<script>
	import roomItem from './roomItem'
	
	export default {
		name: 'roomList',
		components:{
			roomItem,
		},
		data(){
			return {
				roomNames:[
					{name:'Sitting Room'},
					{name:'BedRoom1'},
					{name:'BedRoom2'},
					{name:'kitchen'},
					{name:'Toliet'},
				]
			}
		}
	}
</script>

<style>
</style>
