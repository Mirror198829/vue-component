<template>
    <div>
        <input type="text" :value="value" @input="$emit('input',$event.target.value)">
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
      value:{}
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