<template>
  <div class="search-bar">
    <div class="search">
      <i class="iconfont icon-sousuo"></i>
      <input type="search" placeholder="搜索景点/目的地" class="search-input">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.search-bar{
  position: absolute;
  left: 50px;
  text-align: center;
  /* display: inline; */
  display: inline-block;
  width: 60%;
}
.search{
  border: 1px solid #000;
  box-sizing: border-box;
  border-radius: 20px;
  width: 100%;
  text-align: center;
}
i{
  display: inline-block;
}
.search-input{
  display: inline-block;
}
</style>