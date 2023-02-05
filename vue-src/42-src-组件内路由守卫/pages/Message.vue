<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{
          m.title
        }}</router-link> -->
        <router-link
          :to="{
            name:'xijie',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >{{ m.title }}</router-link>
        <button @click="pushJump(m)">push跳转</button>
        <button @click="replaceJump(m)">replace跳转</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "消息1" },
        { id: "002", title: "消息2" },
        { id: "003", title: "消息3" },
      ],
    };
  },
  methods: {
    pushJump(m) {
      // console.log(this.$router)
      this.$router.push({
        name: "xijie",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceJump(m) {
      this.$router.replace({
        name: "xijie",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
  beforeDestroy() {
    console.log('Message组件即将被销毁')
  },
};
</script>

<style>
</style>