import Vue from 'vue'
import Router from 'vue-router'

import Navigation from '@/components/navigation/Navigation.vue'
import Home from '@/views/home/Home.vue'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const route = new Router({

  routes: [{
    path: '/',
    component: Navigation,
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'home',
      component: Home
    }, {
      path: 'solution',
      name: 'solution',
      component: () =>
        import('@/views/solution/Solution.vue')
    }, {
      path: 'coreEngine',
      name: 'coreEngine',
      component: () =>
        import('@/views/coreEngine/CoreEngine.vue')
    }, {
      path: 'news',
      name: 'news',
      component: () =>
        import('@/views/news/News.vue')
    }, {
      path: 'partner',
      name: 'partner',
      component: () =>
        import('@/views/partner/Partner.vue')
    }, {
      path: 'about',
      name: 'about',
      component: () =>
        import('@/views/about/About.vue')
    }]
  }]
})

export default route
