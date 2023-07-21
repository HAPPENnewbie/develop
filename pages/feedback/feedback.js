// pages/feedback/feedback.js
// index.js
Page({
  data: {
    tag: '', // 当前选中的意见类型
    feedback: '' // 用户意见反馈内容
  },
  selectTag(event) {
    const selectedTag = event.currentTarget.dataset.tag;
    this.setData({
      tag: selectedTag
    });
  },
  bindFeedbackInput(event) {
    this.setData({
      feedback: event.detail.value
    });
  },
  submitFeedback() {
    const { tag, feedback } = this.data;
    if (tag && feedback) {
      // 在这里可以将用户的意见反馈发送给后端进行处理，比如通过接口发送给服务器或存储在数据库中

      // 在这里可以添加逻辑，例如显示提交成功的提示信息或清空表单内容
      // 可以使用 wx.showToast() 或者自定义弹窗来显示提示信息

      // 清空表单内容
      this.setData({
        tag: '',
        feedback: ''
      });
    }
  }
});

