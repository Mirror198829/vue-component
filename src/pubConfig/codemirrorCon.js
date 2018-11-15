/*
 * @Author: caojing
 * @Date: 2018-11-15 14:14:00
 * @LastEditors: caojing
 * @LastEditTime: 2018-11-15 15:12:27
 */
//vue-codemirror
import Vue from 'vue';
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript.js' // language js
import 'codemirror/mode/css/css.js'
import'codemirror/addon/selection/active-line.js'
import 'codemirror/mode/vue/vue.js'
//import 'codemirror/theme/paraiso-light.css' // theme css
import 'codemirror/theme/base16-light.css' // theme css
import 'codemirror/theme/monokai.css' // theme css
import '../../common/index.css' //自定义相关样式设置

import 'codemirror/addon/scroll/simplescrollbars.css'
import 'codemirror/addon/scroll/simplescrollbars'

Vue.use(VueCodemirror, { 
    options: {
      theme: 'monokai',
      styleActiveLine: false,
      lineNumbers: false,
      line: false,
      tabSize: 4,
      indentUnit:2, //缩进单位，设置并无反应
      smartIndent:true, //自动缩进是否开启
      scrollbarStyle:"simple" //['overlay','simple']
    }
})