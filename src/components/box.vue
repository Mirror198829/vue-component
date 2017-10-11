<template>
  <div class="box">
      非父子组件
      <button @click="touchHeader">触发一下header组件事件</button>
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
    touchHeader(){
      eventbus.$emit('getName', 1)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{width: 100%;height: 200px;background-color:#f1c40f;color:#fff;}
</style>
