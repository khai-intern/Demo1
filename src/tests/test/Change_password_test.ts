import {gondola, TestModule, TestCase} from "gondolajs";
import { LoginPage } from "../pages/Login_Page";
import { changepassword } from "../pages/change_password";

TestModule("Change Password");

TestCase("Change password with valid password",async()=>{
    let loginpage = new LoginPage();
    loginpage.open();
    loginpage.login("vexosox474@email5.net","123456789");
    loginpage.clickbtn("//span[.='Change password']");
    let change = new changepassword();
    change.changpassword("123456789","987654321","987654321");
    change.gotobottom();
    change.clickbtn("//input[@value='Change Password']");
})

TestCase("Change password with invalid password",async()=>{
    let loginpage = new LoginPage();
    loginpage.open();
    loginpage.login("vexosox474@email5.net","123456789");
    loginpage.clickbtn("//span[.='Change password']");
    let change = new changepassword();
    change.changpassword("123456789","987654321","987654321");
    change.checktext(".message","Password change failed. Please correct the errors and try again.");
    change.checktext(".validation-error","Invalid new password.")

})