<!-- 
- Author:CaoJing
- Date:2018/7/2
- github:https://github.com/Mirror198829
-->
<template>
  <div class="cpt">
      <h1>我是第1个组件</h1>
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

<style  scoped lang="less">
@color:#f00;
.cpt{border:2px dashed @color;padding:20px;text-align:center;color:@color}
</style>
