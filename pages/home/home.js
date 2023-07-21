// pages/home/home.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        name:"张三",
        age:20,
        imgUrl: "/images/dsp.jpg",
        userInfo: null,
        indicatorDots:true,
        autoplay:true,
        current:0,
        interval:5000,
        duration:1000,
        images:['/images/bar1.png',
                '/images/bar2.jpg',
                '/images/bar3.png']
    },
    //自定义方法
    gotoChat(){
       // 判断用户登录状态
    const data = wx.getStorageSync('myData');
    if (!data || !data.userInfo) {
        wx.navigateTo({
          url: '/pages/login/login',
        })
      return;
    }
    // 跳转到聊天页面
    wx.switchTab({
      url: '/pages/chat/chat',
    })
      },
})