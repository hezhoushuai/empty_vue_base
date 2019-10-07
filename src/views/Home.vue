<template>
  <div class="home">
    <el-button type="danger">test element</el-button>
    <el-slider v-model="value"></el-slider>
    <div class="box">
      <PieChart />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import PieChart from '@/components/PieChart'
export default {
  name: 'Home',
  components: {
    PieChart
  },
  data() {
    return {
      value: 20
    }
  },
  mounted() {
  },
  methods: {

  }
}
</script>
