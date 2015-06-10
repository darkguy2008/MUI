using System;
using System.Drawing;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MUI
{
    public class List : Panel
    {
        public List() { }
        protected override string TagName { get { return "ul"; } }
        protected override HtmlTextWriterTag TagKey { get { return HtmlTextWriterTag.Unknown; } }

        protected override void Render(System.Web.UI.HtmlTextWriter w)
        {
            this.Attributes["data-role"] = "list";
            base.Render(w);
        }
    }

    public class ListItem : Panel
    {
        public ListItem() { }
        protected override string TagName { get { return "a"; } }
        protected override HtmlTextWriterTag TagKey { get { return HtmlTextWriterTag.Unknown; } }

        private String _navPage;
        public String NavigateUrl { get; set; }
        public String NavigateToPage
        {
            get { return _navPage; }
            set { _navPage = value.Replace(" ", "_"); NavigateUrl = "#" + _navPage; }
        }
        public String BadgeText { get; set; }
        public Color BadgeColor { get; set; }

        protected override void Render(System.Web.UI.HtmlTextWriter w)
        {
            LI li = new LI();
            if (!String.IsNullOrEmpty(NavigateUrl))
                li.Attributes["data-type"] = "nav";

            if (!String.IsNullOrEmpty(BadgeText))
            {
                Label badge = new Label();
                badge.Attributes["data-role"] = "num";
                badge.CssClass = BadgeColor.Name.ToLowerInvariant().Trim();
                badge.Text = BadgeText;
                this.Controls.Add(badge);

                Panel pClear = new Panel();
                pClear.Attributes["style"] = "clear: both";
                this.Controls.Add(pClear);
            }

            this.Attributes["href"] = this.NavigateUrl;

            li.RenderBeginTag(w);
            base.Render(w);
            li.RenderEndTag(w);
        }

        private class LI : Panel
        {
            public LI() { }
            protected override string TagName { get { return "li"; } }
            protected override HtmlTextWriterTag TagKey { get { return HtmlTextWriterTag.Unknown; } }
        }
    }
} 