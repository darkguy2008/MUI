var muiLoading = Class.extend({

    _init: function () { this.Name = "loading"; },

    Init: function (m) {

        var self = this;
        this.mask = $("<div></div>");
        this.mask.attr("class", "loading mask");
        this.mask.appendTo("body");
        this.mask.hide();

        this.dialog = $("<div></div>");
        this.dialog.attr("class", "loading");
        this.dialog.appendTo("body");
        this.dialog.hide();
        $("<table><tr><td/><td/><td/></tr><tr><td/><td class='wrapper'><div class='window'></div></td><td/></tr><tr><td/><td/><td/></tr></table>").appendTo(this.dialog);

        mui.Loading = this;
    },

    Show: function (text, callback) {
        var self = mui.GetPlugin("loading");
        var dlg = self.dialog.find(".window");
        dlg.empty();

        var img = $('<div/>');
        img.attr("class", "img");
        img.appendTo(dlg);

        var p = $('<p></p>');
        p.html(text);
        p.appendTo(dlg);

        self.mask.show();
        self.dialog.show();
        self.mask.fadeOut(0);
        self.dialog.fadeOut(0);
        self.mask.fadeIn(500);
        self.dialog.fadeIn(500, function () {
            if (callback)
                callback();
        });
    },

    Hide: function (callback) {
        var self = mui.GetPlugin("loading");
        self.mask.fadeOut(500);
        self.dialog.fadeOut(500, function () {
            self.mask.hide();
            self.dialog.hide();
            if (callback)
                callback();
        });
    }

});
mui.Register(new muiLoading());
