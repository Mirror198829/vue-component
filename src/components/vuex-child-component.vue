<template>
  <div class="box">
      <h3>我是子组件中vuex</h3>
      <em>{{count}}</em>
  </div>
</template>

<script>
export default {
  name: 'vuexChildCpt',
  data () {
    return {
    }
  },
  computed: {
      count () {
          return this.$store.state.count
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box{width: 100%;background-color:#eceff1;padding:15px;box-sizing: border-box;border-radius: 8px;color:#333;margin:15px 0;}
</style>
