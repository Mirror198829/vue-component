<template>
  <div>
    <h5 style="margin:5px 0">自定义组件cjInput实现数据双向绑定</h5>
    {{cjInputVal}}
    <cj-input v-model="cjInputVal"></cj-input>
    <cj-input type="password" v-model="cjInputVal"></cj-input>
  </div>
</template>

<script>
  import cjInput from './components/cjInput'
  export default {
    name: '',
    data() {
      return {
        cjInputVal: "我是一个双向数据绑定",
      }
    },
    components: {
      cjInput
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
