<template>
  <div id="root">
    <!-- 使用默认插槽 -->
    <navigation-link>
      Your Profile
      <span>我是html结构</span>
      <el-button type="primary">我是button组件</el-button>
    </navigation-link>

    <!-- 使用具名插槽的新语法-在template元素上使用 v-slot 指令的参数的形式 -->
    <h4>使用具名插槽的新语法</h4>
    <base-layout>
      <!-- 子组件有一个具名插槽header，才可以传入插槽内容，不然被抛弃 -->
      <template v-slot:header>
        <h1>Here might be a page title</h1>
      </template>
      <p>A paragraph for the main content.</p>
      <p>And another one.</p>
      <template v-slot:footer>
        <p>Here's some contact info</p>
      </template>
    </base-layout>

    <!-- 使用具名插槽的旧语法-在template元素上使用slot attribute -->
    <h4>使用具名插槽的旧语法-在template元素上使用slot attribute</h4>
    <base-layout>
      <template slot="header">
        <h1>Here might be a page title</h1>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template slot="footer">
        <p>Here's some contact info</p>
      </template>
    </base-layout>

    <!-- 使用具名插槽的旧语法-在普通元素上使用slot attribute -->
    <h4>使用具名插槽的旧语法-在普通元素上使用slot attribute</h4>
    <base-layout>
      <h1 slot="header">Here might be a page title</h1>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <p slot="footer">Here's some contact info</p>
    </base-layout>

    <!-- 使用作用域插槽的新语法-在template元素上使用带值的 v-slot 指令 -->
    <h4>使用作用域插槽的新语法-在template元素上使用带值的 v-slot 指令</h4>
    <current-user>
      <template v-slot:default="slotProps">
        <h1>哈哈哈</h1>
        {{ slotProps }} <br />
        {{ slotProps.user }} <br />
        {{ slotProps.user.firsrName }} <br />
        {{ slotProps.car.brand }}
      </template>
    </current-user>

    <!-- 使用作用域插槽的新语法-在template元素上使用带值的 v-slot 指令-解构赋值 -->
    <h4>使用作用域插槽的新语法-在template元素上使用带值的 v-slot 指令-解构赋值</h4>
    <current-user>
      <template v-slot:default="{ user, car }">
        {{ user }} <br />
        {{ user.firsrName }} <br />
        {{ car.brand }}
      </template>
    </current-user>
    <h4>没有使用作用域插槽，作用域插槽的内容也会被传入，因为子组件自定义的作用域插槽是没有name attribute</h4>
    <current-user>
      <span>我是作用域插槽的内容</span>
    </current-user>
  </div>
</template>

<script>
import { Button } from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import NavigationLink from "@/components/NavigationLink.vue";
import BaseLayout from "@/components/BaseLayout.vue";
import CurrentUser from "@/components/CurrentUser.vue";
export default {
  name: "App",
  components: {
    NavigationLink,
    [Button.name]: Button,
    BaseLayout,
    CurrentUser,
  },
};
</script>

<style>
</style>