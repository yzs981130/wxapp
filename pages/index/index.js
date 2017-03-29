//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    sigma:'',
    mu:'',
    X:'',
    ans:'',
    phi:'',
    btn_display:'none',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  setSigma: function(e){
    this.setData({
      sigma:e.detail.value
    })
  },
  setMu: function(e){
    this.setData({
      mu:e.detail.value
    })
  },
  setX: function(e){
    this.setData({
      x:e.detail.value
    })
  },
  cal: function(){
    let sigma = parseFloat(this.data.sigma);
    let mu = parseFloat(this.data.mu);
    let x = parseFloat(this.data.x);

    let ex = -Math.pow(x-mu, 2)/(2*sigma*sigma);
    let right = Math.exp(ex);
    let left = 1.0/(sigma*2.50662827463);

    let result = left*right;
    this.setData({
      ans:result
    })
    console.log(this.data.ans);

    let a1 =  0.254829592;
    let a2 = -0.284496736;
    let a3 =  1.421413741;
    let a4 = -1.453152027;
    let a5 =  1.061405429;
    let p  =  0.3275911;
    let sign = 1;
    if(x < 0){
      sign = -1;
    }
    x = Math.abs(x)/Math.sqrt(2);
    let t = 1.0/(1.0 + p*x);
    let y = 1.0 - (((((a5*t + a4)*t) + a3)*t + a2)*t + a1)*t*Math.exp(-x*x);
    let ansphi = 0.5*(1.0 + sign*y);
    this.setData({
      phi:ansphi
    })
    console.log(this.data.phi);

    this.setData({
      btn_display:"block"
    })
  },

  
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
