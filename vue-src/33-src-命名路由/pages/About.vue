<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',
    mounted() {
      // console.log('Home组件挂载完成',this)
      window.aboutRoute = this.$route
      window.aboutRouter = this.$router
    },
    beforeDestroy() {
      console.log('Home组件即将销毁')
    },
}
</script>

<style>

</style>