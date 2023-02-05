<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition-group name="hello" appear>
      <h1 v-show="!isShow" key="1">我是Test2组件中的hello</h1>
      <h1 v-show="isShow" key="2">周星星同学</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: green;
}
.hello-enter,
.hello-leave-to{
  transform: translateX(-100%);
}
.hello-enter.to,
.hello-leave{
  transform:translateX(0)
}

.hello-enter-active {
  transition: .5s linear;
}
.hello-leave-active {
  transition: .5s linear;
}

</style>