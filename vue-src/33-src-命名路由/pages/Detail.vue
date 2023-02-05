<template>
  <div>
    <h3>消息编号：{{$route.query.id}}</h3>
    <h3>消息标题：{{$route.query.title}}</h3>
  </div>
</template>
<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this)
  },
};
</script>

<style>
</style>