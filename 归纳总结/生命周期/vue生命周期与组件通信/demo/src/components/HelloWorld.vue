<template>
  <div>
    {{msg}}
    <button @click="handClick">click</button>
  </div>
</template>

<script>
export default {
  props:{
    msg:String
  },
  data() {
    return {
      // msg:'11122222'
    }
  },
  methods:{
    handClick() {
      this.$emit('getMsgToParent','abc')
  },
  },
  //new Vue()   //实例初始化
  //created
  beforeCreate() {
    console.log('befroreCreate~~~~~~')
  },
  created() {
    console.log('created~~~~~~~')
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted') 
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  beforeDestroy() {
    console.log('beforeDestory')
  },
  destroyed() {
    console.log('destroyed')
  }

}
</script>

<style>

</style>