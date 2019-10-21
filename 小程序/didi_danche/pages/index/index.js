Page({
  data:{
    markers:[],
    longitude:115.823207,//经度
    latitude:28.734118,//纬度
    scale:18

  },
  onLoad(){
    //生命周期函数,微信赋予小程序可以调用的API
    wx.showLoading({
      title:'获取坐标中',
    });
    //获取手机的GPS
    wx.getLocation({
      type:'gcj02',
      success:(res) => {
        let { longitude,latitude} = res;
        this.tocreateMarkers(longitude,latitude)
        this.setData({
          longitude,
          latitude
        },() =>{
          wx.hideLoading();
        })
      }
    });
      
  },
  onReady(){
    // 地图上下文环境对象
    this.mapCtx = wx.createMapContext('myMap');
      
  },
  toVisit(e){

  },
  toScan(){
    return wx.scanCode({
      success:(res) =>{
        wx.showModal({
          title:'scan',
          content:JSON.stringify(res)
        })
      }
    })
  },
  toUser(){

  },
  toMsg(){

  },
  toReset(){
    // 当你使用地图来来去去的时候，你需要再回到当初的地点
    this.mapCtx.moveToLocation();
    this.setData({
      scale:18
    })
  },
  tocreateMarkers(longitude,latitude){
    let markers = [
      {
        "id":1,
        'iconPath':"/images/map-bicycle.png",
        'latitude':latitude,
        'longitude':longitude,
        'width':52.5,
        'height':30,
        'callout':{}
      }
    ]
    this.setData({
      markers
    });
  }
})