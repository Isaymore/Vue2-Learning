<template>
  <div class="container">
    <category title="美食">
      <img src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="">
    </category>
    <category title="偶像">
      <ul>
      <li v-for="(item, index) in idols" :key="index">{{ item }}</li>
    </ul>
    </category>
    <category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods:['烧鸡翼','碳烤生蚝','炒田螺','烤鸭肠'],
      idols:['星爷','周董','刘德华','胡歌'],
      movies:['逃学威龙','赌圣','唐伯虎点秋香','功夫']
    }
  },
};
</script>

<style>
  .container{
    display: flex;
    justify-content: space-around;
  }
</style>
