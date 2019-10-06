import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

Vue.config.productionTip = false

// 权限管理
router.beforeEach((to, from, next) => {
  next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
