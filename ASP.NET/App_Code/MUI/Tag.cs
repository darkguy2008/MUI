using System.Drawing;
using System.Web.UI.WebControls;

namespace MUI
{
    public class Tag : Label
    {
        public Color Color { get; set; }
        public Tag() { }

        protected override void Render(System.Web.UI.HtmlTextWriter w)
        {
            this.CssClass = "tag " + this.Color.Name.ToLowerInvariant().Trim();
            base.Render(w);
        }
    }
} 