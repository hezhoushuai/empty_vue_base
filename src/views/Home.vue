<template>
  <div class="yp-home">
    {{ searchData }}
  </div>
</template>

<script>

export default {
  data() {
    return {
      searchData: {}
    }
  },
  created() {
    this.$http.getHomeData()
      .then(resp => {
        this.searchData = resp
      })
  }
}
</script>

<style lang="scss" scoped>

</style>
