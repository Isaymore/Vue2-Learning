<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和放大10倍为：{{ bigSum }}</h1>
    <h1>我在{{ city }},自学{{ subject }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">当前和为奇数再加</button>
    <button @click="incrementWait(n)">等一等再加</button>
  </div>
</template>

<script> 
import {mapState,mapGetters,mapMutations, mapActions} from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  methods: {
    // increment() {
    //   this.$store.commit("ADD", this.n);
    // },
    ...mapMutations({increment:'ADD',decrement:'SUB'}),
    // ...mapMutations(['ADD','SUB']),
    // decrement() {
    //   this.$store.commit("SUB", this.n);
    // },
    // incrementOdd() {
    //   this.$store.dispatch("addOdd", this.n);
    // },
    // incrementWait() {
    //   // setTimeout(this.n++,500)
    //   this.$store.dispatch("addWait", this.n);
    // },
    ...mapActions({incrementOdd:'addOdd','incrementWait':'addWait'})
  },
  computed: {
    // ...mapState({sum:'sum',city:'city',subject:'subject'})
    ...mapState(['sum','city','subject']),
    // ...mapGetters({bigSum:'bigSum'})
    ...mapGetters(['bigSum'])
  },
  mounted() {
    // console.log("Count", this);
    // const x = mapState({sum:'sum',city:'city',subject:'subject'})
    // console.log(x,typeof x)
  },
};
</script>

<style lang="css" scoped>
button {
  margin-left: 10px;
}
</style>
