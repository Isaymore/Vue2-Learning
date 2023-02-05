import {reactive} from 'vue';
export default function useGetLocalStorageOfStudents(){
	let local_students = JSON.parse(localStorage.getItem('students'));
	let stus = [
		{
			id: 1,
			name: '张三',
			age: 11,
		},
		{
			id: 2,
			name: '李四',
			age: 22,
		},
		{
			id: 3,
			name: '王五',
			age: 33,
		},
	]
	let students=reactive(local_students||stus);
	return students;
}