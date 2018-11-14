/*
 * @Author: caojing
 * @Date: 2018-11-14 14:11:18
 * @LastEditors: caojing
 * @LastEditTime: 2018-11-14 17:28:26
 */
<template>
    <div>
      <nl-page-title splitLine>Button 按钮</nl-page-title>
      <nl-page-title>按钮 type</nl-page-title>
      <nl-button>default</nl-button>
      <nl-button type='primary'>primary</nl-button>
      <nl-button type='plain'>plain</nl-button>

      <nl-page-title style="margin-top:20px;">按钮 size</nl-page-title>
      <nl-button size="small">small</nl-button>
      <nl-button type='primary'  size="small">small</nl-button>
      <nl-button type='plain'  size="small">small</nl-button>
    </div>
</template>
<script>
export default {
    data(){
        return {
             
        }
    }
}
</script>
<style lang="less" scoped>

</style>
