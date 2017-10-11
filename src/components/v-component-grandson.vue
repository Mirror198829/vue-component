<template>
  <div class="box">
      <h3>孙子组件</h3>
      <el-input style="margin-top:10px" v-model="myGrandson.data"  placeholder="孙子组件"></el-input>
  </div>
</template>

<script>
export default {
  name: 'vCptGrandson',
  props:['myGrandson'],
  data () {
    return {
      name: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{width: 100%;background-color:#eceff1;padding:15px;box-sizing: border-box;border-radius: 8px;color:#333;margin:15px 0;}
</style>
