<!-- 
- Author:CaoJing
- Date:2018/8/23
- github:https://github.com/Mirror198829
-->
<template>
  <div class="alertCpt" :class="[classes]">
      <i v-if="showicon"
      class="fa alertIcon" 
      :class="{
        'fa-info':type == 'info',
        'fa-question-circle-o':type=='error',
        'fa-check':type == 'success'
      }"></i>
      <div class="mContent">
        <slot>
          <span class="message">{{msg}}</span>
        </slot>
        <i v-if="closeable" class="closeBtn fa fa-close" @click="closeHandler"></i>
      </div>
  </div>
</template>

<script>
export default {
  props:{
    type:{
      type:String,
      default:'info'
    },
    msg:{
      type:String,
      default:'这是一个信息'
    },
    closeable:{
      type:Boolean,
      default:true
    },
    showicon:{
      type:Boolean,
      default:false
    }
  },
  name: 'alertCpt',
  data () {
    return {
      
    }
  },
  computed:{
    classes(){

      return `m-alert-${this.type}`
    }
  },
  methods:{
    closeHandler(){
      this.$emit('close-click')
    }
  },
  mounted(){},
  created(){}
}
</script>

<style  scoped lang="less">
@import '../../../less/index.less';
@success-color:#67c23a;
@error-color:red;
@info-color:#409eff;
.alertCpt{width:450px;border-radius:5px;display:flex;padding:10px;color:#fff;
  &.m-alert-info{background-color:@info-color;}
  &.m-alert-error{background-color:@error-color;}
  &.m-alert-success{background-color:@success-color;}

  .alertIcon{margin-right:10px;position:relative;top:2px;width:15px;text-align: center;}
  .mContent{flex:1;position:relative;font-size: 14px;
    .closeBtn{position:absolute;right:0;top:2px;cursor: pointer;}
  }
}
</style>
