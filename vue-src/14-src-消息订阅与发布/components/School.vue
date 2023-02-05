<template>
  <div class="demo">
    <h1>学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
// console.log(pubsub,typeof pubsub)
export default {
  name: "School",
  data() {
    return {
      name: "广州大学",
      address: "广州",
    };
  },
  methods: {
    getStudentName(msgName,name){
      // console.log(this)
      console.log('获取到学生姓名',name)
    }
  },
  mounted() {
    // console.log('School',window.x)
    // console.log('School',this.$bus)
    // this.$bus.$on('hello',this.getStudentName)
    this.pid = pubsub.subscribe('hello',this.getStudentName)
  },
  beforeDestroy() { 
    // this.$bus.$off('hello')
    pubsup.unsubscribe(pid)
  },
};
</script>

<style scoped>
.demo {
  background-color: skyblue;
}
</style>