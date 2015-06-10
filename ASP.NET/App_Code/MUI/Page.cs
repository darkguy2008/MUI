using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI.WebControls;
using System.IO;
using System.Web.UI;

namespace MUI
{
    public class Page : Panel
    {
        public bool Active { get; set; }

        public Page() { }
        protected override string TagName { get { return "section"; } }
        protected override HtmlTextWriterTag TagKey { get { return HtmlTextWriterTag.Unknown; } }

        protected override void Render(System.Web.UI.HtmlTextWriter w)
        {
            this.Attributes["data-role"] = "content";

            Panel p = new Panel();
            p.Attributes["data-role"] = "page";
            if(!String.IsNullOrEmpty(this.Attributes["data-id"]))
                p.Attributes["data-id"] = this.Attributes["data-id"];
            else
                p.Attributes["data-id"] = this.ID;

            if(this.Active)
                p.Attributes["data-active"] = "true";

            this.Attributes.Remove("data-id");
            p.Attributes["data-id"] = p.Attributes["data-id"].Replace(" ", "_");

            p.RenderBeginTag(w);
            base.Render(w);
            p.RenderEndTag(w);
        }
    }
} 