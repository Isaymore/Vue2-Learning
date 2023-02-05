import {
	reactive
} from 'vue';
export default function useRemoveStu(students){
	
	
	function removeStudent(index) {
		students.splice(index, 1);
	}
	
	return removeStudent;
}