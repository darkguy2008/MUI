// http://www.webdesignerdepot.com/2013/03/how-to-manage-the-back-button-with-javascript/

// ###################################################################
// MOBILE UI
// ###################################################################

;var MUI = Class.extend({

    _init: function () {
        this.plugins = [];
        this.chainReady = [];
    },

    Init: function () {
        var self = this;
        if (this.plugins)
            this.plugins.forEach(function (p) { if (p.Init) { p.Init(self); } });
    },

    Register: function (p) {
        this.plugins.push(p);
    },

    Resize: function () {
        var self = this;
        if (this.plugins)
            this.plugins.forEach(function (p) { if (p.Resize) { p.Resize(self); } });
    },

    GetPlugin: function (name) {
        return this.plugins.filter(function(p) { return p.Name == name; })[0];
    },

    Ready: function(f) {
        this.chainReady.push(f);
    }

});
window.mui = window.mui || new MUI();

$(document).ready(function () {
    mui.Init();
    if(mui.chainReady != null && mui.chainReady.length > 0)
        mui.chainReady.forEach(function (f) { f(); });
});

$(window).load(function () {
    mui.Resize();
});

$(window).resize(function () {
    mui.Resize();
});

$(window).scroll(function () {
    mui.Resize();
});
