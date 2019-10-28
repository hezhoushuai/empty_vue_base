import Vue from 'vue'
import VueX from 'vuex'
import state from '@/store/state'
import getters from '@/store/getters'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

Vue.use(VueX)

const syncCartToStorage = store => {
  store.subscribe((mutation, state) => {
    window.localStorage.setItem('yp-cart', JSON.stringify(state.cartGoodsInfo))
  })
}

export default new VueX.Store({
  strict: process.env.NODE_ENV === 'development',
  // Vuex 的 store 接受 plugins 选项，
  // 这个选项暴露出每次 mutation 的钩子。Vuex 插件就是一个函数，
  // 它接收 store 作为唯一参数：
  plugins: [syncCartToStorage],
  state,
  mutations,
  getters,
  actions
})
