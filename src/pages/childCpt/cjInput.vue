<template>
    <div>
        <input :type="type" :value="value" @input="$emit('input',$event.target.value)">
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