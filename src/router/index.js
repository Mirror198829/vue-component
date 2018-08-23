import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Drag from '@/pages/drag.vue'
import Slot from '@/pages/slot.vue'
import CptDemo from '@/pages/CptDemo.vue'

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
  ]
})
