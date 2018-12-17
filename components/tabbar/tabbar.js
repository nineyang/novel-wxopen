/**
 * created by Nine on 2018/12/17.
 */

'use strict';

Component({
    properties: {
        active: String
    },
    data: {
        wordMapper: {
            "bookcase": 0,
            "books": 1,
            "search": 2,
            "home": 3
        },
        numMapper: ["bookcase", "books", "search", "home"]
    },
    pageLifetimes: {
        show() {
        },
    },
    methods: {
        onChange(event) {
            let url = this.data.numMapper[event.detail];
            wx.navigateTo({
                url: '../../pages/' + url + '/index'
            })
        }
    }

});