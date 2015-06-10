using System;
using System.Drawing;
using System.Web.UI.WebControls;

namespace MUI
{
    public class PageButton : HyperLink
    {
        public Color Color { get; set; }
        private String _navPage;
        public String NavigateToPage
        {
            get { return _navPage; }
            set { _navPage = value.Replace(" ", "_"); NavigateUrl = "#" + _navPage; }
        }

        public PageButton() {
            CssClass = "button";
        }

        protected override void Render(System.Web.UI.HtmlTextWriter w)
        {
            this.Attributes["data-color"] = this.Color.Name.ToLowerInvariant().Trim();
            base.Render(w);
        }
    }
} 