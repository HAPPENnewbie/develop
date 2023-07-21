// pages/me/me.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    isHiddenToast:true,
    current: 1,
    codeText: '获取验证码',
    counting: false,
    userInfo: {},
    mydata:{
        nickName: '',
      avatarUrl: '',
    }
  },

  /**
   * 获取用户信息并保存至本地存储和页面数据中
   */

  gotologin(){
    wx.navigateTo({
        url: '/pages/login/login',
      })
  },
  onShow: function() {
    // 获取本地存储的数据
    const data = wx.getStorageSync('myData');
    if (data && data.userInfo) {
        this.setData({
            'mydata.nickName': data.userInfo.nickName,
            'mydata.avatarUrl': data.userInfo.avatarUrl,
          });
        
    }
  },
  // 退出登录
  onLogout: function () {
    wx.showModal({
      title: '提示',
      content: '确定退出登录吗？',
      success: (res) => {
        if (res.confirm) {
          // 删除本地存储中的用户信息
          wx.removeStorageSync('myData');
          // 清空页面数据
          this.setData({
            'mydata.nickName': '',
            'mydata.avatarUrl': '',
          });
          // 返回首页
         wx.navigateTo({
           url: '/pages/me/me',
         })
        }
      }
    });
  },
  gotoHelp(){
    wx.navigateTo({
      url: '/pages/feedback/feedback',
    })
  },

  gotoService(){
    wx.navigateTo({
      url: '/pages/service/service',
    })
  },

  gotoMyteam(){
    wx.navigateTo({
      url: '/pages/myteam/myteam',
    })
  },

  isShowToast:function(){
    this.setData({
      isHiddenToast:false
    })
  },
  toastChange:function(){
    this.setData({
      isHiddenToast:true
    })
  },
})