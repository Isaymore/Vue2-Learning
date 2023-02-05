<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot :foods="foods">没有传递html结构，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      foods: ["烧鸡翼", "碳烤生蚝", "炒田螺", "烤鸭肠"],
    };
  },
};
</script>

<style scoped>
.category {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}

h3 {
  background-color: pink;
  text-align: center;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
</style>