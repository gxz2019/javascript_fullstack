<template>
  <div class="hello">
    <!-- <h1>欢迎来到马蜂窝</h1> -->
    <div class="header">
      <logo>
        <Search slot="search"></Search>
        <div slot="icon" class="icon" @click="goToDL">
          <a class="icon-a">登录</a>
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
    <div class="icon">
      <div class="icon-bar">
        <ul>
          <li v-for="(item,index) in iconList" :key="index">
            <router-link :to="item.name">
               <div class="icon-bgc">
                <div class="icon-item" :style="{backgroundColor:item.color}">
                  <img :src="item.icon" alt />
                </div>
                <div class="icon-title" :style="{color:item.color}">{{item.title}}</div>
            </div>
            </router-link>
           
          </li>
        </ul>
      </div>
    </div>
    <section class="guideflow">
      <div class="guideflow-title">
        <span class="text">
          <span style="color:yellow;font-size:25px">|</span>
          推荐攻略
        </span>
      </div>
      <div class="content" style="height:170px" v-for="(item,index) in liList" :key="index">
        <a href="" >
          <div class="guideflow-content-title">
            {{item.text1}}
            <div class="tag">
              <img
                src="https://n1-q.mafengwo.net/s9/M00/FB/0C/wKgBs1diFRKAMMptAAAIpExA3RM367.png"
                alt
              />
            </div>
          </div>
          <dl class="clearfix">
            <dt>
              <img
                :src="item.img1"
                alt
              />
            </dt>
            <dd>
              <div
                class="summary"
              >{{item.text2}}</div>
              <div class="extra">
                <div class="extra-title">
                  <span>{{item.text3}}</span>
                </div>
                <div class="author">
                  {{item.text4}}
                  <img
                    :src="item.img2"
                    alt
                    class="author-img"
                  />
                </div>
              </div>
            </dd>
          </dl>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
// import axios from 'axios'
import logo from "./component/logo";
import Search from "./component/Search";
export default {
  name: "Index",
  data() {
    return {
      bannerList: [
        {
          img: require("@/assets/images/banner1.png")
        },
        {
          img: require("@/assets/images/banner2.png")
        },
        {
          img: require("@/assets/images/banner3.png")
        }
      ],
      iconList: [
        {
          title: "找攻略",
          icon: require("@/assets/images/gonglve.png"),
          color: "#ff9d00",
          name:"gonglve"
        },
        {
          title: "看游记",
          icon: require("@/assets/images/youji1.png"),
          color: "#feca2b",
          name:"youji"
        },
        {
          title: "问达人",
          icon: require("@/assets/images/wen.png"),
          color: "#42d6ba",
          name:"daren"
        },
        {
          title: "结伴",
          icon: require("@/assets/images/jieban.png"),
          color: "#f94a87",
          name:"jieban"
        },
        {
          title: "酒店",
          icon: require("@/assets/images/jiudian.png"),
          color: "#32a2f1",
          name:"Hotel"
        },
        {
          title: "去旅行",
          icon: require("@/assets/images/qulvhang.png"),
          color: "#fd4e4e",
          name:"lvxing"
        },
        {
          title: "机票",
          icon: require("@/assets/images/jipiao.png"),
          color: "#acce0e",
          name:"jipiao"
        },
        {
          title: "当地玩乐",
          icon: require("@/assets/images/wanle.png"),
          color: "#b160df",
          name:"wanle"
        }
      ],
      liList:[]
    };
  },
  components: {
    logo,
    Search
  },
  methods:{
    goToDL() {
      this.$router.push({path:'/register'})
    }
  },
  // created() {
  //  this.$http({
  //     method:'get',
  //     url:'https://www.easy-mock.com/mock/5e086c5565f0e56ed07c7dea/index/index',
  //   })
  //   .then((response) => {
  //     // console.log(response)
  //     this.liList = response.data.liList
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
  // }
};
</script>
<style scoped>
@import "../../css/index.css";
</style>



