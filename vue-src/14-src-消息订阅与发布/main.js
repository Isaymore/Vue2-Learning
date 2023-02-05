// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

// window.x = {a:1, b:2}
// console.log(Vue.prototype)
// const Demo = Vue.extend({})
// const obj = new Demo()
// Vue.prototype.x = obj
// 创建vm
const vm = new Vue({
  render: h => h(App),
}).$mount('#app')
