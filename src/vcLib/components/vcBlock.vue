<template>
    <div>
        <h2 class="vcTitle">{{vcTitle}}</h2>
        <h4 class="subTitle">{{vcSubTitle}}</h4>
        <div class="vcBlockWrap">
            <div class="vcBlockHead">
                <slot name="nlCpt"></slot>
            </div>
            <div class="vcBlockMain" :class="{'expanded':isExpand}">
                <slot name="code"></slot>
            </div>
            <div class="vcBlockFoot" @click="expandBlock">
                <i v-if="!isExpand" class="footIcon el-icon-caret-bottom"><span class="footIconTxt">&nbsp;&nbsp;&nbsp;&nbsp;显示代码</span></i>
                <i v-else class="footIcon el-icon-caret-top"><span class="footIconTxt">&nbsp;&nbsp;&nbsp;&nbsp;隐藏代码</span></i>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'vcBlock',
  data () {
    return {
      isExpand:true
    }
  },
  props:{
      vcTitle:{
          type:String,
          require:true
      },
      vcSubTitle:{
          type:String,
          require:true
      }
  },
  methods:{
     expandBlock(){
         this.isExpand = !this.isExpand
     }
  },
  computed:{
    
  },
  mounted(){},
  created(){}
}
</script>
<style lang="less" scoped>
 @border:1px solid #ebebeb;
 @suitW:15px;
 .vcTitle{font-size: 22px;color:#1f2f3d;font-weight: 400;margin:55px 0 20px;}
 .subTitle{font-size: 14px;color:#5e6d82;line-height: 1.5em;margin:14px 0;font-weight: 400;}
 .vcBlockWrap{
     border:@border;
     .vcBlockHead{border-bottom:@border;padding:@suitW}
     .vcBlockMain{max-height:0;transition:max-height .5s;overflow: hidden;
        &.expanded{max-height:1000px}
        &:hover + .vcBlockFoot{
           .footIcon{
            .footIconTxt{display: inline;}
          } 
        }
     }
     .vcBlockFoot{height:43px;background:#fff;cursor: pointer;border-top:@border;position: relative;top:-1px;display:flex;justify-content: center;align-items:center;
        &:hover{background-color: #f9fafc;}
        &:hover .footIcon{color:#409eff;
            .footIconTxt{display: inline;}
        }
       .footIcon{color:#d3dce6;font-size:13px;transition:color .2s;
            .footIconTxt{display:none;}
       }
     }
 }
</style>
