// 简单版
// 获取当前时间
var date = new Date();
var month = date.getMonth() + 1;
var day = date.getDate();
var hour = date.getHours();
var minu = date.getMinutes();
var now1 = month < 10 ? '0' + month : month;
var now2 = day < 10 ? '0' + day : day;
Page({
  data: {
    content: '',
    // 当前登录者信息
    login: {
      id: '2023',
      user: 'hayden',
      avatar: '/images/me/userIcon2.jpg'
    },
    // 聊天信息
    chatList: [{
      msgId: '2022',
      nickname: 'AI聊天助手',
      avatar: '/images/robot.png',
      message: '您好，请问有什么可以帮您的？',
      type: 'text',
      date: now1 + '-' + now2 + ' ' + hour + ':' + minu 
    }]
  },
  onLoad() {
    this.scrollToBottom();
  },
  // 输入监听
  inputClick(e) {
    // console.log(e.detail.value)
    this.setData({
      content: e.detail.value.trim()
    })
  },
  // 发送监听
  sendClick() {
    var that = this;
    // var list = this.data.chatList;


    // 组装数据
    var msg = {
      msgId: that.data.login.id,
      nickname: that.data.login.user,
      avatar: that.data.login.avatar,
      message: that.data.content,
      type: 'text',
      date: now1 + '-' + now2 + ' ' + hour + ':' + minu
    }
    that.setData({
      chatList: that.data.chatList.concat(msg)
    }, () => {
      that.scrollToBottom();
      that.setData({
        content: ''
      })
    })
    // 调用后端 API 接口
    wx.showLoading({
      title: '正在加载',
      mask: true,
    });
    // 请求chatgpt接口
    wx.request({
      url: 'http://47.243.84.92:9901/system/chat/chat',
      method: "POST",
      data: {
        "role": "user",
        "content": that.data.content
      },
      success: (res) => {
        // console.log(res)
        wx.hideLoading();
        let data = res.data.choices[0].message.content
        var newMsg = {
          msgId: '2022',
          nickname: 'AI聊天助手',
          avatar: '/images/robot.png',
          message: data,
          type: 'text',
          date: now1 + '-' + now2 + ' ' + hour + ':' + minu
        }
        this.setData({
          chatList: that.data.chatList.concat(newMsg)
        }, () => {
          console.log(that.data.chatList)
          that.scrollToBottom();
          that.setData({
            content: ''
          })
        })
      },
      fail: () => {
        wx.hideLoading();
        wx.showToast({
          title: '出错了，请稍后再试',
          icon: 'none',
        });
      }
    })

  },
  // 滑动到最底部
  scrollToBottom() {
    setTimeout(() => {
      wx.pageScrollTo({
        scrollTop: 200000,
        duration: 3
      });
    }, 600)
  }
})