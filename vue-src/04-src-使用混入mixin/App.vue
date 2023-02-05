<template>
  <div>
    <h1 class="title">hello</h1>
    <school/>
    <student/>   
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
export default {
  name:'App',
  components:{
    School,
    Student
  },
}
</script>
<style lang="less" scoped>
.title{
  color: red;
}
</style>
