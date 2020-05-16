<template>
  <div class="asset-allocation-wapper">
    <div class="asset-vip-wapper">VIP客户定制</div>
    <div class="asset-font-title">基于智能算法的资产配置</div>
    <div class="asset-font-content">我们将基于您的自身年龄、家庭状况、财务状况、风险偏好理财目标等信息依据现代投资组合理论、效用函数理论、行为金融学理论等基础，应用一系列智能算法为您量身定制打造资产配置方案，并对投资组合进行实时跟踪和自动再平衡。</div>
    <div />
    <el-form ref="form" :model="form" label-width="60px" style=" padding: 20px 0 0 30px; ">
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="投资年限">
            <el-select v-model="form.years" size="mini">
              <el-option v-for="item in yearsOpiton" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="投资金额">
            <el-select v-model="form.money" size="mini">
              <el-option v-for="item in moneyOpiton" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <el-form-item label="投资类型" size="mini">
            <el-select v-model="form.type">
              <el-option v-for="item in typeOpiton" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </el-form-item>
        </el-col>

      </el-row>

      <el-form-item label-width="0px" style="padding-top:55px;">
        <el-button type="primary" size="samll" class="submit-btn">一键生成</el-button>
      </el-form-item>
      <el-form-item label-width="0px">
        <el-button type="default" size="mini" class="submit-btn">高端测评</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AssetAllocation',
  data() {
    return {
      form: {
        years: '1',
        money: '30',
        type: 'radical'
      },
      yearsOpiton: [{ label: '一年以下', value: '1' }, { label: '一年到五年', value: '3-5' }, { label: '五年以上', value: '5' }],
      moneyOpiton: [{ label: '30万元以下', value: '30' }, { label: '30万元到50万元', value: '30-50' }, { label: '50万元年以上', value: '50' }],
      typeOpiton: [{ label: '激进型', value: 'radical' }, { label: '保守型', value: 'conservative' }]
    }
  }
}
</script>

<style scoped>
 .asset-vip-wapper {
    color: #38ade8;
    padding: 50px 20px 60px 15px;
}
.asset-font-title {
    padding: 0 0 30px 30px;
    font-size: 24px;
    color: #7d7d7d;
}
.asset-font-content {
    padding: 0 0 0 30px;
    font-size: 13px;
    color: #a6a6a6;
    line-height: 20px;
}
>>>.el-form-item {
    margin-bottom: 5px;
}
>>>.el-input {
    width: 110px;
}
>>>.el-form-item__label {
    font-size: 12px;
    color: #55a7fb;
}
>>>.submit-form-item .el-form-item__content {
    padding: 20px 0 10px 20px;
}
.submit-btn{
    width: 100%  !important;
    padding: 9px 0 !important;
}
>>>.el-button--primary {
    background-color: #55a7fb;
    border-color: #55a7fb;
}
>>>.el-button--default {
    border: 1px solid #55a7fb;
    color: #55a7fb;
}
</style>
