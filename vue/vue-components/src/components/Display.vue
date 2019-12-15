<template>
  <div>
    <h3>动态渲染.vue文件的组件 -- display</h3>
    <iDisplay :code="code"></iDisplay>
    
  </div>
</template>

<script>
import iDisplay from './display/display.vue'
import defaultCode from './display/display.js'
export default {
  components:{
    iDisplay
  },
  data() {
    return {
      code : defaultCode
    }
  }
}
</script>

<style>

</style>