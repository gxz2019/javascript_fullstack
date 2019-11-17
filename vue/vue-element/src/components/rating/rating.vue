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
          <div class="star">
              <span>
                
              </span>
          </div>
          <span class="score">{{seller.serviceScore}}</span>
        </div>
        <div class="taidu">
          <span class="taidu-a">商品评分</span>
          <div class="star"></div>
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
        <span class="third-1">全部24</span>
        <span class="third-1">满意18</span>
        <span class="third-1">不满意6</span>
      </div>
      <div class="rating-third-2">
        <span class="third-2">✔</span>
        <span class="text">只看有内容的评价</span>
      </div>
    </div>
    <!-- 第四部分 -->
    <div class="rating-forth">
      <ul>
        <li>
          <div class="avator">
            <img src="" alt="" width="28" height="28">
          </div>
          <div class="content">
            <h1 class="name">3****c</h1>
            <div class="star-wrapper">
              <div class="star star-24"></div>
              <span class="delivery">30</span>
            </div>
            <p class="text">不错，好喝都是大大大苏打大苏打实打实大的撒</p>
            <div class="recommend">
              <span class="icon-thumb_up"></span>
              <span class="item">南瓜粥</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import ElementUI from 'element-ui';
export default {
  name: "Rating",
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      ratings: []
    };
  }
};
</script>

<style lang="stylus" scoped>
.rating-first
  display flex 
  border-bottom 1px solid rgba(7, 17, 27, 0.1)
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
    .third-1
      background #00a0dc
      margin 5px
      padding 10px
      font-size 15px
      color #ffffff
      border-radius 5%
  .rating-third-2
    margin 40px 25px
    // border 1px solid #000

</style>