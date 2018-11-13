import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Drag from '@/pages/drag.vue'
import Slot from '@/pages/slot.vue'
import CptDemo from '@/pages/CptDemo.vue'
import ObjDefine from '@/pages/ObjDefine'
import VueX from '@/pages/vuex.vue'
import D2 from '@/pages/d2.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/drag',
      name: 'drag',
      component: Drag
    },
    {
      path: '/slot',
      name: 'slot',
      component: Slot
    },
    {
      path: '/cptDemo',
      name: 'cptDemo',
      component: CptDemo
    },
    {
      path: '/vueX',
      name: 'vueX',
      component: VueX
    },
    {
      path: '/objDefine',
      name: 'ObjDefine',
      component: ObjDefine
    },
    {
      path: '/d2',
      name: 'D2',
      component:D2
    }
  ]
})
