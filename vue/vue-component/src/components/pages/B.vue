<template>
  <div class="b-text">B    {{name}}
    <div>
      <!-- testC -->
      <C></C>
    </div>
  </div>
  
</template>

<script>
import C from './C'
export default {
  // inject:['name'],
  mounted() {
    console.log(this.name)
  },
  components:{
    C
  }
}
</script>

<style>

</style>