<template>
  <div class="city">
    <Header @homeRun="run" />
    <HeaderBar />
    <List :hotCities="hotCities" :cities="cities" />
    <Alphabet :cities="cities"></Alphabet>
  </div>
</template>

<script>
import Header from './component/header';
import HeaderBar from './component/HeaderBar';
import List from './component/list';
import Alphabet from './component/alphabet'
export default {
  components:{
    Header,HeaderBar,List,
    Alphabet
  },
  data() {
    return {
      hotCities:[],
      cities:{}
    }
  },
   mounted(){
    this.gethotCities();
    this.getCities()
  },
  methods:{ 
    gethotCities() {
      this.$http({
        type:'get',
        url:'/api/gxz/index'
      })
      .then((res) => {
        this.hotCities = res.data.hotCities;
      })
    },
    getCities() {
      this.$http({
        type:'get',
        url:'../../../static/city.json'
      })
      .then((res) => {
        this.cities = res.data.data.cities
        // console.log(this.cities)
      })
    },
    run() {
      this.$router.push({path:'/Hotel'})
    }
  },
  
}
</script>

<style lang="less" scoped>
.city{
  height: 100%;
  // overflow: hidden;
}
</style>