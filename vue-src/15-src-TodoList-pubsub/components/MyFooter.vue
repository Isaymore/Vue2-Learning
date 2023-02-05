<template>
  <div class="todo-footer" v-if="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAllDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos"],
  computed: {
    doneTotal() {
      return this.todos.reduce((pre, current) => pre + current.done, 0);
    },
    total() {
      return this.todos.length;
    },
    isAll: {
      get() {
        return this.doneTotal === this.total && this.total > 0;
      },
      set(value){
        // this.checkAllToDo(value)
        this.$emit('checkAllToDo',value)
      }
    },
  },
  methods: {
    // checkAll(e) {
    //   // console.log(e.target.checked)
    //   this.checkAllToDo(e.target.checked);
    // },
    clearAllDone(){
      // this.clearAllToDo()
      this.$emit('clearAllToDo')
    }
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>