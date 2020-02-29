<template>
  <div>
    <Header @homeRun="run" />
    <HeaderBar />
    <List :hotCities="hotCities" :cities="cities" />
  </div>
</template>

<script>
import Header from './component/header';
import HeaderBar from './component/HeaderBar';
import List from './component/list';
export default {
  components:{
    Header,HeaderBar,List
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

</style>