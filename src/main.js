import Vue from 'vue'
// 引入mint-ui
import App from './App.vue'
import router from './router/index'
import $http from './requests/index'
import store from './store/index'

// 全局的混合
Vue.mixin({
  filters: {
    toFixed2(num) {
      if (num !== undefined) {
        num -= 0
        return num.toFixed(2)
      }
    }
  }
})
router.beforeEach((to, from, next) => {
  next()
})

Vue.prototype.$http = $http
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
