<template>
  <div>
    <cj-form :model="model" :rules="rules">
      <cj-form-item label="用户名">
          {{model.username}}
        <cj-input v-model="model.username"></cj-input>
      </cj-form-item>
      <cj-form-item label="密码">
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
          name: [{
            required: true,message: '不得为空',trigger: 'blur'
          }],
          password:[{
            required: true,message: '不得为空',trigger: 'blur'
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
