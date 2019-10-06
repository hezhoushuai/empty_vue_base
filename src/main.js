import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(ElementUI)
// 权限管理
router.beforeEach((to, from, next) => {
  next()
})

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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
