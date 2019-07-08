<template>
  <div class="cjChildCpt">
    <el-form-item label="活动性质" prop="type">
      <el-checkbox-group v-model="formData.type">
        <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
        <el-checkbox label="地推活动" name="type"></el-checkbox>
        <el-checkbox label="线下主题活动" name="type"></el-checkbox>
        <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="特殊资源" prop="resource">
      <el-radio-group v-model="formData.resource">
        <el-radio label="线上品牌商赞助"></el-radio>
        <el-radio label="线下场地免费"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="活动形式" prop="desc">
      <el-input type="textarea" v-model="formData.desc"></el-input>
    </el-form-item>
  </div>
</template>

<script>
  export default {
    props: {
      formData:{}
    },
    name: '',
    data() {
      return {
        
      }
    },
    components: {

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
  .cjChildCpt {
    padding: 10px;
    border: 3px dashed #409EFF;
    margin-bottom: 20px;
  }

</style>
