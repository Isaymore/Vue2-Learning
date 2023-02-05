<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
    name:'Home',
    mounted() {
      // console.log('Home组件挂载完成',this)
      window.homeRoute = this.$route
      window.homeRouter = this.$router
    },
    beforeDestroy() {
      console.log('Home组件即将销毁')
    },
}
</script>

<style>

</style>