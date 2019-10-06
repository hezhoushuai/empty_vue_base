export default {
  // example
  isAllChecked(state) {
    return state.cartGoodsInfo.every(item => item.isChecked === true)
  }
}
