# Vue组件
## 单向数据流  
数据从父组件流向子组件，只能单向绑定。  
在子组件内部不应该修改父组件传递过来的数据。 浏览器会报错。  
解决的方法：  
1. 作为data中局部数据的初始值使用  
2. 作为子组件的computed属性  
``` javascript
//错误示例
<custom :count="count"></custom>

Vue.component('custom',{
 props:['count'],
 data(){
 
 },
 template:`<button @click="changeCount"></button><p>{{count}}</p>`,
 methods:{
   changeCount(){
    this.count ++ //报错，不能直接修改从父组件传递过来的值
   }
 }
})
```
## props验证
根据配置来验证，如果不符合要求浏览器会有错误提示
``` javascript
props:{
 count:{
  type:Number, //类型，验证类型为原生构造器：String、Number、FunctionObject、Boolean、Array
  type:[Number,String],//多个类型验证
  default:10, //默认值
  required：true,//是否必填
  validator:function(value){
    return value > 10
  }      //自定义验证方式
 }
}
```
## 备注
Vue是在浏览器解析和标准化html后才能获取模板内容，有些元素限制了被它包裹的元素。  
例如：ul中只能放li，table里面只能放tbody；select中只能放option  
通过`is`属性扩展原生html元素
