Page({
    data: {
        active: 0
    },

    onChange(event) {
        wx.showToast({
            title: `切换到标签 ${event.detail.index + 1}`,
            icon: 'none'
        });
    }
});
