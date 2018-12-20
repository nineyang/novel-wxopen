const app = getApp()

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        value: "hello"
    },

    onSearch(event) {
        console.log(event);
    },

    onCancel(event) {
        console.log(event);
    }
});
