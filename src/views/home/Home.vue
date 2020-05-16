<template>
  <div class="home-wapper">
    <div class="home-left-wapper">
      <AssetAllocation />
    </div>
    <div class="home-right-wapper">
      <Chart />
      <div class="note-font-wapper">
        <div>平衡2号</div>
        <div>
          <span>历史年化收益率：</span>
          <span style="font-weight: bold;">9.24%</span>
        </div>
        <div>
          <span>波动率：</span>
          <span style="font-weight: bold;">5.3%</span>
        </div>
      </div>
      <Bar />
    </div>
  </div>
</template>

<script>
import AssetAllocation from '@/views/home/AssetAllocation.vue'
import Chart from '@/views/home/Chart.vue'
import Bar from '@/views/home/Bar.vue'
export default {
  name: 'Home',
  components: {
    AssetAllocation,
    Chart,
    Bar
  }
}
</script>

<style scoped>
 .home-wapper {
    display: flex;
    height: 100%;
    padding: 20px 20px 20px 20px;
    box-sizing: border-box;
}
.home-left-wapper {
    flex-basis: 39%;
}
.home-right-wapper{
    flex-basis: 61%;
    padding: 120px 0px 0px 50px;
    box-sizing: border-box;
}
.note-font-wapper{
    padding:20px 20px 0 60px;
    font-size: 14px;
    color: rgb(129, 125, 125);
    display: flex;
    justify-content: space-around;
}
</style>
