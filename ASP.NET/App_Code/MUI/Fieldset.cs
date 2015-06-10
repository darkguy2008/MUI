using System.Drawing;
using System.Web.UI.WebControls;
using System.Web.UI;

namespace MUI
{
    public class Fieldset : Panel
    {
        public Fieldset() { }
        protected override string TagName { get { return "fieldset"; } }
        protected override HtmlTextWriterTag TagKey { get { return HtmlTextWriterTag.Unknown; } }
    }
} 