<template>
  <div>
    <h1 ref="title">{{msg}}</h1>
    <button ref="btn" @click="showDom">点击输出上方的真实DOM</button>
    <School ref="sch"/>
  </div>
</template>

<script>
import School from './components/School.vue'
export default {
  name:'App',
  components:{
    School
  },
  data() {
    return {
      msg:'周星星同学'
    }
  },
  methods: {
    showDom(){
      // console.log(document.getElementById('title'))
      console.log(this.$refs.title)
      console.log(this.$refs.btn)
      console.log(this.$refs.sch)
    }
  },
}
</script>

<style>

</style>