const app = getApp()

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo')
    },

    onLoad(options) {
        wx.setNavigationBarTitle({
            title: '情深深雨蒙蒙'
        })
    }

});
