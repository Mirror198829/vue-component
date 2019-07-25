<template>
    <div>
        <input :type="type" :value="value" @input="onInput($event)">
    </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {

   }
  },
  props:{
      value:{},
      type:{
          type:String,
          default:'text'
      }
  },
  components: {

  },
  methods:{
      onInput(e){
          //派发事件，通知父组件值发生变化
          this.$emit('input',e.target.value)
          //通知父组件校验
          this.$parent.$emit('validate')
      }
  },
  mounted(){

  },
  created(){}
}
</script>

<style>

</style>
<style scoped>

</style>