<template>
  <div>
    <h3>消息编号：{{ id }}</h3>
    <h3>消息标题：{{ title }}</h3>
    <h3>{{a}}</h3>
    <h3>{{b}}</h3>
  </div>
</template>
<script>
export default {
  name: "Detail",
  props: ["id", "title",'a','b'],
//   computed: {
//     id() {
//       return this.$route.params.id;
//     },
//     title() {
//       return this.$route.params.title;
//     },
//   },
  mounted() {
    console.log(this);
  },
};
</script>

<style>
</style>