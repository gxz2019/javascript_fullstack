<template>
  <div class="index">
    <div class="search"> 
      <div @click="toMappage">{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品">
        <span class="icon"></span>
      </div>
    </div>
    <div class="swiper">
      <swiper class="swiper-container" indicator-dots="true" autoplay="true" interval="3000" circular="true" duration="500">
        <block v-for="(item, index) in banner" :key="index">
          <swiper-item class="swiper-item">
            <image class="slide-image" :src="item.image_url"/>
          </swiper-item>
        </block>
      </swiper>
    </div>
  </div>
</template>

<script>
import amapFile from '../../utils/amap-wx'
import {mapState} from 'vuex'
import { get } from '../../utils/index'
export default {
  data() {
    return {
      banner:[]
    }
  },
  methods:{
    toMappage() {
      //通过wx.getSetting 先查询用户是否授权""scoped.record"
      let _this = this
      wx.getSetting({
        success: (res) => {
          //如果没有同意授权，打开设置
          console.log(res)
          if(!res.authSetting['scope.userInfo']) {
            wx.openSetting({
              success: (res) => {
                //获取位置信息
                _this.getCityName()
              },
            });            
          }else{
            wx.navigateTo({             
              url:'/pages/mappage/main'
            });
            // _this.getCityName()
          }
        },
        fail: (err) => {
          console.log(err)
        },
        complete: () => {}
      });
        
    },
    getCityName() {
      let _this = this
      var myAmapFun = new amapFile.AMapWX({key:'b69fa42f707e033a718d666cc5ee4c2e'});
      myAmapFun.getRegeo({
        success:function(data) {
          console.log(data,'-----')
        },
        fail:function(info) {
          //失败回调
          console.log(info,'11111')
          _this.cityName = '北京'
        }
      })
    },
    async getData() {
      const data = await get('/index/index') //http://localhost:5757/lm/index/index
      console.log(data)

    } 
  },
  computed:{
    ...mapState(['cityName'])
  }
}
</script>

<style lang="less" scoped>
@import  "./style.less";
</style>