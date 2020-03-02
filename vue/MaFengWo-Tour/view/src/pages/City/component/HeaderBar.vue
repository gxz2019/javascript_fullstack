<template>
  <div class="header-tab">
    <span :class="['item', tab === 1 ? 'active' : '']" @click="tab = 1">境内</span>
    <span :class="['item', tab === 2 ? 'active' : '']" @click="tab = 2">境外·港澳台</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab:1
    }
  }
}
</script>

<style lang="less" scoped>
  .header-tab:before{
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      left: 0;
      height: 1px;
      transform: scaleY(0.6);
      background-color: #c8c7cc;
    }
  .header-tab{
    z-index: -1;
    width: 100%;
    height: 2.5rem;
    background-color: #00BCD4;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    .item{
      color: #fff;
      font-weight: 300;
      text-align: center;
      border: 1px solid #fff;
      font-size: 0.9rem;
      height: 1rem;
      line-height: 1rem;
      width: 40%;
    }
    .active{
      background-color: #fff;
      color: #00BCD4;
    }
  }
</style>