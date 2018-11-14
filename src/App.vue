<template>
  <div id="app">
    <div class="side">
      <el-menu
        :router="true"
        :default-active="$route.path"
        backgroundColor="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        >
        <el-submenu index="1">
           <template slot="title">
            <span>组件概念</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/">父子组件</el-menu-item>
            <el-menu-item index="/slot">slot</el-menu-item>
            <el-menu-item index="/drag">拖拽插件</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
           <template slot="title">
            <span>组件库</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/button">Button 按钮</el-menu-item>
            <el-menu-item index="/cptDemo">提示框/动态组件</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="/vueX">vuex</el-menu-item>
        <el-menu-item index="/objDefine">响应式数据原理</el-menu-item>
        <el-menu-item index="/d2">d2</el-menu-item>
      </el-menu>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <!-- <footer id="foot">
       <p>江苏南京 前端开发工程师 曹静</p>
       <p><a href="https://github.com/Mirror198829" target="_blank">https://github.com/Mirror198829</a></p>
    </footer> -->
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
#app {display: flex;height:100%;width:100%;}
.side{width:300px;background:@base-color;overflow-y: auto;}
.main{flex:1;background-color:#fff;overflow-y: auto;padding:20px;}
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
