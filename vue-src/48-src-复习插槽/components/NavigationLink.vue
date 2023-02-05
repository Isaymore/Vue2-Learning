<template>
  <div>
    <a v-bind:href="url" class="nav-link">
      <!-- 默认插槽 -->
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: "NavigationLink",
  data() {
    return {
      url:'https://www.baidu.com'
    }
  }
};
</script>

<style>
</style>