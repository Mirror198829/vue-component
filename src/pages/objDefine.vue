/*
 * @Author: caojing 
 * @Date: 2018-10-22 16:57:26 
 * @Last Modified by: caojing
 * @Last Modified time: 2018-10-22 17:33:49
 */
<template>
  <div>
      <button id="btn">改变内容</button>
      <h3 id="title">内容是</h3>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      
    }
  },
  methods:{
      bindData(){
        //使用数据时，要先对数据进行劫持（代理）
        //使用Object.defineProperty劫持数据，把属性转成访问器的方式
        
        let btn = document.getElementById('btn')
        let txt = document.getElementById('title')
        btn.onclick = function(){
            alert(123)
            txt.innerText = '123123'
        }
      }
  },
  mounted(){
    this.bindData()
  },
  created(){}
}
</script>

<style  scoped>

</style>