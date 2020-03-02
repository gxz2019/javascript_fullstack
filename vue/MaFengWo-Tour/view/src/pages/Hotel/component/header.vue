<template>
  <div class="header">
      <div class="header-logo">
        <img src="@/assets/images/logo123.png" alt="">
      </div>
      <div class="header-title"  @click="goIndex">
        <span>官网首页</span>
      </div>
    </div>
</template>

<script>
export default {
  methods:{
    goIndex() {
      this.$router.push({path:'/index'})
    }
  }
}
</script>

<style lang="less" scoped>
@import '../Hotel.less';
</style>