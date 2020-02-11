import {gondola, TestCase, TestModule} from "gondolajs";
import { LoginPage } from "../pages/Login_Page";

TestModule("Login Page");
TestCase("Verify that user can login with valid email and password",async()=>{
    let loginPage = new LoginPage();
    loginPage.openUrl();
    loginPage.loginWithAccount("vexosox474@email5.net","123456789");
});

TestCase("Check Registration page",async()=>{
    let loginPage = new LoginPage();
    loginPage.openUrl();
    loginPage.clickButton("//a[.='registration page']");
    gondola.checkText({css:"h1"},"Create account");
})

TestCase("Check password reset instructions form",async()=>{
    let loginPage = new  LoginPage();
    loginPage.openUrl();
    loginPage.clickButton("//a[.='Forgot Password page']");
    loginPage.inputValid("email","vexosox474@email5.net");
    loginPage.clickButton("//input[@value='Send Instructions']")
    loginPage.checkText(".message","Instructions to reset your password have been sent to the specified email address.");
})

TestCase ("Verify that user can not login if user don't entering password",async()=>{
    let loginPage = new LoginPage();
    loginPage.openUrl();
    loginPage.inputValid("username","vexosox474@email5.net")
    loginPage.clickButton("//input[@value='login']");
    loginPage.checkText(".message","There was a problem with your login and/or errors exist in your form.");
})

TestCase("Verify that user can logout when clicking logout tab",async()=>{
    let loginPage = new LoginPage();
    loginPage.openUrl();
    loginPage.loginWithAccount("vexosox474@email5.net","123456789")
    loginPage.clickButton("//span[.='Log out']");
    loginPage.checkText("strong","Welcome guest!");
});

TestCase("Check Log out tab",async()=>{
    let loginPage = new LoginPage();
    loginPage.openUrl();
    loginPage.loginWithAccount("vexosox474@email5.net","123456789")
    loginPage.checkText("a[href='/Account/Logout'] > span","Log out");
});
TestCase("Verify that text box is highlighted when user click on textbox",async()=>{
    let loginPage = new LoginPage();
    loginPage.openUrl();
    gondola.executeScript(function(){
        const ele = document.getElementById("username");
    })
    let colorx = loginPage.getColorBox();
    loginPage.clickButton("//input[@id='username']");
    let colory = loginPage.getColorBox();
    gondola.checkEqual(colorx,colory);
})