<template>
  <button :class="'i-button-size' + size" >
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
function oneOf(value,validList) {
  validList.forEach(item => {
    if(item === value) {
      return true
    }else{
      return false
    }
  });
}
export default {
  
  props:{
    size:{
      // type:String,
      validator(value) { ////校验
        return oneOf(value,['small','large','default'])
      },
      default:'default'
    },
    
  },
  data() {
    return {
      // size:'large'
      message:'子组件的内容'
    }
  },
  methods:{
    handleClick() {
      this.$emit('on-Click')
    },
    sureClick () {
      // console.log('确认')
      this.$emit('sendmsg',this.message)
    }
  }
 
}
</script>

<style scoped>
button{
  border: 1px solid #008c8c;
  background-color: yellow;
  color: black
}
.i-button-sizelarge{
  padding: 10px 16px;
}
.i-button-sizedefult{
  padding: 8px 14px;

}
.i-button-sizesmall{
  padding: 4px 10px;

}
</style>