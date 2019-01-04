const app = getApp()

Page({
    data: {
        tabs: {
            'clicks': '点击榜',
            'sells': '销售榜'
        }
    },
    onLoad(options) {
        wx.setNavigationBarTitle({
            title: this.data.tabs[options.tab]
        })
    }

});
