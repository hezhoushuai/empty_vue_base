<template>
  <div class="home">
    <el-button type="danger">test element</el-button>
    <el-slider v-model="value"></el-slider>
    <div id="main" ref="main" :style="{width: '300px', height: '300px'}"></div>
  </div>
</template>

<script>
// @ is an alias to /src
const echarts = require('echarts')

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      value: 20
    }
  },
  mounted() {
    this.drawInit()
  },
  methods: {
    drawInit() {
      const main = this.$refs.main
      const myChart = echarts.init(main)

      myChart.setOption({
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
      console.log(myChart)
    }
  }
}
</script>
