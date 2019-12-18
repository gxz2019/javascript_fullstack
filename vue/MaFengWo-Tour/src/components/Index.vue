<template>
  <div class="hello">
    <!-- <h1>欢迎来到马蜂窝</h1> -->
    <div class="header">
      <logo>
        <Search slot="search"></Search>
        <div slot="icon" class="icon">
          <a href class="icon-a">登录</a>
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
            <div class="icon-bgc">
              <a href>
                <div class="icon-item" :style="{backgroundColor:item.color}">
                  <img :src="item.icon" alt />
                </div>
                <div class="icon-title" :style="{color:item.color}">{{item.title}}</div>
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <section class="guideflow">
      <div class="guideflow-title">
        <span class="text">
          <span style="color:yellow"></span>
          推荐攻略</span>
      </div>
      <div class="content">
        <a href>
          <div class="guideflow-content-title">
            【La vie en France】不尽是浪漫与文艺，幸有花田与麦浪（三刷巴黎及南法自驾一周）
            <div class="tag">
              <img
                src="https://n1-q.mafengwo.net/s9/M00/FB/0C/wKgBs1diFRKAMMptAAAIpExA3RM367.png"
                alt
              />
            </div>
          </div>
          <dl class="clearfix">
            <dt>
              <img src="https://p1-q.mafengwo.net/s15/M00/2C/FF/CoUBGV34xiGAQdyzABCNteuknnI165.png?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90" alt="">
            </dt>
            <dd>
              <div class="summary">
                 【卷首语】文字及图片预告 法国 人总爱把c'est la vie挂在嘴上， 但往往不是赞美生活，而是一种对生活的无奈和妥协， 工作不顺了，ben, c'est la vie， 不小心踩到狗屎了，c'est la vie…… 是啊，生活哪有那么多美好，而 法国 人出了名的随性而为更是令人头疼。我想到了在 巴黎 共和 广场的马路上堆满了空玻璃酒瓶和易拉罐，三五成群的年轻人坐或躺在路边，一副醉生梦死的样子…… 也想到了在 巴黎 地铁入口被一名宿醉的酒鬼吓到…… 还有我们因车技不熟练不敢开快车，在南法的公路上一直被从旁边超车的 法国 人bb…… 然而，当我们站在
              </div>
              <div class="extra">
                14504浏览
              </div>
              <div class="author">
                Julie_MissSummer                            
              </div>
            </dd>
          </dl>
        </a>
      </div>
    </section>
  </div>
</template>

<script>
import logo from "../components/logo/logo";
import Search from "../components/search/Search";
export default {
  name: "Index",
  data() {
    return {
      bannerList: [
        {
          img: require("../assets/images/banner1.png")
        },
        {
          img: require("../assets/images/banner2.png")
        },
        {
          img: require("../assets/images/banner3.png")
        }
      ],
      iconList: [
        {
          title: "找攻略",
          icon: require("../assets/images/gonglve.png"),
          color: "#ff9d00"
        },
        {
          title: "看游记",
          icon: require("../assets/images/youji1.png"),
          color: "#feca2b"
        },
        {
          title: "问答人",
          icon: require("../assets/images/wen.png"),
          color: "#42d6ba"
        },
        {
          title: "结伴",
          icon: require("../assets/images/jieban.png"),
          color: "#f94a87"
        },
        {
          title: "酒店",
          icon: require("../assets/images/jiudian.png"),
          color: "#32a2f1"
        },
        {
          title: "去旅行",
          icon: require("../assets/images/qulvhang.png"),
          color: "#fd4e4e"
        },
        {
          title: "机票",
          icon: require("../assets/images/jipiao.png"),
          color: "#acce0e"
        },
        {
          title: "当地玩乐",
          icon: require("../assets/images/wanle.png"),
          color: "#b160df"
        }
      ]
    };
  },
  components: {
    logo,
    Search
  }
};
</script>


<style scoped>
body{
  font-family:'PingFangSC-Light',Arial,Helvetica,sans-serif,"Hiragino Sans GB";
  color: #474747
}
.header {
  position: relative;
}
.search-bar {
  flex: 6;
}
.icon {
  flex: 0.8;
}
.icon-a {
  color: #ffa800;
  text-decoration: none;
  position: absolute;
  bottom: 0.2rem;
}
.banner-img {
  height: 11rem;
  background-size: cover;
  position: relative;
}
.banner-title {
  position: absolute;
  color: #ffffff;
  bottom: 0;
}
ul {
  margin-top: 1rem;
}
.icon {
  /* width: 100%; */
  padding: 0.1rem;
  /* display: flex; */
  /* margin-top: 1rem; */
}
.icon-bar {
  position: relative;
  /* display: flex; */
}
.icon-bgc {
  width: 5.6rem;
  height: 5.6rem;
  text-align: center;
  position: relative;
  box-sizing: border-box;
  /* background-color: #ffa800;
  border-radius: 30%; */
  /* margin-bottom: 1rem */
}
.icon-item {
  width: 3rem;
  height: 3rem;
  display: table_cell;
  margin: 0 auto;
  vertical-align: middle;
  text-align: center;
  border-radius: 41%;
  margin-bottom: 0.4rem;
}
img {
  width: 60%;
  height: 60%;
  /* margin: 0 auto; */
  transform: translateY(0.5rem);
}
.guideflow{
  background: #ffffff;
  /* font-size: 24px; */
}
.guideflow-title{
  /* font-size: 24px; */
  height: 0.5rem;
  margin-left: 0.4rem;
  margin-bottom: 0.2rem;
  width: 9.5rem;
  display: flex;
  align-items: center;
  background: #ffffff;
  z-index: 1000;

}
.text{
    font-family: PingFang SC;
    padding-left: 5px;
    border-left: #ffdb53 solid 3px;
    border-radius: 2px;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: .533rem;
    background: #fff;
}
.content{

}
.guideflow-content-title{
     padding: .6rem 3rem 0 0.8rem;
    font-size: 1.2rem;
    color: #111;
    height: 4rem;
    line-height: 1.2em;
    max-height: 2.6rem;
    position: relative;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
.tag{
  position: absolute;
  right: 0;
  top: 0.8rem;
  line-height: 1em
}
.tag img{
  height: 1.3rem;
  width: auto;
}
.clearfix .bd dl{
  padding: 0.48rem 0.8rem 0.8rem;
  margin: 0
}
dt{
  width: 8rem;
  float: left;
  padding: 0.7rem
}
dt img{
  width: 8rem;
  height: 5rem;
}
dd{
  margin-left: 7.7rem;
  color: #999;
  height: 5rem;
  position: relative;
}
.summary{
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 1.3em;
    font-size: .7.8rem;
    padding: .3rem 0 0;
}
</style>
