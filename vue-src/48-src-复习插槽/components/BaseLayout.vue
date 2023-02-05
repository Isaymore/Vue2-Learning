<template>
  <div class="container">
    <header>
      <!-- 我们希望把页头放这里 -->
      <!-- 具名插槽出口 -->
      <!-- 定义一个具名插槽header -->
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 我们希望把主要内容放这里 -->
      <!-- 默认插槽出口 -->
      <!-- 定义一个默认插槽 -->
      <slot></slot>
    </main>
    <footer>
      <!-- 我们希望把页脚放这里 -->
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: "BaseLayout",
};
</script>

<style>
</style>