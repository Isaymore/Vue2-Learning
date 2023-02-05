import {
	reactive
} from 'vue';
export default function useAddStu(stus){
	let student = reactive({
		name: '',
		age: ''
	})
	function addStu() {
		if (student.name&&student.age) {
			let stu = Object.assign({
				id: new Date().getTime()
			}, student);
			stus.push(stu);
			student.name = student.age = '';
		}else{
			alert('姓名和年龄不能为空')
		}
	}
	return {student,addStu};
}
