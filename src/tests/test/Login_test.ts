import {gondola, TestCase, TestModule} from "gondolajs";
import { LoginPage } from "../pages/Login_Page";

TestModule("Login Page");
TestCase("Login with account existing",async()=>{
    let loginpage = new LoginPage();
    loginpage.open();
    loginpage.login("vexosox474@email5.net","123456789");
});

TestCase("Check Registration page",async()=>{
    //let btn : string = "//a[.='registration page']";
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
    loginpage.checktext("strong","Welcome guest!");
});