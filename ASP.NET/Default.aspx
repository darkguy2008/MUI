<%@ Page Title="MUI ASP.NET Example Page" Language="C#" MasterPageFile="~/MasterPage.master" AutoEventWireup="true" CodeFile="Default.aspx.cs" Inherits="_Default" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" Runat="Server">

    <mui:Page runat="server" ID="main">

    	<p>Page 1 goes here.</p>

        <mui:Form runat="server" Title="Here's a sample form">
            <mui:Tag runat="server" Color="Blue" Text="With a sample blue tag" />
            <mui:ConfirmButton runat="server" ID="btnUpdateNews" Color="Blue" Question="Are you a human?" Text="And a confirm button!" />
        </mui:Tag>

    </mui:Page>

    <mui:Page runat="server" ID="list">

    	<p>Page 2 goes here. What about a list?</p>

        <mui:List runat="server">
            <mui:ListItem runat="server">List item 1</mui:ListItem>
            <mui:ListItem runat="server">List item 2</mui:ListItem>
            <mui:ListItem runat="server">List item 3</mui:ListItem>
            <mui:ListItem runat="server">List item 4</mui:ListItem>
            <mui:ListItem runat="server">List item 5</mui:ListItem>
        </mui:List>

    </mui:Page>

</asp:Content>
