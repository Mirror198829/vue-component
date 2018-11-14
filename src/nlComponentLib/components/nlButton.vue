/*
 * @Author: caojing
 * @Date: 2018-10-23 11:36:54
 * @LastEditors: caojing
 * @LastEditTime: 2018-11-13 16:18:52
 */
<template>
  <div class="nlBtn" :class="[classes]" @click="handleClick">
      <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'nlButton',
  props:{
      type:{
        type:String,
        default:'default'
     },
     size:{
         type:String,
         default:'medium'
     }
  },
  data () {
    return {
      
    }
  },
  methods:{
      handleClick(evt) {
        this.$emit('click', evt);
      }
  },
  computed:{
    classes(){
      return `${this.type}Btn ${this.size}Btn ${this.disabled}`
    }
  },
  mounted(){},
  created(){}
}
</script>

<style  scoped>
.nlBtn{padding:0 18px;border-radius: 4px;cursor: pointer;box-sizing: border-box;-webkit-user-select:none;display:inline-block;}
/*按钮颜色*/
.defaultBtn{border:1px solid rgba(230,233,235,1);background-color: rgba(255,255,255,1);color:#A3ADB6;}
.defaultBtn:hover{background:rgba(245,246,247,1);border:1px solid rgba(230,233,235,1);}
.primaryBtn{background-color: #419EFF;color:#fff;}
.primaryBtn:hover{background-color: #54a7ff;}
.primaryBtn:active{background-color: #3D94F0;}
.plainBtn{opacity:0.7012999999999999;border:1px solid rgba(65,158,255,1);color:#419EFF;}
.plainBtn:hover{background-color:rgba(226,240,255,1);}

/*按钮大小*/
.mediumBtn{height: 34px;line-height: 34px;font-size:14px;}
.smallBtn{height: 32px;line-height: 32px;font-size:12px;}
</style>
