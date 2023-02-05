<template>
  <div>
    <h1>人员列表</h1>
    <h3 style="color:pink">Count组件求和为：{{sum}}</h3>
    <h3>列表中第一个人的名字是：{{firstPersonName}}</h3>
    <input
      type="text"
      placeholder="请输入名字"
      style="margin-right: 10px"
      v-model="userName"
    />
    <button @click="addUser">添加</button>
    <button @click="addWang">添加老王</button>
    <button @click="addPersonServe">添加一个人，名字随机</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{ p.name }}</li>
    </ul>
    
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
      return this.$store.state.personAbout.personList;
    },
    sum(){
        return this.$store.state.countAbout.sum
    },
    firstPersonName(){
      return this.$store.getters['personAbout/firstPersonName']
    }
  },
  methods: {
    addUser(){
        const personObj = {
            id: nanoid(),
            name:this.userName
        }
        this.$store.commit('personAbout/ADD_PERSON',personObj)
        this.userName = ''
    },
    addWang(){
      const personObj = {
        id:nanoid(),
        name:this.userName
      }
      this.$store.dispatch('personAbout/addPersonWang',personObj)
      this.userName = ''
    },
    addPersonServe(){
      this.$store.dispatch('personAbout/addPersonServe')
    }
  },
  // mounted() {
  //     console.log(this.personList,typeof this.personList)
  // },
};
</script scoped>
  button{
    margin:5px
  }
<style>
</style>