<template>
  <div>
    子组件---{{title}}
  </div>
</template>

<script>
export default {
name:'TextDocument',
props:{
  title:{
    type:String,
    required:true
  }
},
created() {
  this.$emit('update:title', '哈哈')
},
}
</script>

<style>

</style>