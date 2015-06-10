using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;
using System.IO;
using System.Web.UI;
using System.Web.UI.HtmlControls;

namespace MUI
{
    public class ConfirmButton : MUI.Button
    {
        public String Question { get; set; }

        public ConfirmButton() { }

        protected override void Render(System.Web.UI.HtmlTextWriter w)
        {
            this.Attributes["OnClick"] = "return mui.Confirm(this, '" + Question + "');";            
            base.Render(w);
        }
    }
} 