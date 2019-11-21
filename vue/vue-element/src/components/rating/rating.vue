<template>
  <div class="rating">
    <!-- 第一部分 -->
    <div class="rating-first">
      <div class="rating-first-left">
        <h2 class="rate">{{seller.score}}</h2>
        <h3 class="rate1">综合评分</h3>
        <h3 class="rate2">高于周边商家{{seller.rankRate}}%</h3>
      </div>
      <div class="rating-first-right">
        <div class="taidu">
          <span class="taidu-a">服务态度</span>
          <star :size="24" :score="seller.serviceScore"></star>
          <span class="score">{{seller.serviceScore}}</span>
        </div>
        <div class="taidu">
          <span class="taidu-a">商品评分</span>
          <star :size="24" :score="seller.foodScore"></star>
          <span class="score">{{seller.foodScore}}</span>
        </div>
        <div class="taidu">
          <span class="taidu-a">送达时间</span>
          <span class="taidu-a">{{seller.deliveryTime}}分钟</span>
        </div>
      </div>
    </div>
    <!-- 第二部分 -->
    <div class="rating-second"></div>
    <!-- 第三部分 -->
    <div class="rating-third">
      <div class="rating-third-1">
        <span @click="b" :class="ClassArr[index1]">{{}}</span>
        <span @click="b" :class="ClassArr[index1]">{{}}</span>
        <span @click="b" :class="ClassArr[index1]">{{}}</span>
      </div>
      <div class="rating-third-2">
        <span class="third-2" @click="a">
          <img src="./img1.png" alt="" class="img1" v-if="show">
          <img src="./img2.png" alt="" class="img1" v-else >
        </span>
        <span class="text">只看有内容的评价</span>
      </div>
    </div>
    <!-- 第四部分 -->
    <div class="rating-forth">
      <ul>
        <li v-for="(item,index) in ratings" :key="index" class="rating-item" v-show="show1(item.rateType,item.text)">
          <div class="avator">
            <img src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="" width="28" height="28">
          </div>
          <div class="content" >
            <h1 class="name">{{item.username}}</h1>
            <div class="star-wrapper">
              <star :size="16" :score="item.score" class="star"></star>
              <span class="delivery">{{item.deliveryTime}}</span>
            </div>
            <p class="text">{{item.text}}</p>
            <div class="recommend">
              <span class="icon-thumb_up"></span>
              <span class="item" v-for="(item1,index) in item.recommend" :key="index">{{item1}}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import ElementUI from 'element-ui';
import star from '../star/star'
export default {
  name: "Rating",
  props: {
    seller: {
      type: Object
    },
    ratings:{
      type:Object
    }
  },
    computed:{
  },
 created(){
  },
  data() {
    return {
      show:false,
      ClassArr:['blue','black'],
      index1:0,
      indexCount:0,
      desc:[]
    };
  },
  components:{
    star
  },
  methods:{
    a(){
      this.show = !this.show
    },
    b(){
      this.indexCount = this.indexCount + 1,
      this.index1 = this.indexCount % 2

    },
   
    show1(type,text){
      if(this.show === false){
        return true
      }
      if(this.show === true && type === 0 && text) {
        return true
      }
    }
  }
};
</script>

<style lang="stylus" scoped>
.rating-first
  display flex 
  border-bottom 1px solid rgba(7, 17, 27, 0.1)
  font-weight normal
  .rating-first-left 
    width 105px
    text-align: center
    padding 20px
    border-right 1px solid rgba(7, 17, 27, 0.1)
    margin-top 8px
    margin-bottom 8px

    .rate
      font-weight: normal
      color #ff9900
      font-size 24px
    .rate1
      font-weight normal
      font-size 12px
      color #07111b
      margin-bottom 8px
    .rate2 
      font-weight normal 
      line-height: 10px
      font-size: 10px
      color: #93999f
  .rating-first-right
    width 260px
    margin-top 20px
    padding 6px 0 6px 24px
    .taidu
      margin-bottom 8px
      .taidu-a
        display: inline-block;
        line-height: 18px;
        vertical-align: top;
        font-size: 14px;
        color: #07111b;
        // font-weight bold
      .score
        display: inline-block;
        line-height: 18px;
        vertical-align: top;
        font-size: 14px;
        color: #f90;
      .star
        display inline-block
.rating-second
  width: 100%;
  height: 16px;
  border-top: 1px solid rgba(7,17,27,.1);
  border-bottom: 1px solid rgba(7,17,27,.1);
  background: #f3f5f7;
.rating-third
  .rating-third-1
    // border 1px solid #000
    margin 20px
    .blue
      background blue
      margin 5px
      padding 10px
      font-size 15px
      color #ffffff
      border-radius 5%
    .black
      background black
      margin 5px
      padding 10px
      font-size 15px
      color #ffffff
      border-radius 5%
  .rating-third-2
    padding-left 10px
    height 35px
    width 100%
    // margin 30px
    border-bottom 1px solid rgba(7,17,27,0.2)
    line-height 35px
    .third-2
      .img1
        width 17px;
        height 17px
.rating-forth
  padding 0 18px
  font-weight normal
  .rating-item
    display flex
    padding 18px 0
    position relative
    .avator
      flex 0 0 28px
      width 28px
      margin-right 12px
      img
        border-radius 50%
    .content
      position relative
      flex 1
      .name
        margin-bottom 4px
        line-height 12px
        font-size 10px
        color #07111b
      .star-wrapper
        margin-bottom 6px
        font-size 0
        .delivery
          display inline-block
          vertical-align top
          line-height 12px
          font-size 10px
          color #93999f
        .star
          display inline-block
      .text
        margin-bottom 8px
        line-height 18px
        color #07111b
        font-size 12px
      .recommend
        .icon-thumb_up
          color #00a0dc
        .item
          padding 0 6px
          border 1px solid rgba(7,17,27,.1)
          border-radius 1px
          color #93999f
          background #fff





</style>