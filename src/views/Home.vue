<template>
  <div class="home">
    <el-button type="danger">test element</el-button>
    <el-slider v-model="value"></el-slider>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data() {
    return {
      value: 20
    }
  }
}
</script>
