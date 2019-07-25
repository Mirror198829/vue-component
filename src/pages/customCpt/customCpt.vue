<template>
  <div>  
    <cj-form-item label="用户名"> 
        <cj-input v-model="model.username"></cj-input>
    </cj-form-item>
    <cj-form-item label="密码">
        <cj-input type="password" v-model="model.password"></cj-input>
    </cj-form-item>
  </div>
</template>

<script>
  import cjInput from './components/cjInput'
  import cjFormItem from './components/cjFormItem'
  export default {
    name: '',
    data() {
      return {
        model:{
            username:'ccc',
            password:1234
        },
      }
    },
    components: {
      cjInput,
      cjFormItem
    },
    methods: {

    },
    mounted() {

    },
    created() {}
  }

</script>

<style lang="less">

</style>
<style lang="less" scoped>

</style>
