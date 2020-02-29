<template>
  <div class="hotel">
    <Header />
    <HotelSearch />
  </div>
</template>

<script>
import Header from './component/header'
import HotelSearch from './component/HotelSearch'
export default {
  data() {
    return {
    }
  },
  components:{
    Header,HotelSearch
  }
}
</script>

<style lang="less" scoped>
@import './Hotel.less';
</style>