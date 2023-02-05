<template>
  <div id="app">
    <!-- 组件上使用v-model的实现原理 -->
    <custom-input
      :username="loginForm.username"
      @update:username="(newValue) => (loginForm.username = newValue)"
      :password="loginForm.password"
      @update:password="(newValue) => (loginForm.password = newValue)"
      v-model="loginForm.confirmPassword"
    />
    <!-- 组件上使用v-model -->
    <!-- <custom-input v-model="confirmPassword" /> -->
    <br />
    <base-checkbox />
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput";
import BaseCheckbox from "@/components/BaseCheckbox";
export default {
  name: "App",
  components: {
    CustomInput,
    BaseCheckbox,
  },
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
};
</script>

<style>
</style>