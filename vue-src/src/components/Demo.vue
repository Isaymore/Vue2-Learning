<template>
  <div class="demo">
    <h2>我是Demo组件</h2>
    <!-- <h3>{{ $attrs.msg }}</h3>
    <h3>{{ $attrs.idol }}</h3> -->
    <slot></slot>
    <div class="wrapper">
      <slot name="title"></slot>
      <slot name="value"></slot>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Demo",
  props: {
    msg: {
      type: String,
      default: "",
    },
    // idol: {
    //   type: String,
    //   default: "",
    // },
  },
  mounted() {
    console.log(this);
  },
};
</script>

<style lang="less" scoped>
.demo {
  background-color: pink;
  padding: 10px;
}
.wrapper{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>