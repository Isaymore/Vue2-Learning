<template>
  <div id="app">
    <h4>不使用属性修饰符.sync</h4>
    <text-document :title="doc.title" @update:title="test('222', $event)" />
    <h4>使用属性修饰符.sync</h4>
    <button @click="show(666, $event)">点击</button>
  </div>
</template>

<script>
import TextDocument from "@/components/TextDocument";
export default {
  name: "App",
  components: {
    TextDocument,
  },
  data() {
    return {
      doc: {
        title: "属性修饰符.sync",
      },
    };
  },
  methods: {
    test(a, e) {
      console.log(a);
      console.log(e);
      this.doc.title = e;
    },
    show(e, b) {
      console.log(e);
      console.log(b);
    },
  },
};
</script>

<style>
</style>