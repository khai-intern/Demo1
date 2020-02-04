import {gondola, TestModule, TestCase} from "gondolajs";
import { LoginPage } from "../pages/Login_Page";
import { changepassword } from "../pages/change_password";

TestModule("Change Password");

// TestCase("Verify that user can change password with new password",async()=>{
//     let loginpage = new LoginPage();
//     let change = new changepassword();
//     loginpage.open();
//     loginpage.login("vexosox474@email5.net","987654321");
//     loginpage.clickbtn("//span[.='Change password']");
    
//     change.changpassword("987654321","123456789","123456789");
//     change.gotobottom();
//     change.clickbtn();
// })

TestCase("Change password with invalid password",async()=>{
    let loginpage = new LoginPage();
    let change = new changepassword();
    loginpage.open();
    loginpage.login("vexosox474@email5.net","123456789");
    loginpage.clickbtn("//span[.='Change password']");
    
    change.changpassword("123456789","0","0");
    change.clickbtn();
    change.checktext(".message","Password change failed. Please correct the errors and try again.");
    change.checktext(".validation-error","Invalid new password.")
    
})

TestCase("Verify that user cannot change password with wrong current password",async()=>{
    let loginpage = new LoginPage();
    let change = new changepassword();
    loginpage.open();
    loginpage.login("vexosox474@email5.net","123456789");
    loginpage.clickbtn("//span[.='Change password']");
    
    change.changpassword("987654321","987654321","987654321");
    change.clickbtn();
    change.checktext(".message","An error occurred when attempting to change the password. Maybe your current password is incorrect.");
})

TestCase ("Verify error message is display when don't fill the form",async()=>{
    let loginpage = new LoginPage();
    let change = new changepassword();
    loginpage.open();
    loginpage.login("vexosox474@email5.net","123456789");
    loginpage.clickbtn("//span[.='Change password']");
    change.gotobottom();
    change.clickbtn();
    change.checktext(".message","Password change failed. Please correct the errors and try again.");
    change.checktext(".validation-error[for='currentPassword']","Invalid current password.");
    change.checktext(".validation-error[for='newPassword']","Invalid new password.");
})