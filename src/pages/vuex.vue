<!-- 
- Author:CaoJing
- Date:2018/8/28
- github:https://github.com/Mirror198829
-->
<template>
  <div style="padding:20px;">
    
    <el-button type="info" @click="changeIt">改变state状态</el-button>
    <div id="demo1">
      <div class="dItem1">
        <h2>这里是通过<span>data:name</span>获取到的前端技术栈</h2>
        <div>{{dataName}}</div>
      </div>
      <div class="dItem1">
        <h2>这里是通过<span>$store.state.name</span>获取到的前端技术栈</h2>
        <div>{{$store.state.name}}</div>
      </div>
      <div class="dItem1">
        <h2>这里是通过<span>computed:name</span>获取到的前端技术栈</h2>
        <div>{{name}}</div>
      </div>
    </div>
    <hr style="margin:20px 0"/>
    <div>
      <h2>计数器示例(统计总数使用了getters)</h2>
      <div>
        <p class="transmit" v-for="item in shopLst" :key="item.id">
          <el-button class="tranBtn" @click="decrease(item.id)">-</el-button>
          <span>{{item.count}}</span>
          <el-button class="tranBtn" @click= "add(item.id)">+</el-button>
        </p>
      </div>
      <h4 style="text-align:center;">统计总数为：{{$store.getters.totals}}</h4>
    </div>
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
    },
    shopLst(){
      return this.$store.state.shopLst
    }
  },
  methods:{
    changeIt(){
      this.$store.commit('changeName')
    },
    add(id){
      this.$store.commit('addNum',{id})
    },
    decrease(id){
      this.$store.commit('decrease',{id})
    }
  },
  mounted(){},
  created(){}
}
</script>

<style  scoped lang="less">
@color:#20a0ff;
#demo1{display:flex;margin-top:14px;
  .dItem1{border:2px dashed @color;padding:15px;margin-right: 20px;text-align:center;flex:1;
    &:last-child{margin-right:0}
    h2{font-size:14px;font-weight: 400;}
    div{text-align:center;background-color:@color;color:#fff;padding:10px 30px;display:inline-block;margin-top:15px;}
    span{font-weight:700;font-size:20px;margin:0 5px;}
  }
}
.transmit{text-align:center;margin:15px 0;
  .tranBtn{margin:0 10px}
}
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
