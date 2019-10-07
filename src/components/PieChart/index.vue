<template>
  <div ref="pieChart" :style="{width: '400px', height: '400px'}"></div>
</template>

<script>
const echarts = require('echarts')
export default {
  components: {},
  data() {
    return {

    }
  },
  computed: {

  },
  watch: {},
  mounted() {
    this.initDraw()
  },
  created() {

  },
  methods: {
    initDraw() {
      const myCharts = echarts.init(this.$refs.pieChart)
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          x: 'left',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false,
                position: 'center'
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              { value: 335, name: '直接访问' },
              { value: 310, name: '邮件营销' },
              { value: 234, name: '联盟广告' },
              { value: 135, name: '视频广告' },
              { value: 1548, name: '搜索引擎' }
            ]
          }
        ]
      }

      myCharts.setOption(option)
    }
  }
}
</script>
<style lang='scss' scoped>

</style>
