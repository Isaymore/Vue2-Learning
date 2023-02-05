<template>
  <div class="demo">
    <h1 class="title">学生姓名：{{ name }}</h1>
    <h1>学生性别：{{ sex }}</h1>
    <h1>学生年龄：{{ age }}</h1>
    <h1>当前n值为{{n}}</h1>
    <button @click="add">点击n++</button>
    <button @click="sendStudentName">发送学生名给App</button>
    <button @click="unbind">解绑self-event</button>
    <button @click="death">点击销毁Student组件实例</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    // console.log(this)
    return {
      name: "周星星",
      sex: "男",
      age: 17,
      n:0
    };
  },
  methods: {
    death(){
      this.$destroy()
    },
    add(){
      console.log('add回调函数被调用了')
      this.n++
    },
    sendStudentName(){
      this.$emit('self-event',this.name,666,888,999)
      this.$emit('demo')
    },
    unbind(){
      // this.$off('self-event')
      // this.$off(['self-event','m1'])
      this.$off()
    }
  },
};
</script>
<style lang="less" scoped>
.demo {
  background-color:pink;
}
</style>