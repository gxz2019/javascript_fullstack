<template>
  <div class="header">
      <div class="img"  @click="handClick">
        <img src="@/assets/images/left.png" alt="">
      </div>
      <span class="title">城市选择</span>
  </div>
</template>

<script>
import { mapMutations} from 'vuex'
export default { 

  methods:{
    ...mapMutations(['returnLast']),
    handClick() {
      this.$emit('homeRun')
    }
  }
}
</script>

<style lang="less" scoped>
  .header{
    // width: 95%;
    margin: 0 auto;
    height: 4rem;
    background-color: #00BCD4;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    position: sticky;
    top: 0;
    z-index: 10000;
    .img{
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      // display: inline-block;
      position: absolute;
      left: 0;
      img{
        width: 55%;
        height: 55%;
      }
    }
    .title{
      color: #fff;
      font-size: 1.2rem;
    }
    
  }
</style>