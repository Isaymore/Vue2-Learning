<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <slot name="center">没有传递html结构，我会出现1</slot>
    <slot name="footer">没有传递html结构，我会出现2</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
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