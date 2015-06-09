var muiDialog = Class.extend({

    _init: function () { this.Name = "dialog"; },

    Init: function (m) {

        var self = this;
        this.mask = $("<div></div>");
        this.mask.attr("class", "mask");
        this.mask.appendTo("body");
        this.mask.hide();

        this.dialog = $("<div></div>");
        this.dialog.attr("class", "dialog");
        this.dialog.appendTo("body");
        this.dialog.hide();
        $("<table><tr><td/><td/><td/></tr><tr><td/><td class='wrapper'><div class='window'></div></td><td/></tr><tr><td/><td/><td/></tr></table>").appendTo(this.dialog);

        mui.Alert = this.Alert;
        mui.Confirm = this.Confirm;
    },

    Alert: function (text, callback) {
        var self = mui.GetPlugin("dialog");
        var dlg = self.dialog.find(".window");
        dlg.empty();

        var p = $('<p></p>');
        p.html(text);
        p.appendTo(dlg);

        var btn = $('<button data-color="blue">Aceptar</button>');
        btn.click(function () {
            if (callback)
                callback();
            self.dialog.fadeOut(500);
            self.mask.fadeOut(500, function () {
                self.dialog.hide();
                self.mask.hide();
            });
        });
        btn.appendTo(dlg);

        self.mask.show();
        self.dialog.show();
        self.mask.fadeOut(0);
        self.dialog.fadeOut(0);
        self.mask.fadeIn();
        self.dialog.fadeIn();
    },

    Confirm: function (caller, text, callback) {
        var self = mui.GetPlugin("dialog");
        var dlg = self.dialog.find(".window");
        dlg.empty();

        var p = $('<p></p>');
        p.html(text);
        p.appendTo(dlg);

        var btnYes = $('<button data-color="green">Aceptar</button>');
        var btnNo = $('<button data-color="red">Cancelar</button>');

        function dismiss(value) {
            if (callback)
                callback();
            mui.Loading.Hide();
            self.dialog.fadeOut(500);
            self.mask.fadeOut(500, function () {
                self.dialog.hide();
                self.mask.hide();
            });
            if (value == true) {
                $(caller).attr("onclick", "");
                $(caller).click();
            }
        }

        btnYes.click(function () { dismiss(true); });
        btnNo.click(function () { dismiss(false); });

        btnNo.appendTo(dlg);
        btnYes.appendTo(dlg);

        self.mask.show();
        self.dialog.show();
        self.mask.fadeOut(0);
        self.dialog.fadeOut(0);
        self.mask.fadeIn();
        self.dialog.fadeIn();

        return false;
    }

});
mui.Register(new muiDialog());
