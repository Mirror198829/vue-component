<template>
  <div>
    <cj-form :model="model" :rules="rules">
      <cj-form-item label="用户名" prop="username">
        <cj-input v-model="model.username"></cj-input>
      </cj-form-item>
      <cj-form-item label="密码" prop="password">
        <cj-input type="password" v-model="model.password"></cj-input>
      </cj-form-item>
    </cj-form>
  </div>
</template>

<script>
  import cjInput from './components/cjInput'
  import cjFormItem from './components/cjFormItem'
  import cjForm from './components/cjForm'
  export default {
    name: '',
    data() {
      return {
        model: {
          username: 'ccc',
          password: 1234
        },
        rules: {
          username: [{
            required: true,message: '请输入用户名',trigger: 'blur'
          }],
          password:[{
            required: true,message: '请输入密码',trigger: 'blur'
          }]
        }
      }
    },
    components: {
      cjInput,
      cjFormItem,
      cjForm
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
