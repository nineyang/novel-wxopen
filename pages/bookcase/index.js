const app = getApp()

Page({
    data: {
        "icon": "edit",
        "showRemove": false
    },

    onEdit() {
        let icon = "edit", show = false;
        if (this.data.icon == "edit") {
            icon = "success";
            show = true;
        }
        this.setData({
            "icon": icon,
            "showRemove": show
        })
    },
});
