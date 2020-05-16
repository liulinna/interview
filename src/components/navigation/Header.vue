<template>
  <div class="header-wapper">
    <div class="heder-left-wapper">
      <div v-for="item in subMenu" :key="item.key" class="header-left-item">{{ item.title }}</div>
    </div>
    <div class="heder-right">
      <div>
        <img src="../../assets/images/logo.png">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    subMenu: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
.header-wapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px 0 15px;
    height: 100%;
}
.heder-left-wapper {
    display: flex;
}
.header-left-item {
    padding: 0 16px;
    border-right: 1px solid #4f4f4f;
    color: #4f4f4f;
    font-size: 16px;
	cursor: pointer;
}
.header-left-item:last-child {
    border-right: 0;
}
</style>
