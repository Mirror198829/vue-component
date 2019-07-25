<template>
    <div>
        <label v-if="label">{{label}}</label>
        <!-- input占位符 -->
        <slot></slot>
        <p v-if="error">
            <!-- 错误信息展示 -->
            {{error}}
        </p>
    </div>
</template>

<script>
export default {
  name:'cjFormItem',
  props:{
      label:{
          type:String,
          default:''
      },
      error:{
          type:String,
          default:''
      }
  },
  data(){
   return {

   }
  },
  components: {

  },
  methods:{

  },
  mounted(){

  },
  created(){}
}
</script>

<style lang="less">

</style>
<style lang="less" scoped>

</style>