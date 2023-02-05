<template>
  <div class="container">
    <category title="美食">
      <img
        slot="center"
        src="https://s3.ax1x.com/2021/01/16/srJlq0.jpg"
        alt=""
      />
      <a slot="footer" href="https://www.baidu.com">更多美食</a>
    </category>
    <category title="偶像">
      <ul slot="center">
        <li v-for="(item, index) in idols" :key="index">{{ item }}</li>
      </ul>
      <div slot="footer" class="foot">
        <a href="https://www.baidu.com">优质偶像</a>
        <a href="https://www.baidu.com">新生偶像</a>
      </div>
    </category>
    <category title="电影">
      <video
        slot="center"
        controls
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      ></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="https://www.baidu.com">经典</a>
          <a href="https://www.baidu.com">热门</a>
          <a href="https://www.baidu.com">推荐</a>
        </div>
        <h4>欢迎观影</h4>
      </template>
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
      foods: ["烧鸡翼", "碳烤生蚝", "炒田螺", "烤鸭肠"],
      idols: ["星爷", "周董", "刘德华", "胡歌"],
      movies: ["逃学威龙", "赌圣", "唐伯虎点秋香", "功夫"],
    };
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
a,
h4 {
  text-align: center;
}
</style>
