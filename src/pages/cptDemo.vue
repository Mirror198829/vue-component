<!-- 
- Author:CaoJing
- Date:2018/8/23
- github:https://github.com/Mirror198829
-->
<template>
  <div id="cptDemo">
    <div class="section">
      <h1 class="sectionTitle">模态框</h1>
    </div>
    <div class="section">
      <h1 class="sectionTitle">提示框</h1>
      <div class="alertWrap">
        <cj-alert :showicon="true" @close-click="closehandle"></cj-alert>
      </div>
      <div class="alertWrap">
        <cj-alert type="error" msg="错误" :closeable="false"></cj-alert>
      </div>
      <div class="alertWrap">
        <cj-alert type="error" msg="错误" :closeable="false" :showicon="true"></cj-alert>
      </div>
      <div class="alertWrap">
        <cj-alert type="success" msg="恭喜，成功了" @close-click="closehandle"></cj-alert>
      </div>
      <div class="alertWrap">
        <cj-alert  :showicon="true" @close-click="closehandle">
          <h1>我是自定义的样式</h1>
        </cj-alert>
      </div>
    </div>
  </div>
</template>

<script>
import cjAlert from '@/components/cpt/cjAlert'
export default {
  name: '',
  components:{
    cjAlert
  },
  data () {
    return {
      
    }
  },
  methods:{
    closehandle(){
      alert('触发删除事件拉')
    }
  },
  mounted(){},
  created(){}
}
</script>

<style scoped lang="less">
#cptDemo{display:flex;height:100%;}
.section{flex:1;border-right:1px solid gray;padding:10px 14px;
  &:last-child{border-right:0}
  .sectionTitle{font-weight:400;font-size:20px;margin-bottom:14px;}
}
.alertWrap{margin:10px 0}
</style>
