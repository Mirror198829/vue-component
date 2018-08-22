<template>
  <div>
     <div class="parentCpt">
        <h1>父组件</h1>
        <el-input style="margin-top:10px" v-model="name.data" placeholder="地址传递数据给子组件"></el-input>
        <el-input style="margin-top:10px" v-model="data1" placeholder="值传递数据给子组件"></el-input>
        <el-input style="margin-top:10px" v-model="grandson.data" placeholder="地址传递给孙子组件"></el-input>
        <button style="margin-top:20px">我是showNum按钮</button>
        <div class="childCptWrap" style="margin-top:20px">         
          <v-header  :my-message="name" @getnum="showNum" :my-data="data1" :my-grandson="grandson" style="margin-bottom:20px"></v-header>
          <div class="clear" style="width:100%;display:flex">
            <div  class="cptWrap" style="margin-right:20px;flex:1;text-align:center">
              <v-component-a></v-component-a>
            </div>
            <div class="cptWrap" style="flex:1;text-align:center">
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
import vheader from '@/components/v-header.vue'
import box from '@/components/box.vue'
import vComponentA from '@/components/v-component-a.vue'
import vComponentB from '@/components/v-component-b.vue' 
import slotA from '@/components/slot-a.vue'
import vuexChildCpt from '@/components/vuex-child-component.vue'
export default {
  name: 'Home',
  data(){
    return{
      name:{data:''},
      data1:'',
      grandson:{data:''},
      info:'看看我出来了没有',
      
    }
  }, 
  computed: {
      count () {
          return this.$store.state.count
      },
      dragOptions () {
        return  {
          animation:2,
          group: 'people',
          ghostClass: 'ghost'
        };
      },
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import '../../less/index.less';
.parentCpt{padding:30px;width: 1000px;margin:60px auto;border-radius: 10px;background-color:@base-color;}
.childCptWrap{margin-bottom:10px;}
</style>
<style  lang="less">

</style>
