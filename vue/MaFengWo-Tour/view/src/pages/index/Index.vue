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
      <van-swipe :autoplay="3000" indicator-color="#ffa800">
        <van-swipe-item v-for="(item,index) in bannerList" :key="index">
          <div class="banner-img" :style="`background-image:url(${item.image_url})`"></div>
        </van-swipe-item>
        <!-- <div class="custom-indicator" slot="indicator">
        </div>-->
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
        <a href>
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
              <img :src="item.image_url1" alt />
            </dt>
            <dd>
              <div class="summary">{{item.text2}}</div>
              <div class="extra">
                <div class="extra-title">
                  <span>{{item.text3}}</span>
                </div>
                <div class="author">
                  <span>{{item.author}}</span>
                  <img :src="item.image_url2" alt class="author-img" />
                </div>
              </div>
            </dd>
          </dl>
        </a>
      </div>
    </section>
    <div class="load" v-if="liList.length <= 15" @click="loadMore">点击加载更多</div>
    <div class="load" v-else>没有更多了~~~</div>
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
      bannerList: [],
      iconList: [
        {
          title: "找攻略",
          icon: require("@/assets/images/gonglve.png"),
          color: "#ff9d00",
          name: "gonglve"
        },
        {
          title: "看游记",
          icon: require("@/assets/images/youji1.png"),
          color: "#feca2b",
          name: "youji"
        },
        {
          title: "问达人",
          icon: require("@/assets/images/wen.png"),
          color: "#42d6ba",
          name: "daren"
        },
        {
          title: "结伴",
          icon: require("@/assets/images/jieban.png"),
          color: "#f94a87",
          name: "jieban"
        },
        {
          title: "酒店",
          icon: require("@/assets/images/jiudian.png"),
          color: "#32a2f1",
          name: "Hotel"
        },
        {
          title: "去旅行",
          icon: require("@/assets/images/qulvhang.png"),
          color: "#fd4e4e",
          name: "lvxing"
        },
        {
          title: "机票",
          icon: require("@/assets/images/jipiao.png"),
          color: "#acce0e",
          name: "jipiao"
        },
        {
          title: "当地玩乐",
          icon: require("@/assets/images/wanle.png"),
          color: "#b160df",
          name: "wanle"
        }
      ],
      liList: []
    };
  },
  components: {
    logo,
    Search
  },
  mounted() {
    this.getData();
    // this.$nextTick(() => {
    //   this.scroll = new BScroll(this.$refs.bsCroll)
    // })
  },
  methods: {
    goToDL() {
      this.$router.push({ path: "/register" });
    },
    getData() {
      this.$http({
        type: "get",
        url: "/api/gxz/index"
      })
        .then(res => {
          this.bannerList = res.data.banner;
          // this.liList = res.data.strategy;
          if (this.liList.length < 1) {
            for (let i = 0; i < 7; i++) {
              this.liList.push(res.data.strategy[i]);
            }
          } else {
            this.liList = res.data.strategy;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    loadMore() {
      this.getData();
    }
  }
};
</script>
<style scoped>
@import "./index.css";
</style>



