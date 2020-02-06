<template>
  <div class="mappage">
    <div class="section">
      <input type="text" placeholder="搜索"  @input="bindInput">
    </div>
    <scroll-view :scroll-y="true" class="addcont" style="height:500rpx">
      <div class="result" v-for="(item,index) in tips" :key="index" @click="getResult(item.name)">
        {{item.name}}
      </div>
    </scroll-view>
    <div class="map_container">
      <div class="title">显示当前位置:</div>
      <map class="map" id="map" name="" scale="16" :longitude="longitude" 
      :latitude="latitude" :markers="markers"></map>
    </div>
  </div>
</template>

<script>
import amapFile from '../../utils/amap-wx';
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      tips:[],
      longitude:0,
      latitude:0,
      markers:[],
      keywords:''
    }
  },
  mounted() {
    this.getMapaddress()
  },
  methods:{
    ...mapMutations(['update']),
    getMapaddress() {
      let _this = this
      var myAmapFun = new amapFile.AMapWX({
        key:'b69fa42f707e033a718d666cc5ee4c2e'
        });
      myAmapFun.getRegeo({
        iconPath:"/static/images/marker.png",
        iconWidth:22,
        iconHeight:32,
        success:function(data) {
          // console.log(data)
          let marker = [
            {
              id:data[0].id,
              latitude:data[0].latitude,
              longitude:data[0].longitude,
              width:data[0].width,
              height:data[0].height,
            }
          ]
          _this.markers = marker;
          _this.longitude = data[0].longitude;
          _this.latitude = data[0].latitude;
          // _this.width = data[0].width;
          // _this.height = data[0],height
        },
        fail:function (info) {
          console.log(info)
        } 
      })
    },
    bindInput(e) {
      // console.log(e.mp.detail.value)
      var _this = this;
      _this.keywords = e.mp.detail.value
      var myAmapFun = new amapFile.AMapWX({key:'b69fa42f707e033a718d666cc5ee4c2e'});
      myAmapFun.getInputtips({
        keywords:_this.keywords,
        success:function (data) {
          // console.log(data.tips)
          _this.tips = data.tips
        }
      })
    },
    getResult(cityName) {
      this.update({cityName:cityName})
      wx.navigateBack({
        delta: 1
      });
        console.log(cityName)
    }
  }
}
</script> 

<style lang="less" scoped>
@import "./style.less";
</style>