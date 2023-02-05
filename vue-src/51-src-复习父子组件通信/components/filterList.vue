<template>
  <div>
    <h5>我是filter组件</h5>
    <button @click="updateList">传值列表1</button>
    <button @click="updateList2">传值列表2</button>
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "filterList",
  created() {
    console.log("filterList组件的created钩子函数被调用了");
  },
  mounted() {
    console.log("filterList组件的mounted钩子函数被调用了");
  },
  methods: {
    updateList() {
    console.log("filterList组件的updateList被调用了");
      this.$emit("update-list", ["a", "b", "c"]);
    },
    updateList2(){
    console.log("filterList组件的updateList2被调用了");
      this.$emit('update:list2',['aaa','bbb','ccc'])
    }
  },
};
</script>

<style>
</style>