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
## 使用slot分发内容
内容分发：使用一种方式混合父组件的内容和子组件自己的模板。  
在子组件中使用特殊的<slot>作为内容的插槽，这样会使组件的可扩展性更强。  
为什么不使用props传递数据？因为需要传递不同html结构的元素，父组件定制不同样子的模板，但props实现较为复杂  
> 单个slot

父组件提供额外的内容，子组件会把整个内容片段插入slot所在Dom位置，并替换调slot标签。  
> 具名slot

<slot>元素可以用一个特殊的属性name分配如何分发内容。同时可以使用一个匿名slot处理那些没有对应slot的内容。
## 解析DOM模板时的注意事项
Vue是在浏览器解析和标准化html后才能获取模板内容，有些元素限制了被它包裹的元素。  
例如：ul中只能放li，table里面只能放tbody；select中只能放option  
通过`is`属性扩展原生html元素
