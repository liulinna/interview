<template>
  <div style="padding-left:60px;padding-right: 20px;">
    <el-slider
      v-model="value"
      :step="10"
      show-stops
      :marks="marks"
      :show-tooltip="false"
      :min="10"
      @change="changeBar"
    />
  </div>
</template>

<script>
export default {
  name: 'Bar',
  data() {
    return {
      value: 50,
      marks: {
        0: {
          style: {
            color: '#9f9f9f'
          }
        },
        10: {
          style: {
            color: '#9f9f9f'
          },
          label: this.$createElement('div', { class: 'bar-scale' }, [this.$createElement('div', '1.0'), this.$createElement('div', '保守型')])
        },
        20: {
          style: {
            color: '#9f9f9f'
          },
          label: this.$createElement('div', { class: 'bar-scale' }, '2.0')
        },
        30: {
          style: {
            color: '#9f9f9f'
          },
          label: this.$createElement('div', { class: 'bar-scale' }, '3.0')
        },
        40: {
          style: {
            color: '#9f9f9f'
          },
          label: this.$createElement('div', { class: 'bar-scale' }, '4.0')
        },
        50: {
          style: {
            color: '#9f9f9f'
          },
          label: this.$createElement('div', { class: 'bar-scale red' }, '5.0')
        },
        60: {
          style: {
            color: '#9f9f9f'
          },
          label: this.$createElement('div', { class: 'bar-scale' }, '6.0')
        },
        70: {
          style: {
            color: '#9f9f9f'
          },
          label: this.$createElement('div', { class: 'bar-scale' }, '7.0')
        },
        80: {
          style: {
            color: '#9f9f9f'
          },
          label: this.$createElement('div', { class: 'bar-scale' }, '8.0')
        },
        90: {
          style: {
            color: '#9f9f9f'
          },
          label: this.$createElement('div', { class: 'bar-scale' }, '9.0')
        },
        100: {
          style: {
            color: '#9f9f9f'
          },
          label: this.$createElement('div', { class: 'bar-scale' }, [this.$createElement('div', '10.0'), this.$createElement('div', '激进型')])
        }
      }
    }
  },
  methods: {
    changeBar(val) {
      // 点击bar触发chart数据改变
      this.$root.$emit('BAR_CHANGE', val)
    }
  }
}
</script>

<style scoped>
.bar-scale {
    padding-top: 16px;
    position: relative;
    font-size: 12px;
    font-weight: bold;
    user-select: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50px;
}
.bar-scale.red{
  color: red;
}
.bar-scale::before {
    content: "";
    width: 1px;
    height: 5px;
    border-right: 1px solid;
    position: absolute;
    top: 8px;
}
>>>.el-slider__stop {
    background-color: #dcdcdc;
}
>>>.el-slider__stop:first-child {
   width: 0;
}
>>>.el-slider__stop:last-child {
   width: 0;
}
>>>.el-slider__runway {
    height: 12px;
    background-color: #dcdcdc;
}
>>>.el-slider__bar {
    background-color: #dcdcdc;
  }
>>>.el-slider__button-wrapper {
    top: -11px;
}
>>>.el-slider__button {
    width: 10px;
    height: 25px;
    border-radius:0;
    border: 2px solid #dcdcdc;
    background-color: #ececec;
}

</style>
