<template>
  <div class="header">
      <header>
         <h3>子组件1（props down,event up）</h3>
         <div style="margin-top:10px">
           <el-input v-model="myMessage.data" placeholder="地址传递的数据：js 中对象和数组是引用类型，指向同一个内存空间，若 prop 是一个对象或数组，在子组件内部改变它会影响父组件的状态。"></el-input>
           <el-input style="margin-top:10px" v-model="myData" placeholder="值传递数据:每次父组件更新，子组件所有prop会更新为最新值。因此，不能在子组件内部改变prop，如果做了，vue会在控制台给出警告"></el-input>
         </div>
         <el-button style="margin-top:10px" type="primary" @click="showNum()">我是子组件，点击触发父组件事件showNum</el-button>
         <v-grandson :my-grandson="myGrandson"></v-grandson>
      </header>
  </div>
</template>

<script>
import vGrandson from './v-component-grandson.vue'
export default {
  name: 'vheader',
  props:['myMessage','myData','myGrandson'],
  data () {
    return {
      name: 'caojing'
    }
  },
  components:{
    vGrandson:vGrandson,
  },
  methods:{
    showNum(){
      this.$emit('getnum',[123,this.myMessage.data])
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header header{padding:15px;background-color:#f1c40f;color:#fff;border-radius: 8px;}
</style>
