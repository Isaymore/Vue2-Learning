<template>
  <div>
    <h1>{{ msg }}</h1>
    <h1>学生姓名：{{ name }}</h1>
    <h1>学生性别：{{ sex }}</h1>
    <h1>学校年龄：{{ myAge+1 }}</h1>
    <button @click="updateAge">修改props中的age</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    console.log(this)
    return {
      msg: "hello",
      myAge:this.age
    };
  },
  //  props:['name','sex','age'],
  // props:{
  //   name:String,
  //   sex:String,
  //   age:Number
  // }
    props:{
      name:{
        type:String,
        required:true
      },
      sex:{
        type:String,
        required:true
      },
      age:{
        type:Number,
        default:99
      }
    },
    methods:{
      updateAge(){
        this.myAge++
      }
    }
};
</script>
