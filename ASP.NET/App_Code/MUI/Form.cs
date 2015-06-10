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
    public class Form : Panel
    {
        public String Title { get; set; }

        public Form() { }
        protected override string TagName { get { return "section"; } }
        protected override HtmlTextWriterTag TagKey { get { return HtmlTextWriterTag.Unknown; } }

        protected override void Render(System.Web.UI.HtmlTextWriter w)
        {
            Fieldset fs = new Fieldset();
            this.Attributes["data-role"] = "form";
            this.Attributes["data-type"] = "stack";

            base.RenderBeginTag(w);
            fs.RenderBeginTag(w);
            if (!String.IsNullOrEmpty(Title))
                new HtmlGenericControl("legend") { InnerText = Title }.RenderControl(w);
            base.RenderContents(w);
            fs.RenderEndTag(w);
            base.RenderEndTag(w);
        }
    }
} 