<template>
  <div class="main" v-show="visiable">
    <h2>{{ title }}</h2>
    <p>{{ content }}</p>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:String
    },
    content:{
      type:String
    },
    visiable:{
      type:Boolean
    }
  }
}
</script>

<style scoped>
.main{
  position: fixed;
  top: 0;right: 0;bottom: 0;left: 0;
  background-color: #008c8c;
  opacity: .6;
}
h2 ,p{
  color: black
}
</style>