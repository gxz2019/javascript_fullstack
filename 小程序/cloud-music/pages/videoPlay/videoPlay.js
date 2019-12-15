// pages/videoPlay/videoPlay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    MvList:{},
    MvUrl:{},
    show:false
  },
  showP(){
    this.setData({
      show:!this.data.show
    })
    console.log(this.data.show)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id
    console.log(id)
    wx.request({
      url:'http://neteasecloudmusicapi.zhaoboy.com/mv/detail',
      data:{
        mvid:id
      },
      success:function(res) {
        console.log(res.data.data)
        var resData = res.data.data
        var mvUrl = res.data.data.brs
        that.setData({
          MvList:resData,
          MvUrl:mvUrl["720"]
        })
      }
    })
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