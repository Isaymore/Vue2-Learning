<template>
  <div class="app">
    <h1>我是Vue2写的效果</h1>
    <demo msg="你好" idol="星爷">
      <template #title>
        <div>
          江湖人称
        </div>
      </template>
      <template v-slot:value>
        <div>
          赌圣星爷
        </div>
      </template>
      <p>星仔，我是默认插槽需要分发的内容</p>
    </demo>
  </div>
</template>

<script>
import Demo from "./components/Demo.vue";
export default {
  name: "App",
  components: { Demo },
};
</script>

<style lang="less" scoped>
.app{
  background-color: skyblue;
  padding: 10px;
}
</style>