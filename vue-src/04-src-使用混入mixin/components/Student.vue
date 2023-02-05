<template>
  <div class="demo">
    <h1 class="title">学生姓名：{{ name }}</h1>
    <h1>学生性别：{{ sex }}</h1>
    <h1>学生年龄：{{ age }}</h1>
    <div>test</div>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    return {
      name: "周星星",
      sex: "男",
      age: 17,
    };
  },
};
</script>
<style lang="less" scoped>
.demo {
  font-size: 30px;
  color:pink
}
</style>