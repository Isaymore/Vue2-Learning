<template>
	<div>
		<table id="tfhover" class="tftable" border="1">
		<tr><th>序号</th><th>姓名</th><th>年龄</th><th>操作</th></tr>
		<tr>
			<td>
				※
			</td>
			<td>
				<input type="text" v-model="student.name" />
			</td>
			<td>
				<input type="number" v-model="student.age" />
			</td>
			<td>
				<input type="submit" value="添加" @click="addStu"/>
			</td>
		</tr>
		<tr
		 :class="{active:activeId==student.id}" 
		 @mouseover="over(student.id)" 
		 @mouseout="out"
		 v-for="(student,index) in students"
		 :key='student.id'
		>
			<td>
				{{index+1}}
			</td>
			<td>
				{{student.name}}
			</td>
			<td>
				{{student.age}}
			</td>
			<td>
				<button @click="removeStudent(index)">删除</button>
			</td>
		</tr>
		</table>
	</div>
</template>

<script>
	import {ref,onBeforeMount,onMounted,onBeforeUpdate,onUpdated} from 'vue';
	import useRemoveStu from './useRemove.js';
	import useAddStu from './useAdd.js';
	import useActive from './useActive.js';
	import useGetLocalStorageOfStudents from './useGetLocalStorageOfStudents.js';
	import useSetLocalStorageOfStudents from './useSetLocalStorageOfStudents.js';
	export default{
		name:'student',
		setup(){
			let students=useGetLocalStorageOfStudents();
			let removeStudent=useRemoveStu(students);
			let {student,addStu}=useAddStu(students);
			let {activeId,over,out}=useActive();
			useSetLocalStorageOfStudents(students);
			
			
			//生命周期
			onBeforeMount(()=>{
				console.log('BeforeMount');
			})
			onMounted(()=>{
				console.log('Mounted');
			})
			onBeforeUpdate(()=>{
				console.log('BeforeUpdate');
			})
			onUpdated(()=>{
				console.log('Updated');
			})
			
			return {students,removeStudent,student,addStu,activeId,over,out};
		}
	}
</script>

<style>
	*{
		list-style: none;
		margin: 0;
		padding: 0;
	}
	input[type='text'],input[type='number']{
		width: calc(100% - 20px);
	}
</style>
<style>
	table.tftable {font-size:12px;color:#333333;width:100vw;border-width: 1px;border-color: #729ea5;border-collapse: collapse;}
	table.tftable th {font-size:12px;background-color:#acc8cc;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;text-align:left;}
	table.tftable tr {background-color:#d4e3e5;}
	table.tftable td {font-size:12px;border-width: 1px;padding: 8px;border-style: solid;border-color: #729ea5;}
	.active{
		background-color: #ffffff !important;
	}
</style>
