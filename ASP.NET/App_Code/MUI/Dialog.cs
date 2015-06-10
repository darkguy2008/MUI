using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;

namespace MUI
{
    public static class Dialog
    {
        public static void Alert(this System.Web.UI.Page p, String msg)
        {
            p.ClientScript.RegisterClientScriptBlock(p.GetType(), "muiAlert", "mui.Ready(function () { mui.Alert('" + msg + "'); });", true);
        }
    }
}