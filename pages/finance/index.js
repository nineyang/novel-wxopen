const app = getApp()

Page({
    data: {
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        type: 'payout',
        mapper: {
            payout: 0,
            income: 1
        }
    },

    onLoad(options) {
        this.setData({
            type: options.type
        })
    },

    onChange(event) {
        console.log(event);
    }

});
