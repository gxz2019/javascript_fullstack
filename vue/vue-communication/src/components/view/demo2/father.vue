<template>
  <div class="container">
    <!-- <div>
      <ul class="red">
        <li v-for="item in myObj" :key="item.id">{{item.name}}</li>
      </ul>
    </div> -->
    <child :sendMsg="myMsg" :sendNum="myNum" :sendObj="myObj"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data(){
    return {
      myNum:123,
      myMsg:'我是父组件的信息',
      myObj:[
        {
          id:1,
          name:'zhangsan'
        },
         {
          id:2,
          name:'zhangsan1'
        }
      ]
    }
  },
  components:{
    child
  }
};
</script>

<style>
</style>