/*
 * @Author: caojing
 * @Date: 2018-08-22 09:24:00
 * @LastEditors: caojing
 * @LastEditTime: 2018-11-16 17:33:28
 */
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.css'
import '../static/common.css'
import nlComponentLib from './nlComponentLib'
import vcLib from './vcLib'
import './pubConfig/codemirrorCon'  //引入codemirror配置文件

Vue.use(ElementUI)
Vue.use(nlComponentLib)
Vue.use(vcLib)

Vue.config.productionTip = false
Vue.component('my-component',{
	template:'<div>我是一个全局的componet组件</div>'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
