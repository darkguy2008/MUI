var muiPage = Class.extend({

    _init: function () { this.Name = "page"; this._firstRun = true; },

    Init: function (m) {
        var self = this;

        $("button[data-action='appBack']").click(function () {
            history.back();
            return false;
        });

        if (location.hash.length == 0 || this._firstRun == true) {
            var idPage = location.hash.length == 0 ? "main" : location.hash.replace("#", "");
            var page = $("div[data-role='page'][data-id='" + idPage + "']");
            page.css("left", "0");
            page.attr("data-active", "true");
            if (page.attr("data-id") != "main") { $("button[data-action='appBack']").show(); } else { $("button[data-action='appBack']").hide(); }
            mui.Resize();
        }
        else
            this.Refresh();

        window.onhashchange = mui.GetPlugin("page").Refresh;
    },

    Refresh: function () {
        this._firstRun = false;
        var speed = this._quick == undefined ? 500 : 0;
        var idPage = location.hash.length == 0 ? "main" : location.hash.replace("#", "");
        var page = $("div[data-role='page'][data-id='" + idPage + "']");
        var pageOld = $("div[data-role='page'][data-active='true']");
        page.css("left", "100%");
        pageOld.css("left", "0");
        pageOld.removeAttr("data-active");
        pageOld.animate({ "left": "-100%" }, speed);
        page.animate({ "left": "0" }, speed, function () {
            page.attr("data-active", "true");
            if (page.attr("data-id") != "main") { $("button[data-action='appBack']").show(); } else { $("button[data-action='appBack']").hide(); }
            mui.Resize();
            mui.GetPlugin("nav").Close();
        });
        this._quick = undefined;
    }

});
mui.Register(new muiPage());
