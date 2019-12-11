// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    show:false,
    hotDetail:[],
    searchList:[]
  },
  // searchValue(e) {
  //   // console.log(e.detail.value)
  //   this.setData({
  //     title: e.detail.value
  //   })
  // },
  clearInput() {
    this.setData({
      title:''
    })
  },
  goToback() {
    wx.navigateBack({
      url:'/pages/a/a'
    })
    this.setData({
      title:''
    })
  },
  goToSong(e) {
    let ID = e.currentTarget.dataset.id;
    console.log(ID);
    wx.navigateTo({
      url:`/pages/b/b?id=${ID}`
    })
  },

  //请求热搜
  getHotDetail(){
    let that = this
    wx.request({
      url:'http://musicapi.leanapp.cn/search/hot/detail',
      header:{
        'content-type':'application/json'
      },
      success:function (res){
        // console.log(res.data.result.hots)
        // console.log(that.hotDetail)
        if(res.data.code === 200) {
          that.setData({
            hotDetail:res.data.result.hots
          })
        } 
       
      }
    })
  },
  //请求搜索结果
  getHot:function(e) {
    // let limit = 50;
    let that = this
    console.log(e.detail.value)
    that.setData({
      title:e.detail.value
    })
    wx.request({
      url:'http://neteasecloudmusicapi.zhaoboy.com/search',
      header: {
        'content-type': 'application/json'
      },
      data:{
        keywords:e.detail.value,
      },
      success:function(res) {
        console.log(res.data)
         that.setData({
          searchList:res.data.result.songs
         })
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getHotDetail()
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
    // console.log(this.searchList)

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