// pages/login/login.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
      current:1,
      codeText:'获取验证码',
      counting:false,
      userInfo: {},
    },
    getinfo: function () {
        wx.getUserProfile({
          desc: '完善用户信息',
          success: (res) => {
            //console.log(res)
            var userInfo = res.userInfo;
            this.setData({
              userInfo: userInfo,
            });
            wx.switchTab({
              url: '/pages/me/me',
            })
          },
          
        });
      },
      
    // 登陆注册监听
    click(e){
      let index = e.currentTarget.dataset.code;
      this.setData({
        current:index
      })
    },
    //获取验证码 
    getCode(){
      var that = this;
      if (!that.data.counting) {
        wx.showToast({
          title: '验证码已发送',
        })
        //开始倒计时60秒
        that.countDown(that, 60);
      } 
    },
    //倒计时60秒
    countDown(that,count){
      if (count == 0) {
        that.setData({
          codeText: '获取验证码',
          counting:false
        })
        return;
      }
      that.setData({
        counting:true,
        codeText: count + '秒后重新获取',
      })
      setTimeout(function(){
        count--;
        that.countDown(that, count);
      }, 1000);
    },

    gotohome(){
        wx.switchTab({
          url: '/pages/home/home',
        })
    },
    onUnload: function() {
        // 获取需要存储的数据
        const data = { userInfo: this.data.userInfo };
        // 将数据存储到本地
        wx.setStorageSync('myData', data);
        //console.log(data)
      }
  })