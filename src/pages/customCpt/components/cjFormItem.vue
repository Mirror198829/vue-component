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
  inject:['form'],//注入
  props:{
      label:{
          type:String,
          default:''
      }
  },
  data(){
   return {
       error:"",
       data:'111'
   }
  },
  components: {
  },
  methods:{
     validate(){
         //执行具体校验工作
         //1.获取校验规则
         console.log(this.form.rules)
         //2.获取数据模型
     } 
  },
  mounted(){
      //监听校验事件
      this.$on('validate',this.validate)
  },
  created(){}
}
</script>

<style lang="less">

</style>
<style lang="less" scoped>

</style>