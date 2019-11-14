<template>
  <div class="child">
    <h2>子组件</h2>
    <p>从父组件接受到的数据是：</p>
    <div>
      string:<span class="red">{{sendMsg}}</span>
     <br>
     <br>
      number: <span class="green">{{sendNum}}</span>
    </div>
    <div>
      <div>
      <ul class="red">
        <li v-for="item in sendObj" :key="item.id">{{item.name}}</li>
      </ul>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    sendMsg:{
      type:String,
      required:true
    },
    sendNum:{
      type:Number,
      required:true
    },
    sendObj:{
      //声明验证类型
      validator(val){
        if(Object.prototype.toString.call(val) === "[object Array]" || 
        Object.prototype.toString.call(val) === "[object object]") {
          return true
        }
      }
    }
  }
}
</script>

<style>
.red{
  color: red
}
.green{
  color: green
}
</style>