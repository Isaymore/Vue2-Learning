<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos" :checkAllToDo="checkAllToDo" :clearAllToDo="clearAllToDo"/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
import MyList from "./components/MyList.vue";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
    MyList,
  },
  data() {
    return {
      todos:[
        {id:'001',title:'学习',done:true},
        {id:'002',title:'吃饭',done:true},
        {id:'003',title:'睡觉',done:false},
      ]
    }
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj){
      // console.log('我是App组件，我收到了数据',x)
      this.todos.unshift(todoObj)
    },
    // 勾选或取消勾选一个todo
    checkTodo(id){
      // debugger
      this.todos.forEach(todo => {
        if(todo.id === id) todo.done = !todo.done
      })
    },
    // 删除todo
    deleteTodo(id){
      if(confirm('确认删除么？')){
        this.todos= this.todos.filter(todo => todo.id !== id)
      }
    },
    // 全选or取消全选
    checkAllToDo(done){
      this.todos.forEach(todo => {
        todo.done = done
      })
    },
    // 清除已完成任务
    clearAllToDo(){
      this.todos = this.todos.filter(todo => !todo.done)
    }
  },
};
</script>
<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
