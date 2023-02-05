<template>
  <div>
    <Student name="周星星" sex="男" :age="16"/>
    <!-- <Student name="张三" sex="男" age="17"/> -->
    
  </div>
</template>

<script>
import Student from './components/Student.vue'
export default {
  name:'App',
  components:{
    Student
  },
}
</script>
