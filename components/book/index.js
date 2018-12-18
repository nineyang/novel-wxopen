/**
 * created by Nine on 2018/12/17.
 */

'use strict';

import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';

Component({
    properties: {
        showRemove: Boolean
    },
    data: {
        showConfirm: false
    },
    pageLifetimes: {
        show() {
        },
    },
    methods: {
        onRemove(event) {
            this.setData({
                showConfirm: true
            });
        },

        onClose(event) {
            if (event.detail === 'confirm') {
                // 异步关闭弹窗
                setTimeout(() => {
                    this.setData({
                        showConfirm: false
                    });
                }, 1000);
            } else {
                this.setData({
                    showConfirm: false
                });
            }
        }
    }

});