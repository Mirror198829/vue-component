# Vuex
参考地址：https://vuex.vuejs.org/zh/guide/  
Vuex:状态管理模式，采用集中式存储管理应用的所有组件的状态，并以`相应的规则`(修改状态的唯一途径:mutation)保证状态以一种可预测的方式发生改变。  
****
``` javascript
let store = new Vuex.Store({
  state:{
    count:110 //定义一个状态
  },
  mutations:{
    updateCount(state){        //改变state状态，其中state是默认传的
       state.count += 1
    }
  }
})
```
vuex中的状态是响应的，在data里面定义的不会因为state的改变而改变，只在当前组件有反应，所以要用计算属性才有反应。  
注意：传参通常传的是一个对象。  
`store`:仓库，它包含大部分的状态，状态存储是响应式的，不能直接改变store中的状态  
`getter`:派分状态，抽离操作状态的逻辑，可被多组件使用  
`mutation`:mutation必须是同步更新状态；修改状态的唯一途径，要使改变状态可被记录，必须要commit一个mutation；如果mutation里面有异步的操作，那么记录的值还是之前的值。  因此，只要有异步操作就得放到action里面
`action`：异步操作，Action提交的是mutation，而不是直接变更状态，分发状态 dispatch  
#### vuex原则
1. 每个应用只有一个store实例  
2. 更改store中的状态的唯一方法是提交mutation  
3. mutation必须是同步函数  
4. action可以包含任意异步操作  
5. action提交的是mutation，而不是直接更改状态  
# Vue组件
## 组件的主要特点  
重用性 --能够公用和通用  
可定制性 --可设置参数和属性  
高内聚性 --功能完整  
互操作性 --多组件协同工作
## 组件的API来自三部分
props参数  传递数据给组件  
slot定制模板  外部模板混合子组件模板  
event自定义事件 监控子组件交互状态 
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
> 作用域

父组件模板的内容在父组件作用域内编译；  
子组件模板的内容在子组件作用域内编译

## 动态组件
多个组件可以使用同一个挂载点，动态在他们之间切换  
使用`<componet>`，使用is进行动态绑定  
``` html
 <div class="section">
      <h1 class="sectionTitle">动态组件</h1>
      <div style="margin-bottom:20px;">
        <button @click="changeCpt(1)">组件1</button>
        <button @click="changeCpt(2)">组件2</button>
        <button @click="changeCpt(3)">组件3</button>
      </div>
      <component :is="curcomponet"></component>
      <keep-alive>    //保存状态，不被改变
         <component :is="curcomponet"></component>
      </keep-alive>
    </div>
```
``` javascript
import cptOne from '@/components/cpt/cpt1'
import cptTwo from '@/components/cpt/cpt2'
import cptThree from '@/components/cpt/cpt3'
data () {
    return {
      curcomponet:cptOne
    }
  }
```

## 解析DOM模板时的注意事项
Vue是在浏览器解析和标准化html后才能获取模板内容，有些元素限制了被它包裹的元素。  
例如：ul中只能放li，table里面只能放tbody；select中只能放option  
通过`is`属性扩展原生html元素
