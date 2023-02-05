import {ref} from 'vue';
export default function useActive () {
	let activeId=ref();
	function over(id){
		activeId.value=id;
	}
	function out(){
		activeId.value=null;
	}
	return {activeId,over,out};
}