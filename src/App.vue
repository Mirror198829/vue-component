<template>
  <div id="app">
    <header>
      <div class="headInfo">
        <img src="./assets/logo/logo.svg" alt="LOGO">
        <span class="logoTxt">WEB组件库</span>
      </div>
    </header>
    <div class="appMain">
      <div class="side">
        <el-menu
          :router="true"
          :default-active="$route.path"
          class="el-menu-vertical-demo"
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
.clear{ zoom:1;}
.clear:after{ content:''; display:block; clear:both;}
.el-menu{border-right:0px;}
</style>
<style scoped  lang="less">
@import '../less/index.less';
@max-width:1400px;
.box-shadow{box-shadow:1px 1px 3px 0px #ccc;z-index:100;}
#foot{padding:15px;text-align: center;font-size:14px;background-color:#f6f9fc;color:@font-color;.box-shadow
  p:first-child{padding-bottom:2px;}
  a{
    &:hover{text-decoration:underline;}
  }
}
#app {display: flex;height:100%;width:100%;flex-direction: column;}
header{height: 60px;background-color:#fff;background-color:#f6f9fc;.box-shadow;display:flex;justify-content:center;align-items:center;
  .headInfo{width:@max-width;display:flex;align-items:center;
    img{transform:scale(0.7);position:relative;left:20px;}
    .logoTxt{font-size:20px;margin-left:30px;color:#48576a}
  }
}
.appMain{display: flex;flex:1;width:@max-width;margin:0 auto;}
.side{width:300px;background:#fff;overflow-y: auto;}
.main{flex:1;background-color:#fff;overflow-y: auto;padding:20px;}
</style>
