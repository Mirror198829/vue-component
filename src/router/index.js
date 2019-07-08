import Vue from 'vue'
import Router from 'vue-router'
import ComponentRouter from './componentRouter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:() => import('@/pages/Home.vue')
    },
    {
      path: '/drag',
      name: 'drag',
      component:() => import('@/pages/drag.vue')
    },
    {
      path: '/slot',
      name: 'slot',
      component:() => import('@/pages/slot.vue')
    },
    {
      path: '/cptDemo',
      name: 'cptDemo',
      component: () => import('@/pages/cptDemo.vue')
    },
    {
      path: '/cptTwoWayCommunication',
      name: 'cptTwoWay',
      component: () => import('@/pages/cptTwoWayCommunication.vue')
    },
    {
      path: '/vueX',
      name: 'vueX',
      component: () => import('@/pages/vueX.vue')
    },
    {
      path: '/objDefine',
      name: 'ObjDefine',
      component: () => import('@/pages/ObjDefine.vue')
    },
    {
      path: '/d2',
      name: 'D2',
      component:() => import('@/pages/d2.vue')
    },
    ...ComponentRouter
  ]
})
