using System.Drawing;

namespace MUI
{
    public class Button : System.Web.UI.WebControls.Button
    {
        public Color Color { get; set; }

        public Button() { }

        protected override void Render(System.Web.UI.HtmlTextWriter w)
        {
            this.Attributes["data-color"] = this.Color.Name.ToLowerInvariant().Trim();
            base.Render(w);
        }
    }
} 