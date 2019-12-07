<template>
  <div class="a-text">A
    <testb></testb>
  </div>
  
</template>

<script>
import B from './B'
export default {
  provide:{
    name:'gxz'
  },
  components:{
    'testb':B
  },
  data() {
    return {
      // name:'GXZ'
    }
  }
}
</script>

<style>

</style>