import {gondola, TestCase, TestModule, importData, Data} from "gondolajs";
import { RegisterPage } from "../pages/Register";
TestModule("Register");

TestCase("Verify that user can create new account with all information",async()=>{
    let registerPage = new RegisterPage();
    registerPage.openUrl();
    registerPage.registerWithAccount("doyija2633@riv3r.net","123456789","123456789","12345678");
})
TestCase("Verify that user can not create new account if enter valid PID more than 20 character",async()=>{
    let registerPage = new RegisterPage();
    registerPage.openUrl();
    registerPage.registerWithAccount("doyija2633@riv3r.net","123456789","123456789","123456788888888888888");
    registerPage.checkText(".message","There're errors in the form. Please correct the errors and try again.");
    registerPage.checkText(".validation-error","Invalid ID length")
})

TestCase("Verify that user can not create new account if user don't entering valid password.",async()=>{
    let registerPage = new RegisterPage();
    registerPage.openUrl();
    registerPage.inputValid(registerPage.email,"doyija2633@riv3r.net");
    registerPage.inputValid(registerPage.pid,"12345678");
    registerPage.clickButton(registerPage.registerbutton);
    registerPage.checkText(".message","There're errors in the form. Please correct the errors and try again.");
    registerPage.checkText(".validation-error","Invalid password length")
})

Data(importData("./data/specialchar.json")).TestCase("Verify popup is alway display when entering email by special character.",async(current : any)=>{
    let register = new RegisterPage();
    //const ele = importData("./data/specialchar.json");
    let index = 0;
    register.openUrl();
    //while(index < ele.length){
      //register.inputvalid("email",ele[index].char);
      register.inputValid("email",current.char);
      
      register.clickButton("//input[@id='password']");
      let text = await gondola.getPopupText();
      //gondola.refresh();
      //index++;
    //}
})