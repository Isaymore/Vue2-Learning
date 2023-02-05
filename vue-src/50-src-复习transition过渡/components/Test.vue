<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <transition name="hello" appear>
      <h1 v-show="isShow">我是Test组件中的hello</h1>
    </transition>
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
/* 先定义动画move，动画是由关键帧形成 */
@keyframes move {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
/* 调用动画move 注意这里的hello指的是transition组件标签的属性name的属性值*/
.hello-enter-active {
  animation: move 1s linear;
}
.hello-leave-active {
  animation: move 1s linear reverse;
}
</style>