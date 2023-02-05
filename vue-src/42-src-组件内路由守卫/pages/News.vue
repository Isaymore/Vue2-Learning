<template>
  <ul>
    <li :style="{ opacity }">学习Vue</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 0.5,
    };
  },
  // mounted() {
  //   console.log("mounted");
  //   this.timer = setInterval(() => {
  //     // console.log('@')
  //     this.opacity -= 0.01;
  //     if (this.opacity <= 0) this.opacity = 1;
  //   }, 16);
  // },
  // beforeDestroy() {
  //   console.log("News组件即将被销毁");
  //   clearInterval(this.timer)
  // },
  activated() {
    this.timer = setInterval(() => {
      // console.log('@')
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("News组件即将被销毁");
    clearInterval(this.timer)
  },
};
</script>

<style>
</style>