import {watch,toRaw} from 'vue';
export default function useSetLocalStorageOfStudents(students){
	watch(students,(newVal,oldVal)=>{
		console.log(toRaw(newVal));
		localStorage.setItem('students',JSON.stringify(toRaw(newVal)));
	})
}