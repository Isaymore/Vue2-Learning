<template>
  <div class="demo">
    <h1>学生姓名：{{ name }}</h1>
    <h1>学校年龄：{{ age }}</h1>
  </div>
</template>

<script>
export default {
  name: "StudentMsg",
  data() {
    return {
      name: "周星星",
      age: 17,
    };
  },
};
</script>

<style>
.demo {
  color: skyblue;
}
</style>