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
    <section class="guideflow" >
      <div class="guideflow-title">
        <span class="text">
          <span style="color:yellow;font-size:25px">|</span>
          推荐攻略</span>
      </div>
      <div class="content" style="height:170px">
        <a href="">
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
                <div class="extra-title">
                  <span>14504浏览</span>
                </div>
              <div class="author">
                Julie_MissSummer     
                <img src="https://b1-q.mafengwo.net/s2/M00/86/2E/wKgIDFt_0aiAEGLcAAq4L6gmB08106.png?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" alt="" class="author-img">                       
              </div>
              </div>
            </dd>
          </dl>
        </a>
      </div>
      <div class="content" style="height:170px">
        <a href="">
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
                <div class="extra-title">
                  <span>14504浏览</span>
                </div>
              <div class="author">
                Julie_MissSummer     
                <img src="https://b1-q.mafengwo.net/s2/M00/86/2E/wKgIDFt_0aiAEGLcAAq4L6gmB08106.png?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90" alt="" class="author-img">                       
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
          title: "问达人",
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
 @import '../css/index.css'
</style>



