<template>
  <div class="home-page">
    <HomeHeader></HomeHeader>
    <HomeSwiper :list="swiperList"></HomeSwiper>
  </div>
</template>

<script>
import axios from 'axios'
import Header from './header'
import Swiper from './Swiper'
export default {
  data(){
    return {
      swiperList:[]
    }
  },
  mounted(){
    axios.get('/static/mock/index.json')
    .then(res => {
      if(res.data) {
        this.swiperList = res.data.data.swiperList
      }
    })
  },
  components:{
    HomeHeader: Header,
    HomeSwiper:Swiper

  }
}
</script>

<style lang="scss">
@import "../../assets/styles/variable.scss";
.home-page{
  background: $homeBgColor
}
</style>