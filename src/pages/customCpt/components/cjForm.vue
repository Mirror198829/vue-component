<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
export default {
  name:'cjForm',
  provide(){ //把表单实例自己作为参数传递下去，子代可以直接使用
      return{
          form:this
      }
  },
  props:{
      model:{
          type:Object,
          required:true
      },
      rules:{
          type:Object
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