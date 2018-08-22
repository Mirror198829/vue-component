<!-- 
- Author:CaoJing
- Date:2018/8/22
- github:https://github.com/Mirror198829
-->
<template>
  <div>
    <h1 class="pTitle">匿名slot</h1>
    <div class="wrapCpt">
      <custom-slot>
        <h1>我是h1的标签</h1>
      </custom-slot>
      <custom-slot>
        <em>我是一个em标签</em>
      </custom-slot>
      <custom-slot>
        <ul>
          <li v-for="item in 3">列表{{item}}</li>
        </ul>
      </custom-slot>
      <custom-slot>
        <code>我是一个code标签</code>
      </custom-slot>
      <!-- 什么也不传 -->
      <custom-slot></custom-slot>
    </div>
    <hr/>
    <h1 class="pTitle">具名slot</h1>
    <div class="wrapCpt">
      <custom-slot-name></custom-slot-name>
      <custom-slot-name>
        <em slot="a">通过name ‘a’插入卡槽咯</em>
        <code slot="b">通过name ‘b’插入卡槽咯</code>
      </custom-slot-name>
    </div>
  </div>
</template>

<script>
import customSlot from '@/components/slot/slot'
import customSlotName from '@/components/slot/slotName'
export default {
  name: '',
  components:{
    customSlot,
    customSlotName
  },
  data () {
    return {
      
    }
  },
  methods:{

  },
  mounted(){},
  created(){}
}
</script>

<style scoped lang="less">
.pTitle{font-size:15px;position:relative;top:10px;padding-left:20px}
.wrapCpt{display:flex;box-sizing:border-box;padding:14px;flex-wrap:wrap}
</style>
