<template>
  <div class="container">
    <div class="space"></div>
    <div class="search">
    <span>南昌</span>
    <Search></Search>
    </div>
    <!-- <span>南昌</span> -->
  </div>
  
</template>

<script>
import Search from '@/components/search.vue'
// import "/icon/iconfont.wxss";
export default {
  components:{
    Search
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
.space{
  width: 100%;
  height: 30px;
}

</style>