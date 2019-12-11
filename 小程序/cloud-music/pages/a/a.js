// pages/a/a.js

// const app = getApp()
// const change = require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner:[],
    hastaste:[],
    indicatorDots:true,
    indicatorcolor:'#ffffff',
    indicatoractivecolor:'#DC4238',
    autoplay:true,
    interval:3000,
    duration:800,
    circular:true
  },
  goToSearch() {
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  goto:function(e){
    console.log(e)
    const ID = e.currentTarget.dataset.id;
    // const ITEM = e.currentTarget.dataset.item
    wx.navigateTo({
      url:`/pages/tuijiangedan/tuijiangedan?id=${ID}`
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner()
    this.getHastaste()
    
  },
  getBanner(){
    let that = this
    wx.request({
      url: 'http://neteasecloudmusicapi.zhaoboy.com/banner',
      header:{
        'content-type':'application/json'
      },
      success: function (res) {
        // console.log(res);
        if (res.data.code == 200) {
          that.setData({
            banner: res.data.banners
          })
        }
      }
    })
  },
  getHastaste(){
    let that = this
    wx.request({
      url: 'https://netease.lzcdev.xyz/personalized?limit=6',
      header: {
        'content-type': 'application/json'
      },
      success:function(res){
        if(res.data.code == 200){
        that.setData({
          hastaste: res.data.result
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