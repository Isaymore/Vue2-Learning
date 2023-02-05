<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <School :get-school-name='getSchoolName'/>
    <Student @self-event="getStudentName" @demo="m1"/>   
    <!-- <Student ref="student"/> -->
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
  data() {
    return {
      msg:'hello'
    }
  },
  methods: {
    getSchoolName(name){
      console.log('App收到学校名',name)
    },
    getStudentName(name,...params){
      console.log('App收到学生名',name,params)
    },
    m1(){
      console.log('demo事件被触发了')
    }
  },
  // mounted() {
  //   setTimeout(() => {
  //     // this.$refs.student.$on('self-event',this.getStudentName)
  //     this.$refs.student.$once('self-event',this.getStudentName)
  //   }, 3000);
  // },
}
</script>
<style lang="less" scoped>
.app{
  background-color: #ddd;
}
</style>
