<template>
  <div id="app">
    <div class="parentCpt">
        <h1>父组件</h1>
        <el-input style="margin-top:10px" v-model="name.data" placeholder="地址传递数据给子组件"></el-input>
        <el-input style="margin-top:10px" v-model="data1" placeholder="值传递数据给子组件"></el-input>
        <el-input style="margin-top:10px" v-model="grandson.data" placeholder="地址传递给孙子组件"></el-input>
        <button >我是showNum按钮</button>
        <div class="childCptWrap">         
          <v-header  :my-message="name" @getnum="showNum" :my-data="data1" :my-grandson="grandson"></v-header>
          <div class="clear" style="width:100%">
            <div style="float:left;" class="cptWrap">
              <v-component-a></v-component-a>
            </div>
            <div style="float:right" class="cptWrap">
              <v-component-b></v-component-b>           
            </div>
          </div>         
          <my-component></my-component>
          <slot-a v-show="true">
            <p slot="CPU">CPU</p>
            <p slot="membory">内存</p>
            <p>我是另外的slot</p>
          </slot-a>
        </div>
        <div>
          <h4>我是App.vue中vuex的值</h4>
          <em>{{count}}</em>
          <button @click="changeCount">改变state</button>
          <button @click="transCount('vuex')">传入字符串参数</button>
          <input type="text" @input="changeTxt"/>
        </div>
        <vuex-child-cpt></vuex-child-cpt>
    </div>
  </div>
</template>

<script>
import vheader from './components/v-header.vue'
import box from './components/box.vue'
import vComponentA from './components/v-component-a.vue'
import vComponentB from './components/v-component-b.vue' 
import slotA from './components/slot-a.vue'
import vuexChildCpt from './components/vuex-child-component.vue'
export default {
  name: 'app',
  data(){
    return{
      name:{data:''},
      data1:'',
      grandson:{data:''},
      info:'看看我出来了没有'
    }
  }, 
  computed: {
      count () {
          return this.$store.state.count
      }
  }, 
  components:{
    vHeader:vheader,
    box:box,
    vComponentA:vComponentA,
    vComponentB:vComponentB,
    slotA:slotA,
    vuexChildCpt:vuexChildCpt
  },
  methods:{
    showNum(abc){
      alert(abc)
    },
    changeCount(){
      this.$store.commit('increment')
    },
    transCount(arg){
      this.$store.commit('changeContent',arg)
    },
    changeTxt(){
      console.log(123130)
    }
  }
}
</script>

<style>
*{margin:0;padding:0;}
body{background-color: #1abc9c}
.parentCpt{padding:30px;width: 1000px;margin:60px auto;background-color: #eceff1;border-radius: 10px;}
.childCptWrap{}
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif;-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;text-align: center;color: #2c3e50;}
.clear{ zoom:1;}
.clear:after{ content:''; display:block; clear:both;}
.cptWrap{border-radius:10px;overflow: hidden;width:49%;margin-top:20px}
</style>
