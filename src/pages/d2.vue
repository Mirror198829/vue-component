/*
 * @Author: caojing
 * @Date: 2018-11-13 15:58:57
 * @LastEditors: caojing
 * @LastEditTime: 2018-11-13 17:21:37
 */
<template>
    <div>
       <g2-line :charData="serverData" :id="'c1'"></g2-line>
    </div>
</template>
<script>
import g2Line from '../components/G2Line'
export default {
  name: '',
  components:{
      g2Line
  },
  data () {
    return {
      serverData: [{
        year: '2010',
        value: 3
      }, {
        year: '2011',
        value: 4
      }, {
        year: '2012',
        value: 3.5
      }, {
        year: '2013',
        value: 5
      }, {
        year: '2014',
        value: 4.9
      }, {
        year: '2015',
        value: 6
      }, {
        year: '2016',
        value: 7
      }, {
        year: '2017',
        value: 9
      }, {
        year: '2018',
        value: 13
      }]
    }
  },
  methods:{

  },
  mounted(){},
  created(){}
}
</script>
<style scoped>

</style>





