// pages/video/video.js
// let half;
let width
Page({

  /**
   * 页面的初始数据
   */
  data: {
    headerList:[{id:0,name:'内地'},{id:1,name:'港台'},{id:2,name:'欧美'},{id:3,name:'韩国'},{id:4,name:'日本'}],
    circular:true,
    slideOffset:null,
    mvList:[],
    Area:'内地'
  },
  changeline(e) {
    // let width;
    console.log(e)
    let current = e.detail.current;
    let area = e.detail.currentItemId
    // console.log(area)
    this.setData({
      Area:area
    })
    // console.log(this.data.Area)
    if(current === 0){
      this.setData({
        slideOffset:0
      })
    }
    if(current === 1){
      this.setData({
        slideOffset:150
      })
    }if(current === 2){
      this.setData({
        slideOffset:300
      })
    }if(current === 3){
      this.setData({
        slideOffset:450
      })
    }if(current === 4){
      this.setData({
        slideOffset:600
      })
    }
  },
  goMv(e) {
    console.log(e.currentTarget.dataset)
    var ID = e.currentTarget.dataset.id
    wx.navigateTo({
      url:`../videoPlay/videoPlay?id=${ID}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    // console.log(that.data.Area)
    var areaName = that.data.Area
    console.log(areaName)
    wx.request({
      url:'http://neteasecloudmusicapi.zhaoboy.com/top/mv',
      data:{
        limit:30,
        area:areaName
      },
      success:function(res){
        console.log(res.data.data)
        that.setData({
          mvList:res.data.data,

        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})