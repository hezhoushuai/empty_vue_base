import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import '@/utils/Date' // 时间格式化函数

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
