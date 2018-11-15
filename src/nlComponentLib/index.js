/*
 * @Author: caojing
 * @Date: 2018-11-14 14:04:57
 * @LastEditors: caojing
 * @LastEditTime: 2018-11-14 14:04:59
 */
import Vue from 'vue'
import nlPageTitle from './components/nlPageTitle';
import nlButton from './components/nlButton';
export default (Vue)=>{
    Vue.component("nlPageTitle",nlPageTitle);
    Vue.component("nlButton",nlButton);
}