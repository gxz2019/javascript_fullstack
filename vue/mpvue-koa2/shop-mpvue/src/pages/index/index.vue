<template>
  <div class="index">
    <div class="search"> 
      <div @click="toMappage">{{cityName}}</div>
      <div>
        <input type="text" placeholder="搜索商品">
        <span class="icon"></span>
      </div>
    </div>
  </div>
</template>

<script>
import amapFile from '../../utils/amap-wx'
export default {
  data() {
    return {
      cityName:'南昌'
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
    }
  }
}
</script>

<style lang="less" scoped>
@import  "./style.less";
</style>