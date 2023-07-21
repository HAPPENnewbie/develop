// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    menu:["项目","文件","编辑"],
    menu2:[["新建","导入","查看"],["保存","另存为","全部保存"]],
    names1:{
        name:"张三",
        age:20,
        sex:"男"
    },
    names2:[{
        name:"李四",
        age:"21",
        sex:"男"
    },
    {
        name:"小红",
        age:"18",
        sex:"女"
    }],
    flag:false,
    count:0,
    userInfo:{
        id:888888,
        nike:"昵称",
        imgUrl:"/images/me1.png"
    },
  },
  //自定义函数
    getDetail(){
        wx.navigateTo({
        url: '/pages/detail/detail',
        success: (res) => {
            // 通过eventChannel向被打开页面传送数据
            res.eventChannel.emit('acceptDataFromOpenerPage', { data: this.data.userInfo })
          }
        })
    },

    onLoad(options) {
       
    },
})

