<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  mounted() {
    // console.log('About组件挂载完成',this)
    window.aboutRoute = this.$route;
    window.aboutRouter = this.$router;
  },
  beforeDestroy() {
    console.log("About组件即将销毁");
  },
  beforeRouteEnter(to, from, next) {
    if (to.meta.isAuth) {
      if (localStorage.getItem("idol") === "xingye666") {
        next();
        // document.title = to.meta.title || '学生管理系统'
      } else {
        return alert("无权限访问！");
      }
    } else {
      next();
      // document.title = to.meta.title || '学生管理系统'
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("About---beforeRouteLeave", to, from, next);
    next()
  },
};
</script>

<style>
</style>