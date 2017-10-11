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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{width: 100%;background-color:#f1c40f;color:#fff;padding:30px 0;}
</style>
