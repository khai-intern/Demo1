import {gondola, TestCase, TestModule, importData, Data} from "gondolajs";
import { Register } from "../pages/Register";
TestModule("Register");

// TestCase("Verify that user can create new account with all information",async()=>{
//     let register = new Register();
//     register.open();
//     register.registerwithacc("doyija2633@riv3r.net","123456789","123456789","12345678");
// })
// TestCase("Verify that user can not create new account if enter valid PID more than 20 character",async()=>{
//     let register = new Register();
//     register.open();
//     register.registerwithacc("doyija2633@riv3r.net","123456789","123456789","123456788888888888888");
//     register.checktext(".message","There're errors in the form. Please correct the errors and try again.");
//     register.checktext(".validation-error","Invalid ID length")
// })

// TestCase("Verify that user can not create new account if user don't entering valid password.",async()=>{
//     let register = new Register();
//     register.open();
//     register.inputvalid(register.email,"doyija2633@riv3r.net");
//     register.inputvalid(register.pid,"12345678");
//     register.clickbtn(register.registerbtn);
//     register.checktext(".message","There're errors in the form. Please correct the errors and try again.");
//     register.checktext(".validation-error","Invalid password length")
// })

Data(importData("./data/specialchar.json")).TestCase("Verify error message is alway display when entering email by special character.",async(current : any)=>{
    let register = new Register();
    //const ele = importData("./data/specialchar.json");
    let index = 0;
    register.open();
    //while(index < ele.length){
      //register.inputvalid("email",ele[index].char);
      register.inputvalid("email",current.char);
      
      register.clickbtn("//input[@id='password']");
      let text = await gondola.getPopupText();
      //gondola.refresh();
      //index++;
    //}
})