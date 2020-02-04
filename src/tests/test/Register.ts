import {gondola, TestCase, TestModule} from "gondolajs";
import { Register } from "../pages/Register";
const specialchar = [
    {
      id: 1,
      title: "%"
    },
    {
      id: 2,
      title: "`",
    },
    {
      id: 3,
      title: "!"
    },
    {
      id: 4,
      title: "#"
    },
    {
      id: 5,
      title: "$"
    },
    {
      id: 6,
      title: "%"
    },
    {
      id: 7,
      title: "^"
    },
    {
      id: 8,
      title: "&"
    },
    {
      id: 9,
      title: "*"
    },
    {
      id: 10,
      title: "("
    },
    {
      id: 11,
      title: ")"
    },
    {
      id: 12,
      title: "-"
    },
    {
      id: 13,
      title: "_"
    },
    {
      id: 14,
      title: "+"
    },
    {
      id: 15,
      title: "="
    },
    {
      id: 16,
      title: "{"
    },
    {
      id: 17,
      title: "}"
    },
    {
      id: 18,
      title: "["
    },
    {
      id: 19,
      title: "]"
    },
    {
      id: 20,
      title: "|"
    },
    {
      id: 21,
      title: "/"
    },
    {
      id: 22,
      title: ":"
    },
    {
      id: 23,
      title: ";"
    },
    {
      id: 24,
      title: "'"
    },
    {
      id: 25,
      title: '"'
    },
    {
      id: 26,
      title: "<"
    },
    {
      id: 27,
      title: ">"
    },
    {
      id: 28,
      title: ","
    },
    {
      id: 29,
      title: "."
    },
    {
      id: 30,
      title: "?"
    },
   ];
TestModule("Register");

TestCase("Verify that user can create new account with all information",async()=>{
    let register = new Register();
    register.open();
    register.registerwithacc("doyija2633@riv3r.net","123456789","123456789","12345678");
})
TestCase("Verify that user can not create new account if enter valid PID more than 20 character",async()=>{
    let register = new Register();
    register.open();
    register.registerwithacc("doyija2633@riv3r.net","123456789","123456789","12345678");
    register.checktext(".message","There're errors in the form. Please correct the errors and try again.");
    register.checktext(".validation-error","Invalid ID length")
})

TestCase("Verify that user can not create new account if user don't entering valid password.",async()=>{
    let register = new Register();
    register.open();
    register.registerwithacc("doyija2633@riv3r.net","123456789","123456789","12345678");
    register.checktext(".message","There're errors in the form. Please correct the errors and try again.");
    register.checktext(".validation-error","Invalid password length")
})

TestCase("Verify error message is alway display when entering email by special character.",async()=>{
    let register = new Register();
    // for(var i =0; i < 30  ; i++){
    //     register.open();
    //     let path = "["+i+"].title";
    //     const value = await gondola.getJSONValue(specialchar, path);
    //     register.inputvalid("email",value[i]);
    //     register.clickbtn("//input[@id='password']");
    //     gondola.clickPopup("ok");
    // }
    register.open();
    register.inputvalid("email","%");
    register.clickbtn("//input[@id='password']");
    gondola.clickPopup("ok");
})