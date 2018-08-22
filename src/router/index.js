import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import Drag from '@/pages/drag.vue'

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
  ]
})
