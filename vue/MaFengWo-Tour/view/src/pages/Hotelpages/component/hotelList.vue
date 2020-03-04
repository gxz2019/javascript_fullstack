<template>
  <div class="hotelList">
    <div class="hotelList-content">
      <div class="img">
        <img src="@/assets/images/youji1.png" alt="">
      </div>
      <div class="title">
        <div>
          <h3>杭州马可波罗酒店</h3>
        </div>
        <div class="title1">
          <span>dasdasdas</span>
        </div>
        <div class="title2">
          20333蜂评,5游记提及
        </div>
        <div class="money">
          <strong style="color: #F94226">￥571</strong><span style="font-size:0.8rem">起</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
 .hotelList{
   width: 100%;
   height: 100%;
   color: #474747;
   .hotelList-content{
     width: 90%;
     height: 8rem;
     margin: 0 auto;
     display: flex;
     margin-top: 1rem;
     position: relative;
     img{
       background-color: black;
       width: 6.2rem;
        margin-right: 1rem;
     }
     .title{
       &:nth-child(1) {
         overflow: hidden;
         white-space: nowrap;
         text-overflow: ellipsis;
         margin-bottom: 0.2rem; 
       }
       .title1 {
         font-size: 1rem;
       }
       .title2{
         font-size: 0.85rem
       }
       .money {
         
        font-size: 1.3rem;
        float: right;
        position: absolute;
        right: 0;
        bottom: 1.48rem;
       }
     }
   }
 }
</style>