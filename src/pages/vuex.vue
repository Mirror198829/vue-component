<!-- 
- Author:CaoJing
- Date:2018/8/28
- github:https://github.com/Mirror198829
-->
<template>
  <div>
    <h2>这里是通过data name获取到的前端技术栈：<code>{{dataName}}</code></h2>
    <h2>这里是通过$store.state.name获取到的前端技术栈：<code>{{$store.state.name}}</code></h2>
    <h2>这里是通过computed name获取到的前端技术栈：<code>{{name}}</code></h2>
    <button @click="changeIt">改变前端技术栈</button>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      dataName:this.$store.state.name
    }
  },
  computed:{
    name(){
      return this.$store.state.name  //必须得使用computed,否则无法更新视图
    }
  },
  methods:{
    changeIt(){
      this.$store.commit('changeName')
    }
  },
  mounted(){},
  created(){}
}
</script>

<style  scoped lang="less">
// screen >= 1200
@media screen and (min-width:1200px){

}
// 1200>= screen >=992
@media screen and (max-width:1200px){
}

@media screen and (max-width:992px){
}

@media screen and (max-width:768px){
}

@media screen and (max-width:480px){
}
</style>
