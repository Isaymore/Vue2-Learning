<template>
  <div>
    <!-- 原生input元素使用v-model -->
    <!-- <input type="text" v-model="searchText" /> -->
    <!-- v-model的实现原理 -->
    <!-- <input type="text" :value="searchText" @input="searchText = $event.target.value" /> -->
    <!-- 父组件使用v-model, 子组件内部的原生input元素 -->
    <!-- <input type="text" :value="value" @input="modelHandle" /> -->
    用户名:<input
      type="text"
      :value="username"
      @input="$emit('update:username', $event.target.value)"
    />
    <br /><br />
    密码:<input
      type="text"
      :value="password"
      @input="$emit('update:password', $event.target.value)"
    />
    确认密码：<input
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    username: String,
    password: String,
    value: String
  },
  data() {
    return {
      loginForm: this.value,
    };
  },
  methods: {
    // // 原生input元素的事件回调
    // handle(e) {
    //   this.searchText = e.target.value;
    // },
    // 事件回调：用于组件上使用v-model
    modelHandle(e) {
      this.$emit("update:username", e.target.value);
    },
  },
};
</script>

<style>
</style>