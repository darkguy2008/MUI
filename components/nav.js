var muiNav = Class.extend({

    _init: function () { this.Name = "nav"; },

    Init: function (m) {

        var self = this;
        this.mask = $("<div></div>");
        this.mask.attr("class", "mask");
        this.mask.appendTo("body");
        this.mask.hide();

        var menu = $("div[data-role='menu']");

        this.type = menu.attr("data-type");
        switch (this.type) {
            case "push-left":
                menu.addClass("push-menu-left");
                break;
            case "slide-left":
                menu.addClass("slide-menu-left");
                break;
        }

        $("button[data-action='appMenu']").click(function () {
            self.mask.attr("class", "mask");
            self.Open();
            return false;
        });

        var subButton = $("button[data-action='appSubMenu']");
        if (subButton.length > 0) {
            var sub = $("div[data-role='submenu']");
            sub.hide();
            sub.fadeOut();
            subButton.click(function () {
                sub.css("right", subButton.position().left - subButton.width() + 5);
                sub.css("top", subButton.position().top + subButton.height());
                sub.fadeToggle();
                self.mask.attr("class", "mask inv");
                self.mask.fadeToggle();
                return false;
            });
        };

        this.mask.click(function () {
            self.Close();
            if(sub != undefined)
                sub.fadeOut();
        });

        menu.find("ul[data-title]").each(function () {
            var ul = $(this);
            var li = $("<li></li>");
            li.attr("class", "title");
            li.html(ul.attr("data-title"));
            li.prependTo(ul);
        });
    },

    Open: function () {
        switch (this.type) {
            case "push-left":
                $("body").addClass("pml-open");
                break;
            case "slide-left":
                $("body").addClass("sml-open");
                break;
        }
        this.mask.fadeIn(250);
    },

    Close: function () {
        switch (this.type) {
            case "push-left":
                $("body").removeClass("pml-open");
                break;
            case "slide-left":
                $("body").removeClass("sml-open");
                break;
        }
        this.mask.fadeOut(250);
    }

});
mui.Register(new muiNav());
