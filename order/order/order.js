// order/order/order.js
const app=getApp()
console.log(app.globalData.test)
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mz: "商城",
    count: 0
  },
  handlegetUser(event){
    console.log(event.detail.userInfo)
  },
  anniu() {
    if (this.data.count % 2 == 0) {
      this.setData({
        mz: "啊啊啊"
      })
      count: this.data.count += 1
      console.log(this.data.count)
    } else {
      this.setData({
        mz: "商城"
      })
      count: this.data.count += 1
      console.log(this.data.count)
      if (this.data.count == 10) {
        this.setData({
          count: this.data.count == 0
        })
      }
    }

  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {


  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {


  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
    console.log("商城转发")

  }
})