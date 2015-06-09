var muiHeader = Class.extend({

    _init: function () { this.Name = "header"; },

    Init: function (m) {

        var self = this;
        var header = $('section[data-role="header"]');
        var fieldsets = $(header.find("fieldset"));
        var buttons = $(fieldsets.find("button"));

        // Set the button images and such
        buttons.each(function () {
            var b = $(this);
            if (b.html() == "") {
                var i = $("<i></i>");
                var icon = "";
                switch (b.attr("data-action")) {
                    case "appMenu": icon = "fa fa-bars"; break;
                    case "appBack": icon = "fa fa-arrow-left"; break;
                    case "appSearch": icon = "fa fa-search"; break;
                    case "appSubMenu": icon = "fa fa-ellipsis-v"; break;
                    default:
                        i = null;
                        break;
                }
                if (icon != "")
                    i.attr("class", icon);
                if (i == null)
                    b.html("&nbsp;");
                else
                    i.appendTo(b);
            }
        });

        // Remove blank spaces between tags (and thus, between buttons)
        fieldsets.each(function () {
            var fs = $(this);
            fs.html(fs.html().replace(/>\s+</g, "><"));
        });

        //this.Resize();
    },

    Resize: function () {

        var header = $('section[data-role="header"]');
        var fieldsets = $(header.find("fieldset"));
        var buttons = $(fieldsets.find("button"));
        var content = $('section[data-role="content"]');

        // Set the buttons height to the header's height
        buttons.height(header.outerHeight());
        buttons.each(function () { $(this).width($(this).height()); });

        // Fix content top margin and size
        content.css("height", ($(window).height() - header.outerHeight()) + "px");

        header.css("top", $(window).scrollTop() + "px");
    }

});
mui.Register(new muiHeader());
