var muiForms = Class.extend({

    _init: function () { this.Name = "form"; },

    Init: function (m) {
        mui.Forms = this;

        $('form').submit(function(e) {
            if(this.checkValidity())
                mui.Loading.Show("Por favor espere...");
        });

        var self = this;
        if(__doPostBack != undefined)
        {
            this._dpb = __doPostBack;
            __doPostBack = function (et, ea) {
                mui.Loading.Show("Por favor espere...", function () {
                    setTimeout(function () {
                        self._dpb(et, ea);
                    }, 500);
                });
            }
        }

    },

});
mui.Register(new muiForms());
