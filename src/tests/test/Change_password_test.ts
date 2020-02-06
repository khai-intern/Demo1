import {gondola, TestModule, TestCase} from "gondolajs";
import { LoginPage } from "../pages/Login_Page";
import { changepassword } from "../pages/change_password";

TestModule("Change Password");

TestCase("Verify that user can change password with new password",async()=>{
    let loginpage = new LoginPage();
    let change = new changepassword();
    let strpass = "123456789";
    let strnewpass = "987654321";
    change.open();
    loginpage.login("vexosox474@email5.net","123456789");
    change.open();
    
    change.changpassword(strpass,strnewpass,strnewpass);
    change.changpassword(strnewpass,strpass,strpass);
})

TestCase("Change password with invalid password",async()=>{
    let loginpage = new LoginPage();
    let change = new changepassword();
    change.open();
    loginpage.login("vexosox474@email5.net","123456789");
    change.open();
    
    
    change.inputvalid("currentPassword","123456789")
    change.clickbtn();
    
    change.checktext(".message","Password change failed. Please correct the errors and try again.");
    change.checktext(".validation-error","Invalid new password.")
    
})

TestCase("Verify that user cannot change password with wrong current password",async()=>{
    let loginpage = new LoginPage();
    let change = new changepassword();
    change.open();
    loginpage.login("vexosox474@email5.net","123456789");
    change.open();
    change.inputvalid("currentPassword","987654321")
    change.inputvalid("newPassword","123456789")
    change.inputvalid("confirmPassword","123456789")
    change.clickbtn();
    
    
    change.checktext(".message","An error occurred when attempting to change the password. Maybe your current password is incorrect.");
    
})

TestCase ("Verify error message is displayed when don't fill the form",async()=>{
    let loginpage = new LoginPage();
    let change = new changepassword();
    change.open();
    loginpage.login("vexosox474@email5.net","123456789");
    change.open();
    change.clickbtn();
    change.checktext(".message","Password change failed. Please correct the errors and try again.");
    change.checktext(".validation-error[for='currentPassword']","Invalid current password.");
    change.checktext(".validation-error[for='newPassword']","Invalid new password.");
})