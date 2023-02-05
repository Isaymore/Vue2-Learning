<template>
  <div>
    <h3>父子组件通信</h3>
    <!-- 如果是同一种组件多个页面那种切换就只会开始执行一次，最简单的做法就是在组件标签增加:key属性，key的值唯一即可 -->
    <!-- :key="Date.now()" -->
    <filter-list  :list2.sync="list2" v-show="true" @update-list="updateList">
      <template #content>
        <div>我是插槽内容</div>
      </template>
    </filter-list>
    <span>列表1：</span>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
        <span>列表2：</span>
    <ul>
      <li v-for="(item, index) in list2" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import filterList from "@/components/filterList.vue";
export default {
  name: "App",
  components: {
    filterList
  },
  data() {
    return {
      list: [1, 2, 3],
      list2: [666,888,999]
    };
  },
  created() {
    console.log("App组件的created钩子函数被调用了");
  },
  mounted() {
    console.log("App组件的mounted钩子函数被调用了");
  },
  methods: {
    updateList(val) {
      console.log("App组件的updateList被调用了");
      console.log("App组件的val", val, typeof val);
      this.list = val
    },
  },
};
</script>

<style>
</style>