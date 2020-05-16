<template>
  <div class="navigation-wapper">
    <div class="nav-bar-wapper">
      <el-menu
        :default-active="activeIndex"
        :class="isIE?'ie-navigation-nav':'not-ie-navigation-nav'"
        background-color="#F6F6F6"
        text-color="#636363"
        active-text-color="#53A7FD"
        :router="true"
      >
        <el-menu-item v-for="item in menuConfig" :key="item.path" :index="item.path">{{ item.title }}</el-menu-item>
      </el-menu>
    </div>
    <div class="page-wapper">
      <div class="page-wapper-header">
        <Header :sub-menu="subMenu" />
      </div>
      <div class="page-wapper-main"><router-view /></div>
    </div>
  </div>
</template>

<script>
import MenuConfig from '@/assets/json/menuConfig.json'
import Header from './Header'
export default {
  name: 'Navigation',
  components: {
    Header
  },
  data() {
    return {
      isIE: false, // 判断浏览器是否IE
      activeIndex: this.$route.path, // 当前选中的导航
      menuConfig: MenuConfig, // 配置菜单
      subMenu: [] // 顶部导航
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 给导航条的头部赋值
      vm.subMenu = MenuConfig.filter((el) => {
        return el.path === vm.$route.path
      })[0].children
    })
  },

  beforeRouteUpdate(to, from, next) {
    // 给导航条的头部赋值
    this.subMenu = MenuConfig.filter((el) => {
      return el.path === to.path
    })[0].children
    next()
  },
  created() {
    this.getISIe()
  },
  methods: {
    getISIe() {
      // 判断是否IE
      this.isIE = navigator.userAgent.indexOf('Trident') > -1
    }
  }

}
</script>

<style scoped>
.navigation-wapper {
	display: flex;
	height: 100%;
	max-width: 1105px;
	margin: 0 auto;
  box-shadow: -1px 1px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
}
.nav-bar-wapper {
	width: 100px;
	background: #f6f6f6;
	padding-top: 20px;
}
>>> .el-menu-item {
	position: relative;
	transform: rotate(90deg);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 100px;
	line-height: 100px;
	font-size: 20px;
  padding: 50px 20px 10px 20px !important;
  user-select: none;
}
>>>.ie-navigation-nav .el-menu-item.is-active {
	border-bottom: 3px solid;
}
>>>.el-menu-item:hover,.el-menu-item:focus {
    background: rgba(189, 182, 182, 0.1) !important;
}
>>>.not-ie-navigation-nav .el-menu-item.is-active::after {
	content: "";
	width: 80px;
	height: 1px;
	border-bottom: 3px solid;
	position: absolute;
	bottom: 0;
}
.page-wapper {
	flex: 1;
	display: flex;
    flex-direction: column;
}
.page-wapper-header {
    height: 150px;
}
.page-wapper-main {
    flex: 1;
}
</style>
