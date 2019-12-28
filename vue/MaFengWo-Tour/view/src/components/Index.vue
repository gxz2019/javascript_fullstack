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
      ],
      liList: [
        
          {
            text1:
              "年末巨献。有朋自远方来。相聚泰国天灯节。",
            text2:
              "在2019的最后一个月 只剩下30天的日子里 你若要问我对这一年有什么想法 大概只有 跌·宕·起·伏 这四个字可以形容 有郁郁不得志的丧 也有放手一搏的冲劲 有出其不意的感动 也有从天而降的惊喜 你要问我是谁 我叫刀楽死，也是dodotogo 在蜂首俱乐部有个大婊姐的称号 平时靠广告混口饭吃 曾经的全职变成了如今的兼职 两点一线不再是生活的必备 稳定也变得不再稳定 充满着不确定因素 挑战也来的比往年更多一些 但，当代青年嘛 不就是要在不断斜杠的路上砥砺前行 Keep Going 才不会沦为这个时代最大的失败者 再来说说和马蜂窝的缘分 作为一个",
            text3:
              "\n                                                                            20459浏览\n                                                                                                                \n                                            刀楽死dodotogo\n                                            \n                                        \n                                                                    ",
            text4:
              "\n                                            刀楽死dodotogo\n                                            \n                                        ",
            img1:
              "https://p1-q.mafengwo.net/s15/M00/B0/D4/CoUBGV385X6AFeVpAATUmqY3GfI799.png?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90",
            img2:
              "https://p1-q.mafengwo.net/s14/M00/64/8E/wKgE2l108C2AakoSAABIqKdhH-s17.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
          },
          {
            text1:
              "\n                        桂林旅游攻略！桂林美食攻略桂林美食攻略桂林旅游攻略\n                                            ",
            text2:
              "桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略桂林旅游攻略",
            text3:
              "\n                                                                            42151浏览\n                                                                                                                \n                                            飞鱼哥\n                                            \n                                        \n                                                                    ",
            text4:
              "\n                                            飞鱼哥\n                                            \n                                        ",
            img1:
              "https://b1-q.mafengwo.net/s14/M00/13/4E/wKgE2l1t2s2ARwAuAAIPkdCAGVI87.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90",
            img2:
              "https://b1-q.mafengwo.net/s14/M00/F1/C4/wKgE2l1Y5K2AW_YFAAXJl9qiYNU97.jpeg?imageMogr2%2Fthumbnail%2F%2148x48r%2Fgravity%2FCenter%2Fcrop%2F%2148x48%2Fquality%2F90"
          },
          {
            text1:
              "\n                        在北京去哪吃地道京味儿美食？\n                                            ",
            text2:
              "又要吐槽了，来北京不吃烤鸭，合适么？再说那么多牌子的烤鸭，一个礼拜吃七家也吃不全呀！全聚德，便宜坊，大董，四季民福，局气，四世同堂，利群，花家怡园，北平楼，羲和雅苑等等等，是吧！重要的事说三遍：谁来北京买真空包装的烤鸭我和谁急，不管自己吃还是送人，之前还有指路人推荐买，不能原谅！！！绝对不能买，买了回去吃了就得骂街，千万不要买，烤鸭只能吃先现出锅的，凉了都没法吃！！！前门路边各种什么转炉的，29 39 49 59一只的，都不能吃！！！\n\n 谁来北京买真空包装的烤鸭我和谁急，不管自己吃还是送人",
            text3:
              "\n                                                                            735430浏览\n                                                                                                                \n                                            问答\n                                        \n                                                                    ",
            text4: "",
            img1:
              "https://n1-q.mafengwo.net/s10/M00/BB/C1/wKgBZ1iG-yCAFCvEAANuoLiL5CI82.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90"
          },
          {
            text1:
              "\n                        堪称吃都的广州有哪些美食不能错过？\n                                            ",
            text2:
              "广州美食太多，又尤其适合南方人的口味，看看上海开了多少家粤菜馆就知道了。稍介绍一二，供楼主参考。\n宝华面店:广州市荔湾区宝华路117号，虾肉非常鲜，很嫩，味道也很不错，面条Q劲十足，这家面馆算是西关老字号，并且店面人也挺多，值得一试。",
            text3:
              "\n                                                                            3183562浏览\n                                                                                                                \n                                            问答\n                                        \n                                                                    ",
            text4: "",
            img1:
              "https://b1-q.mafengwo.net/s9/M00/06/53/wKgBs1dyW2-Ae_P0AAG-zbxmRfU08.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90"
          },
          {
            text1:
              "\n                        如何用一天在西安耍的尽兴？\n                                            ",
            text2:
              "西安一日游想玩儿的尽兴，首先要找一个能一起玩儿的好伙伴，这个是前题！其次游玩景点不要求多，玩儿精就好！前一久有北京的蜂蜂来西安玩儿，我陪她一起玩儿了一天。因为我是西安的目的地指路人和当地人，所以这位蜂蜂在当地人栏目里找我下了订单，经过我们讨论后安排了一整天的行程，具体行程如下：\n\n早饭（老潼关肉夹馍）——小雁塔——西安交大——午饭（岐山臊子面）——城墙——大雁塔——晚饭（城墙根儿下的薇酌饮）\n当然啦，这个行程是臭美行程，我负责拍照，她负责美！\n\n如果推荐给其他蜂蜂的行程应该是这样的！如",
            text3:
              "\n                                                                            904722浏览\n                                                                                                                \n                                            问答\n                                        \n                                                                    ",
            text4: "",
            img1:
              "https://p1-q.mafengwo.net/s10/M00/A1/AB/wKgBZ1h0uf2ALcQtAAD1jkgLSxk50.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90"
          },
          {
            text1:
              "\n                        日本到底有多发达？\n                                            ",
            text2:
              "以前对日本的印象，大都来自于柯南等动漫和东野圭吾的侦探小说。当然，去了日本就会发现，这里的治安相当好，不过倒是有一些别的地方，让我印象很���刻。\n\n下面就从公共建设和人文情怀方面谈谈日本到底有多不同。\n\n【公共建设方面】\n1.让我用马桶温暖你\n这几年，看到许多在日本抢购马桶圈的新闻，一直没弄明白马桶圈为什么也得去日本买，国内也有啊~\n\n来到日本才体会到，马桶圈原来也有这么多种style。\n在日本各种大型公共场所，比如商场、车站等，卫生间一定使用了全",
            text3:
              "\n                                                                            3362002浏览\n                                                                                                                \n                                            问答\n                                        \n                                                                    ",
            text4: "",
            img1:
              "https://n1-q.mafengwo.net/s9/M00/0A/D1/wKgBs1d0tJiAeJOKAAG53QT9F9M34.jpeg?imageMogr2%2Fthumbnail%2F%21288x218r%2Fgravity%2FCenter%2Fcrop%2F%21288x218%2Fquality%2F90"
          }
        
      ]
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
  }
};
</script>
<style scoped>
@import "../css/index.css";
</style>



