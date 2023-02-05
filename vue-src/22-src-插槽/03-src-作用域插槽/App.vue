<template>
  <div class="container">
    <Category title="美食">
      <template scope="foodsObj">
        <!-- <h4>{{foodsObj.foods}}</h4> -->
        <ul>
          <li v-for="(f, index) in foodsObj.foods" :key="index">{{ f }}</li>
        </ul>
      </template>
    </Category>
    <category title="美食">
      <template scope="foodsObj">
        <ol>
          <li v-for="(f, index) in foodsObj.foods" :key="index">{{ f }}</li>
        </ol> 
      </template>
    </category>
    <category title="美食">
      <template scope="foodsObj">
        <h4 v-for="(f, index) in foodsObj.foods" :key="index">{{ f }}</h4>
      </template>
    </category>
  </div>
</template>

<script>
import Category from "./components/Category.vue";
export default {
  name: "App",
  components: {
    Category,
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
a,
h4 {
  text-align: center;
}
</style>
