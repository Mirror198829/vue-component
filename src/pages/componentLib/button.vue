/*
 * @Author: caojing
 * @Date: 2018-11-14 14:11:18
 * @LastEditors: caojing
 * @LastEditTime: 2018-11-16 17:37:21
 */
<template>
    <div>
      <vc-block vc-title="不同尺寸" vc-sub-title="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。">
          <div slot="nlCpt">
              <nl-button size="small">small</nl-button>
              <nl-button type='primary'  size="small">small</nl-button>
              <nl-button type='plain'  size="small">small</nl-button>
          </div>
          <codemirror slot="code" v-model="code" :options="{mode:'text/css'}"></codemirror>
      </vc-block>

      <vc-block vc-title="基础用法" vc-sub-title="基础的按钮用法。">
          <div slot="nlCpt">
                <nl-button>default</nl-button>
                <nl-button type='primary'>primary</nl-button>
                <nl-button type='plain'>plain</nl-button>
          </div>
          <codemirror slot="code" v-model="code" :options="{mode:'text/css'}"></codemirror>
      </vc-block>
    </div>
</template>
<script>
import ButtonCode from '../../code/button'
export default {
    data(){
        return {
           showA:true,
           code:ButtonCode.btnTypeCode,
        }
    }
}
</script>
<style lang="less" scoped>
 .title{font-family: 'myfont'}
</style>


