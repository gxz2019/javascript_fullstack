
const audioPlay = wx.createInnerAudioContext()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    curTimeVal:0,
    duration:0,
    songUrl:[],
    audioRul:'',
    songdata:{},
    songAuthor:{},
    songpicList:{},
    show:true
  },
  play(e) {
    var that = this;
    audioPlay.play();
    // audioPlay.src = that.audioRul;
    // audioPlay.autoplay = true;
    audioPlay.onPlay((res) => {
      that.updataTime(that)
    });
    that.setData({
      show:!that.data.show
    })
  },
  pause(){
    var that = this
    audioPlay.pause();
    that.setData({
      show: !that.data.show
    })
  },
  updataTime:function(that) {
    audioPlay.onTimeUpdate((res) => {
      console.log('duration的值',audioPlay.duration)
      // console.log('curTimeVal的值',curTimeVal)
      that.setData({
        duration:audioPlay.duration,
        curTimeVal:audioPlay.currentTime
      })
    })
    if((audioPlay.duration - audioPlay.curTimeVal) <= 0){
      that.setStop(that)
    }
    audioPlay.onEnded(() => {
      that.setStopState(that)
      })
  },
  setStop(that) {
    that.setData({
      curTimeVal:0
    })
  },
  slideBar(e) {
    let that = this;
    var curval = e.detail.value;
    console.log(curval)
    audioPlay.seek(curval);
    audioPlay.onSeeked(res => {
      this.updataTime(that)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var Id = options.id
    console.log(options)
    wx.request({
      url:'http://neteasecloudmusicapi.zhaoboy.com/song/url',
      data:{
        id : Id
      },
      success:function(res) {
        console.log(res.data.data)
        var resdata = res.data.data
        var audioRul = resdata[0].url
        console.log(audioRul)
        if(res.data.code === 200) {
          that.setData({
            songUrl:res.data.data,
            audioRul:audioRul
          })
        }
        audioPlay.src = audioRul;
        // audioPlay.pause();
    audioPlay.autoplay = false;
      }
    })
    // audioPlay.src = that.audioRul;
    // audioPlay.autoplay = true;
    wx.request({
      url:'http://neteasecloudmusicapi.zhaoboy.com/song/detail',
      data:{
        ids:Id
      },
      success:function(res){
        // console.log(res.data.songs)
        var songsData = res.data.songs;
        console.log(songsData[0])
        var songauthor = (songsData[0]).ar
        console.log(songauthor)
        var songPic = songsData[0].al
        console.log(songPic)
        if(res.data.code === 200){
          that.setData({
            songdata:songsData[0],
            songAuthor:songauthor[0],
            songpicList:songPic
          })
        }
      }
    })
    // that.play()
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