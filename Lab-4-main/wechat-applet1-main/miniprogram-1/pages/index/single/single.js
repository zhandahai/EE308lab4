var Arr=[];
var Arr1=[];
var x=1;
Page({
  
    
back1:function(){
  wx.navigateTo({
    url: '/pages/index/srule/srule'
  })
},


  /**
   * 页面的初始数据
   */
  data: {
    num1:1,
    num2:2,
    num3:3,
    num4:4,
    num5:5,
    num6:6,
  },
  handletap(e)
  {
      var result = 12,rank=13;
      const operation1=Math.floor(Math.random()*6+1);
      const operation2=Math.floor(Math.random()*6+1);
      const operation3=Math.floor(Math.random()*6+1);
      const operation4=Math.floor(Math.random()*6+1);
      const operation5=Math.floor(Math.random()*6+1);
      const operation6=Math.floor(Math.random()*6+1);
      var dice = [operation1,operation2,operation3,operation4,operation5,operation6];
      //console.log(operation);
      this.setData({
      num1:operation1*1,
      num2:operation2*1,
      num3:operation3*1,
      num4:operation4*1,
      num5:operation5*1,
      num6:operation6*1,
      });
      var i,a1=0,a2=0,a3=0,a4=0,a5=0,a6=0;
      for(i=0;i<6;i++) {
        if(dice[i]===1) a1++;
        if(dice[i]===2) a2++;
        if(dice[i]===3) a3++;
        if(dice[i]===4) a4++;
        if(dice[i]===5) a5++;
        if(dice[i]===6) a6++;
      }
      
      
      if(a4===4&&a1===2) result=0,rank=1;
      if(a4===6) result=1,rank=2;
      if(a1===6) result=2,rank=3;
      if(a6===6) result=3,rank=4.1;
      if(a5===6) result=3,rank=4.2;
      if(a3===6) result=3,rank=4.3;
      if(a2===6) result=3,rank=4.4;
      if(a4===5) result=4,rank=5;
      if(a6===5) result=5,rank=6.1;
      if(a5===5) result=5,rank=6.2;
      if(a3===5) result=5,rank=6.3;
      if(a2===5) result=5,rank=6.4;
      if(a1===5) result=5,rank=6.5;
      if(a4===4&&a1<2) result=6,rank=7;
      if(a1===1&&a2===1&&a3===1&&a4===1&&a5===1) result=7,rank=8;
      if(a4===3) result=8,rank=9;
      if(a6===4) result=9,rank=10.1;
      if(a5===4) result=9,rank=10.2;
      if(a3===4) result=9,rank=10.3;
      if(a2===4) result=9,rank=10.4;
      if(a1===4) result=9,rank=10.5;
      if(a4===2&&result===12) result=10,rank=11;
      if(a4===1&&result===12) result=11,rank=12;
      
    
      
      var context = ["状元：状元插金花","状元：六杯红","状元：遍地锦","状元：六杯黑","状元：五王","状元：五子登科","状元：状元","榜眼：对堂","探花：三红","进士：四进","举人：二举","秀才：一秀","直接白给"];
      wx.showToast({  
        
      title: context[result],
        
        icon:'none',
        confirmColor:"red",  
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