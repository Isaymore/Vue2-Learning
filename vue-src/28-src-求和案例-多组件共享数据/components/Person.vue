<template>
  <div>
    <h1>人员列表</h1>
    <input
      type="text"
      placeholder="请输入名字"
      style="margin-right: 10px"
      v-model="userName"
    />
    <button @click="addUser">添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
    <h3 style="color:pink">Count组件求和为：{{sum}}</h3>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import {mapMutations} from 'vuex'
export default {
  name: "Person",
  data() {
    return {
      userName: "",
    };
  },
  computed: {
    personList() {
      return this.$store.state.personList;
    },
    sum(){
        return this.$store.state.sum
    }
  },
  methods: {
    addUser(){
        const personObj = {
            id: nanoid(),
            name:this.userName
        }
        this.$store.commit('ADD_PERSON',personObj)
        this.userName = ''
    }
  },
  // mounted() {
  //     console.log(this.personList,typeof this.personList)
  // },
};
</script>

<style>
</style>