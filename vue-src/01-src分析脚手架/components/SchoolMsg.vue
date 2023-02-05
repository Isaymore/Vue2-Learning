<template>
  <div class="demo">
    <h1>学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
  </div>
</template>

<script>
export default {
  name: "SchoolMsg",
  data() {
    return {
      name: "广州大学",
      address: "广州",
    };
  },
};
</script>

<style>
.demo {
  color: skyblue;
}
</style>