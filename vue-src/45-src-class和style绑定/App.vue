<template>
  <div id="app">
    <my-component class="baz boo" :class="{active: isActive}"/>
  </div>
</template>

<script>
import MyComponent from "@/component/MyComponent";
export default {
  components: { 
    MyComponent
    },
  data() {
    return {
      isActive: true
    }
  }
};
</script>

<style lang="less">
.baz{
  background-color: skyblue;
}
.boo{
  text-align: center;
}
.active{
  border: 5px solid yellow;
}
</style>