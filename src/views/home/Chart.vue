<template>
  <div ref="riskEcharts" class="riskEcharts" />
</template>

<script>
import echarts from 'echarts'
import chartData from '@/assets/json/chartData.json' // 饼图数据
export default {
  name: 'Chart',
  data() {
    return {
      riskEcharts: {}, // echarts实例
      echartsOption: {}, // echarts配置项
      data: []
    }
  },
  created() {
    // 监听滑块改变
    this.$root.$on('BAR_CHANGE', this.changeChartDate)
  },
  mounted() {
    // 初始化饼图
    this.initEcharts()
  },
  destroyed() {
    // 注销滑块改变事件
    this.$off('BAR_CHANGE')
  },
  methods: {
    // 初始化饼图
    initEcharts() {
      this.data = chartData.data.map((item) => {
        return { ...item }
      })
      // 设置option选项
      this.echartsOption = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        color: ['#d95232', '#2091cd', '#1f9267', '#fede79', '#f49a0e', '#8e2a66'],
        graphic: [{ // 图形中间文字
          type: 'text',
          left: 'center',
          top: '43%',
          style: {
            text: '风险偏好',
            textAlign: 'center',
            fill: '#665f55',
            fontSize: 15
          }
        }, { // 图形中间文字
          type: 'text',
          left: 'center',
          top: '50%',
          style: {
            text: '5.0',
            textAlign: 'center',
            fill: '#29292b',
            fontSize: 18,
            fontWeight: 'bold'

          }},
        { // 图形中间文字
          type: 'text',
          left: 'center',
          top: '57%',
          style: {
            text: '稳健性',
            textAlign: 'center',
            fill: '#a6a6a6',
            fontSize: 14
          }
        }],

        series: [
          {
            name: '风险投资',
            type: 'pie',
            radius: ['32%', '77%'],
            center: ['50%', '50%'],
            label: {
              formatter: (data) => {
                return `${data.name}: ${data.percent.toFixed(2)}%`
              },
              fontSize: '14',
              color: '#a6a6a6'
            },
            labelLine: {
              lineStyle: {
                color: '#a6a6a6'
              },
              length: 20,
              length2: 30,
              smooth: true
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '16',
                fontWeight: 'bold'
              }
            },
            data: this.data
          }
        ]
      }
      this.riskEcharts = echarts.init(this.$refs.riskEcharts)
      this.riskEcharts.setOption(this.echartsOption, true)
    },
    // 获取饼图的配置信息
    getOption(data) {
      return
    },
    // 改变饼图数据
    changeChartDate(val) {
      chartData.data.forEach((item, index) => {
        if (item.name === '黄金') {
          this.data[index].value = item.value + (val / 10 - 5) * 2
        }
      })
      // 滑动为1-4的时候 风险偏好为保守型；
      if (val >= 10 && val <= 40) {
        this.echartsOption.graphic[1].style.text = '1.0'
        this.echartsOption.graphic[2].style.text = '保守型'
        // 滑动为5-9的时候 风险偏好为进取型；
      } else if (val >= 50 && val <= 90) {
        this.echartsOption.graphic[1].style.text = '5.0'
        this.echartsOption.graphic[2].style.text = '进取型'
        // 滑动为10的时候 风险偏好为激进型；
      } else if (val === 100) {
        this.echartsOption.graphic[1].style.text = '10.0'
        this.echartsOption.graphic[2].style.text = '激进型'
      }
      this.echartsOption.series.data = this.data

      this.riskEcharts.setOption(this.echartsOption)
    }
  }

}
</script>

<style scoped>
.riskEcharts{
    height: 50%;
}
</style>
