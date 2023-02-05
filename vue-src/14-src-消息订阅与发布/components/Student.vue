<template>
  <div class="demo">
    <h1 class="title">学生姓名：{{ name }}</h1>
    <h1>学生性别：{{ sex }}</h1>
    <h1>学生年龄：{{ age }}</h1>
    <button @click="sendStudentName">发送学生名给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "Student",
  data() {
    // console.log(this)
    return {
      name: "周星星",
      sex: "男",
      age: 17,
    };
  },
  methods: {
    sendStudentName(){
      // this.$bus.$emit('hello',this.name)
      pubsub.publish('hello',this.name)
    }
  },
  mounted() {
    // console.log('Student',window.x)
    // console.log('Student',this.$bus)
  },
};
</script>
<style lang="less" scoped>
.demo {
  background-color:pink;
}
</style>