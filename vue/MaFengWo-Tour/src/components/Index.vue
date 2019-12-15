<template>
  <div class="hello">
    <!-- <h1>欢迎来到马蜂窝</h1> -->
    <div class="header">
      <logo>  
          <Search slot="search"></Search>
        <div slot="icon" class="icon">
          <a href="" class="icon-a">登录</a>
        </div>
      </logo>
    </div>
    <div class="banner">
      <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in bannerList" :key="index">
        <div class="banner-img" :style="`background-image:url(${item.img})`"></div>
        <!-- <div class="banner-title">{{item.title}}</div> -->
      </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import logo from '../components/logo/logo';
import Search from '../components/search/Search'
export default {
  name: 'Index',
  data () {
    return {
      bannerList:[
        {
          img:require("../assets/images/banner1.png"),
        },
        {
          img:require("../assets/images/banner2.png"),
        },
        {
          img:require("../assets/images/banner3.png"),
        }
      ],
    }
  },
  components:{
    logo,
    Search
  }
}
</script>


<style scoped>
/* h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
.header{
  position: relative;
}
.search-bar{
  flex: 6;
}
.icon{
  flex: 0.8;
}
.icon-a{
  color: #ffa800;
  text-decoration: none;
}
.banner-img{
  height: 11rem;
  background-size: cover;
  position: relative;
}
.banner-title{
  position: absolute;
  color: #ffffff;
  bottom: 0;
}
</style>
