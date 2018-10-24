/*
 * @Author: caojing 
 * @Date: 2018-10-22 16:57:26 
 * @Last Modified by: caojing
 * @Last Modified time: 2018-10-24 17:09:52
 */
<template>
  <div>
      <button id="btn1">改变title</button>
      <h3 id="title">我的内容到底是啥</h3>
      <button id="btn2">改变name</button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  methods:{
      bindData(){
        let btn1 = document.getElementById('btn1')
        let btn2 = document.getElementById('btn2') 
        let txt = document.getElementById('title')
        let data = {
          title:'新闻',
          name:'小说'
        }
        let val = '新的值'

        //数据劫持
        observer(data)
        function observer(obj){
          Object.keys(obj).forEach(item => {
            defineReactive(obj,item,obj[item])
          })
        }
        function defineReactive(obj,key,value){
          Object.defineProperty(obj,key,{
            get(){
              return value
            },
            set(newValue){
              console.log(`触发了吗`)
              value = newValue
              txt.innerText = value
            }
          })
        }
        
        btn1.onclick = () => {
          data.title = 'title' 
        }
        btn2.onclick = () => {
          data.name = 'name'
        }
      }
      // bindData(){
      //   //使用数据时，要先对数据进行劫持（代理）
      //   //使用Object.defineProperty劫持数据，把属性转成访问器的方式
      //   /**
      //    * getter
      //    *    获取属性触发
      //    * setter
      //    *    修改属性触发
      //    */
      //   /**
      //    * Object.defineProperty
      //    * 定义属性，也可以在原有的属性上描述
      //    */
      //   let testData = {}
      //   Object.defineProperty(testData,'name',{
      //     value:'1111',
      //     writable:true, //是否允许重新改写。默认：false。如下“改写测试”
      //     enumerable:true,//是否允许枚举，即是否可被遍历。默认：false。如下“枚举测试”
      //     configurable:false //是否允许删除。默认：false。如下“删除测试”
      //   })
      //   Object.defineProperty(testData,'title',{
      //     value:'1111',
      //     writable:true, //是否允许重新改写
      //     enumerable:true,//是否允许枚举，即是否可被遍历
      //     configurable:true //是否允许删除
      //   })
        
      //   /**
      //    * 改写测试
      //    */
      //   console.log(testData.name)
      //   testData.name = 'newName'
      //   console.log(testData.name)
      //   /**
      //    * 枚举测试
      //    */
      //   for(let arr in testData){
      //     console.log(`枚举属性是：${arr}`)
      //   }
      //   /**
      //    * 删除测试
      //    */
      //   //delete testData.name //报错
      //   delete testData.title //可以
      //   console.log(testData)

      //   let btn = document.getElementById('btn')
      //   let txt = document.getElementById('title')
      //   btn.onclick = function(){
      //       alert(123)
      //       txt.innerText = '123123'
      //   }
      // }
  },
  mounted(){
    this.bindData()
  },
  created(){}
}
</script>

<style  scoped>

</style>