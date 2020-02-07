import {gondola, TestCase, TestModule} from "gondolajs";
import { LoginPage } from "../pages/Login_Page";

TestModule("Login Page");
TestCase("Verify that user can login with valid email and password",async()=>{
    let loginpage = new LoginPage();
    loginpage.open();
    loginpage.login("vexosox474@email5.net","123456789");
});

TestCase("Check Registration page",async()=>{
    let loginpage = new LoginPage();
    loginpage.open();
    loginpage.clickbtn("//a[.='registration page']");
    gondola.checkText({css:"h1"},"Create account");
})

TestCase("Check password reset instructions form",async()=>{
    let loginpage = new  LoginPage();
    loginpage.open();
    loginpage.clickbtn("//a[.='Forgot Password page']");
    loginpage.inputvalid("email","vexosox474@email5.net");
    loginpage.clickbtn("//input[@value='Send Instructions']")
    loginpage.checktext(".message","Instructions to reset your password have been sent to the specified email address.");
})

TestCase ("Verify that user can not login if user don't entering password",async()=>{
    let loginpage = new LoginPage();
    loginpage.open();
    loginpage.inputvalid("username","vexosox474@email5.net")
    loginpage.clickbtn("//input[@value='login']");
    loginpage.checktext(".message","There was a problem with your login and/or errors exist in your form.");
})

TestCase("Verify that user can logout when clicking logout tab",async()=>{
    let loginpage = new LoginPage();
    loginpage.open();
    loginpage.login("vexosox474@email5.net","123456789")
    loginpage.clickbtn("//span[.='Log out']");
    loginpage.checktext("strong","Welcome guest!");
});

TestCase("Check Log out tab",async()=>{
    let loginpage = new LoginPage();
    loginpage.open();
    loginpage.login("vexosox474@email5.net","123456789")
    loginpage.checktext("a[href='/Account/Logout'] > span","Log out");
});
TestCase("Verify that text box is highlighted when user click on textbox",async()=>{
    let login = new LoginPage();
    login.open();
    gondola.executeScript(function(){
        const ele = document.getElementById("username");
    })
    let x = await gondola.executeScript(function(){
        const ele = document.getElementsByTagName("input")[0];
        const color = window.getComputedStyle(ele,null).getPropertyValue("outline-color");
        return color;
    })
    login.clickbtn("//input[@id='username']");
    let y = await gondola.executeScript(function(){
        const ele = document.getElementsByTagName("input")[0];
        const color = window.getComputedStyle(ele,null).getPropertyValue("outline-color");
        return color;
    })
})