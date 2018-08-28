<template>
  <div id="app">
    <el-menu
      :router="true"
      :default-active="$route.path"
      mode="horizontal"
      backgroundColor="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      >
      <el-menu-item index="/">组件概念</el-menu-item>
      <el-menu-item index="/slot">slot</el-menu-item>
      <el-menu-item index="/cptDemo">组件示例</el-menu-item>
      <el-menu-item index="/drag">拖拽插件</el-menu-item>
      <el-menu-item index="/vueX">vuex</el-menu-item>
    </el-menu>
    <div  class="main">
      <router-view></router-view>
    </div>
    <footer id="foot">
       <p>江苏南京 前端开发工程师 曹静</p>
       <p><a href="https://github.com/Mirror198829" target="_blank">https://github.com/Mirror198829</a></p>
    </footer>
  </div>
</template>
<script>
export default {
  name: '',
  data () {
    return {
      
    }
  },
  methods:{

  },
  mounted(){},
  created(){}
}
</script>
<style  lang="less">
@import '../less/index.less';
*{margin:0;padding:0;}
html,body{width:100%;height:100%;}
body{background-color:#fff}
a{text-decoration: none;color:@font-color;}
#app {display: flex;flex-direction: column;height:100%;}
.main{flex:1;overflow:auto;background-color:#fff}
.clear{ zoom:1;}
.clear:after{ content:''; display:block; clear:both;}
</style>
<style scoped  lang="less">
@import '../less/index.less';
#foot{padding:15px;text-align: center;font-size:14px;background-color:@base-color;color:@font-color;
  p:first-child{padding-bottom:2px;}
  a{
    &:hover{text-decoration:underline;}
  }
}
</style>
