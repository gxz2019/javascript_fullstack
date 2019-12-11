// pages/tuijiangedan/tuijiangedan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // idlist:NaN
    dataList:{},
    songList:[]
  },
  goSong(e) {
    // console.log(e)
    // console.log()
    let I_D = e.currentTarget.dataset.id;
    console.log(I_D)
    wx.navigateTo({
      url:`/pages/b/b?id=${I_D}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var Id = options.id
    console.log(Id)
    // that.setData({
    //   idlist:Id
    // })
    // console.log(that.tujianList)
    // console.log()
    wx.request({
      url:'http://neteasecloudmusicapi.zhaoboy.com/playlist/detail',
      data:{
        id : Id
      },
      success:function(res){
        console.log(res.data.playlist.tracks)
        if(res.data.code === 200){
          that.setData({
            dataList:res.data.playlist,
            songList:res.data.playlist.tracks
          })
        }
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