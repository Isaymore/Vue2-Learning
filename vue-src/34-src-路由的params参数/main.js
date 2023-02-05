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
import VueRouter from 'vue-router'
import router from './router'
// 关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(VueRouter)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
