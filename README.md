# Vue组件
## 组件的主要特点  
重用性 --能够公用和通用，因此在组件内部就不能写具体的业务逻辑  
可定制性 --可设置参数和属性  
高内聚性 --功能完整。组件资源内部高内聚，组件资源由自身加载控制  
互操作性 --多组件协同工作  
作用域独立 -- 内部结构密封，不与全局或其他组件产生影响  
规范化接口 -- 组件接口有统一规范，或者是生命周期的管理
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
  type:Number, //类型，验证类型为原生构造器：String、Number、Function、Object、Boolean、Array
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
# 组件通信
### 组件通信方式类别
 1. props/自定义事件
 2. eventbus(事件总线)
 3. vuex
 4. 其他通信方式   
    深层次组件$attr 和 $listeners  
    provide 和 inject 组件库使用的比较多  
![avatar](https://mirror198829.github.io/static/vue/cptdata.jpg)

| 通信方式 | 区别 |
| --- | --- |
| props | 用于父组件传递数据给子组件 |
| 自定义事件 | 用于子组件向父组件通信 | 
| eventBus | 适用于非父子组件通信的简单场景，使用一个空的vue实例作为中央事件总线 | 
| Vuex | 状态管理，适用于复杂场景 |
### props
父组件传递数据给子组件：
1.子组件显示地用props选项申明获得的数据：
``` javascript
export default {
  name: 'vheader',
  props:['myMessage','myData'],
}
```
 2.父组件传递数据
``` html
<v-header  my-message="vue2.0"  my-data="propsdownData"></v-header>
```
至此，子组件将获取到数据`vue2.0`和`porpsdownData`

### 自定义事件
每个vue实例都实现了事件接口：

 - $on(eventName)监听事件（不能用 $on 侦听子组件释放的事件，而必须在模板里直接用 v-on 绑定）
 - $emit(eventName)触发事件
例如：
``` html
//App.vue 父组件
<template>
    <div id=”counter-event-example”>
        <p>{{ total }}</p>
        <button-counter v-on:increment=”incrementTotal”></button>
    </div>
</template>

import buttonCounter from ‘./buttonCounter.vue’
exoprt default{
   name:’app’,
   data(){
    return{
        Counter:0
    }
   },
   componts:{
    buttonCounter:buttonCounter
    },
    methods(){
        incrementTotal(){
            This.total += 1
        }
    }
}
```
``` html
//buttonCounter.vue 子组件
<template>
    <div>
        <button @click=”incrementCounter”>点击触发父组件事件</button>
    </div>
</template>
exoprt default{
    name:’buttonCounter’,
    methods(){
    incrementCounter(){
        this.$emit(‘increment’)
      }
    }
}
```
#### 单向数据流
父组件向子组件传递数据，子组件不允许修改这个数据 （大多数情况都是单项数据流）
#### 双向数据流
父组件传值给子组件，子组件可以直接改变传递的数据，有两种情况
* sync
``` html
<Modal
  v-show="show"
 :app-show.sync = "show"
></Modal>
```
``` javascript
props:{
  appShow:{}
}
onclick(){
   this.$emit('update:appShow',false)
}
```
* v-model  
相对sync，v-model用的更多  
在绑定的时候只能用1次
``` html
<Modal 
    v-show = "show"
    v-model = "show"
></Modal>
```
``` javascript
props:{
    value:{
        type:Boolean, //key值必须定义为value
        default:false
 }
},
methods:{
   onClick(){
       this.$emit('input',false)
 }
}
```

**注意点**
**1.每次父组件更新，子组件所有prop会更新为最新值。因此，不能在子组件内部改变prop，如果做了，vue会在控制台给出警告。**
**2.注意在 JavaScript 中对象和数组是引用类型，指向地址，如果 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。**

### 事件总线（eventbus）
new Vue的实例上会有两个方法，$on $emit  
利用$on监听事件，$emit发布事件  
因此，有两种方式做事件总线
* 作为插件，创建新的实例。new Vue（）
* 使用$root访问根实例
##### 方法一：创建一个新的实例
1.创建中央事件总线eventbus.js:
```javascript
import Vue from 'vue'
export default new Vue()
```
2.创建v-component-a.vue子组件
``` html
<template>
  <div class="box">
      <h3>子组件A(event bus)</h3>
      <el-button style="margin-top:10px" type="primary" @click="touchCompontB">点击我触发子组件B的事件</el-button>
  </div>
</template>

<script>
import eventbus from '../eventbus.js'

export default {
  name: 'box',
  data () {
    return {
      name: ''
    }
  },
  methods:{
    touchCompontB(){
      eventbus.$emit('getName',['子组件b'])
    }
  },
}
</script>
```
3.创建v-component-b.vue子组件
``` html
<template>
  <div class="box">
      <h3>子组件B {{name}}</h3>
      <el-button style="margin-top:10px" type="primary" @click="getMyMsg('自己')">点击我触发自己组件的事件</el-button>
  </div>
</template>

<script>
import eventbus from '../eventbus.js'

export default {
  name: 'box',
  data () {
    return {
      name: ''
    }
  },
  methods:{
    getMyMsg(arg){
      let msg="触发了"+arg+"组件的方法"
      alert(msg)
    }
  },
  created(){
   eventbus.$on('getName',(arg)=>{    
    this.getMyMsg(arg)
   })
 }
}
</script>
```
4.在父组件注册两个子组件
``` html
<template>
  <div id="app">
    <div class="parentCpt">       
      <div class="clear" style="width:100%">
        <div style="float:left;" class="cptWrap">
          <v-component-a></v-component-a>
        </div>
        <div style="float:right" class="cptWrap">
          <v-component-b></v-component-b>           
        </div>
      </div>         
    </div>
  </div>
</template>

<script>
import vComponentA from './components/v-component-a.vue'
import vComponentB from './components/v-component-b.vue' 
export default {
  name: 'app',
  components:{
    vComponentA:vComponentA,
    vComponentB:vComponentB
  }
}
</script>
```
**注意点：**
``` javascript
eventbus.$on('getName',(arg)=>{    
    this.getMyMsg(arg)
 })
```
**若写成es6的箭头函数，则直接写this，否则需要先在eventbus.$on之前将this赋值给let self=this;**


##### 方法二：使用$root访问根实例  
``` javascript
//组件1：
methods:{
      downHandle(){
        this.$root.$emit('add-todo','new data') 
      }
}
//组件2：
created(){
   this.$root.$on('add-todo',(value)=>{
        console.log(value)
   })
}
```
## 解析DOM模板时的注意事项
Vue是在浏览器解析和标准化html后才能获取模板内容，有些元素限制了被它包裹的元素。  
例如：ul中只能放li，table里面只能放tbody；select中只能放option  
通过`is`属性扩展原生html元素
# Vuex
参考地址：https://vuex.vuejs.org/zh/guide/  
Vuex:状态管理模式，采用集中式存储管理应用的所有组件的状态，并以`相应的规则`(修改状态的唯一途径:mutation)保证状态以一种可预测的方式发生改变。  
****
``` javascript
let store = new Vuex.Store({
  state:{ //定义一个状态，状态的修改只能是提交mutations实现，无法直接赋值
    count:110 
  },
  mutations:{ //改变state状态，其中state是默认传的，通过commit触发 
    updateCount(state){        
       state.count += 1
    }
  },
  getters:{    //数据深层次处理。类似组件的computed，是vuex对state的数据处理
    totals(state){
      return state.shopLst.reduce((startCount,item) => startCount+item.count,0)
   }
  },
  actions:{     //异步操作,得通过分发方式出发 dispatch
    updateCountAction(store,params){	
	    setTimeout(() => {
	  	  store.commit('addNumAction',params)
	    },3000)
	  },
  }
})
```
#### 核心概念
`store`：仓库，它包含大部分的状态，状态存储是响应式的，不能直接改变store中的状态  

`getter`：派分状态，抽离操作状态的逻辑，可被多组件使用  

`mutation`：mutation必须是同步更新状态；修改状态的唯一途径，要使改变状态可被记录，必须要commit一个mutation；如果mutation里面有异步的操作，那么记录的值还是之前的值。  因此，只要有异步操作就得放到action里面

`action`：异步操作，Action提交的是mutation，而不是直接变更状态，分发状态 dispatch   
  
`modules`：应用变得非常复杂时，store 对象就有可能变得相当臃肿，因此Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter。
``` javascript
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

>注意：
1. 传参通常传的是一个对象。  
2. vuex中的状态是响应的，在data里面定义的不会因为state的改变而改变，只在当前组件有反应，所以要用计算属性才有反应。
 
#### vuex原则
1. 每个应用只有一个store实例  
2. 更改store中的状态的唯一方法是提交mutation  
3. mutation必须是同步函数  
4. action可以包含任意异步操作  
5. action提交的是mutation，而不是直接更改状态  
