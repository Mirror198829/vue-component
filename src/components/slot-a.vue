<template>
  <div class="box">
      <h3>看看slot是怎么做的</h3>
      <slot>
        只有在没有要分发的内容时才会显示。
      </slot>
      <slot name="CPU"></slot>
      <slot name="membory"></slot>
  </div>
</template>

<script>
export default {
  name: 'slotA',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{width: 100%;background-color:#eceff1;padding:15px;box-sizing: border-box;border-radius: 8px;color:#333;margin:15px 0;}
</style>
