<template>
  <div class="container">
    <h2>父组件</h2>
    <p>
      从子组件获取的消息为：
      <span class="red">{{getMsg1}}</span>
    </p>
    <!-- <span class="red"></span> -->
    <child v-on:message="getMsg"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data(){
    return{
      getMsg1:''
    }
  },
  components:{
    child
  },
  methods:{
    getMsg(e){
      this.getMsg1 = e
    }
  }
}
</script>

<style>
.red{
  color: red
}
</style>