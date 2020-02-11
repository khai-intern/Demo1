import {gondola, TestModule, TestCase} from "gondolajs";
import { LoginPage } from "../pages/Login_Page";
import { ChangePasswordPage } from "../pages/change_password";

TestModule("Change Password");

TestCase("Verify that user can change password with new password",async()=>{
    let loginPage = new LoginPage();
    let changePage = new ChangePasswordPage();
    let password = "123456789";
    let newpassword = "987654321";
    changePage.openUrl();
    loginPage.loginWithAccount("vexosox474@email5.net","123456789");
    changePage.openUrl();
    
    changePage.changePassword(password,newpassword,newpassword);
    changePage.changePassword(newpassword,password,password);
})

TestCase("Change password with invalid password",async()=>{
    let loginPage = new LoginPage();
    let changePage = new ChangePasswordPage();
    changePage.openUrl();
    loginPage.loginWithAccount("vexosox474@email5.net","123456789");
    changePage.openUrl();
    
    
    changePage.inputValid("currentPassword","123456789")
    changePage.clickButton();
    
    changePage.checkText(".message","Password change failed. Please correct the errors and try again.");
    changePage.checkText(".validation-error","Invalid new password.")
    
})

TestCase("Verify that user cannot change password with wrong current password",async()=>{
    let loginPage = new LoginPage();
    let changePage = new ChangePasswordPage();
    changePage.openUrl();
    loginPage.loginWithAccount("vexosox474@email5.net","123456789");
    changePage.openUrl();
    changePage.inputValid("currentPassword","987654321")
    changePage.inputValid("newPassword","123456789")
    changePage.inputValid("confirmPassword","123456789")
    
    changePage.clickButton();
    changePage.checkText(".message","An error occurred when attempting to change the password. Maybe your current password is incorrect.");
})

TestCase ("Verify error message is displayed when don't fill the form",async()=>{
    let loginpage = new LoginPage();
    let change = new ChangePasswordPage();
    change.openUrl();
    loginpage.loginWithAccount("vexosox474@email5.net","123456789");
    change.openUrl();
    change.clickButton();
    change.checkText(".message","Password change failed. Please correct the errors and try again.");
    change.checkText(".validation-error[for='currentPassword']","Invalid current password.");
    change.checkText(".validation-error[for='newPassword']","Invalid new password.");
})