var muiSearch = Class.extend({

    _init: function () { this.Name = "search"; },

    Init: function (m) {

        var self = this;
        this.mask = $("<div></div>");
        this.mask.attr("class", "search mask");
        this.mask.appendTo("body");
        this.mask.hide();

        this.btn = $("button[data-action='appSearch']");
        this.btn.click(function () {
            self.Open();
            return false;
        });

        this.btnClose = $("button[data-action='appSearchClose']");
        this.btnClose.click(function () {
            self.Close();
            return false;
        });

        this.divSearch = $("div[data-role='search']");
        this.divSearch.hide();

        this.tx = this.divSearch.find("input");
        this.tx.keyup(function() {
            if (mui.OnSearch)
                mui.OnSearch(self, $(this).val());
        });
        this.tx.keydown(function (e) {
            if (e.keyCode == 13) {
                location.href = $($(self.divSearch.find("ul").children()[0]).find("a")[0]).attr("href");
                return false;
            }
        });

    },

    Open: function () {
        var self = mui.GetPlugin("search");
        self.tx.val("");
        self.Refresh();
        self.divSearch.fadeIn(500);
        self.mask.fadeIn(500, function () {
            self.btnClose.height(self.tx.outerHeight());
            self.btnClose.width(self.btnClose.height());
            self.tx.focus();
        });
    },

    Close: function() {
        var self = mui.GetPlugin("search");
        self.divSearch.fadeOut();
        self.mask.fadeOut();
    },

    ListClear: function () {
        var self = mui.GetPlugin("search");
        self.divSearch.find("ul").empty();
        self.Refresh();
    },

    ListAdd: function (text, link) {
        var self = mui.GetPlugin("search");
        var li = $('<li></li>');
        var a = $('<a></a>');
        a.attr("href", link);
        a.html(text);
        a.appendTo(li);
        li.appendTo(self.divSearch.find("ul"));
        self.Refresh();
    },

    Refresh: function () {
        var self = mui.GetPlugin("search");
        var ul = self.divSearch.find("ul");
        if (ul.children().length == 0)
            ul.hide();
        else
            ul.show();
    }

});
mui.Register(new muiSearch());
