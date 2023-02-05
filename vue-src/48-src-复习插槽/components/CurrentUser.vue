<template>
  <div>
    <span>
      <!-- 绑定在 <slot> 元素上的 attribute 被称为插槽 prop -->
        <!--  name="test" -->
      <slot :user="user" :car="car">{{ user.lastName }}</slot>
    </span>
    <br>
    <span>{{user.firsrName}}---haha</span>
  </div>
</template>

<script>
export default {
  name: "CurrentUser",
  data() {
    return {
      user: {
        lastName: "李",
        firsrName: "yebin",
      },
      car: {
        brand: "Benz",
        price: "$10w",
      },
    };
  },
};
</script>

<style>
</style>