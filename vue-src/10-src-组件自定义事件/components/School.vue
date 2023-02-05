<template>
  <div class="demo">
    <h1 class="title">学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <button @click="sendSchoolName">发送学校名给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props:['get-school-name'],
  data() {
    return {
      name: "广州大学",
      address: "广州",
    };
  },
  methods: {
    sendSchoolName(){
      // console.log(this.name)
      // console.log(this)
      this.getSchoolName(this.name)
    }
  },
};
</script>

<style scoped>
.demo {
  background-color: skyblue;
}
</style>