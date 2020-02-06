// import {gondola, TestModule, TestCase, importData} from "gondolajs"
// import { bookticket } from "../pages/book_ticket";
// import { LoginPage } from "../pages/Login_Page";
// import {Register} from "../pages/Register"
// import { time_table } from "../pages/time_table";
// import {} from "../../../data/timetable.json";
// const ele = importData("./data/timetable.json");
// TestModule("Test");
// TestCase("Test",async()=>{
//     // let book = new bookticket();
//     // book.open();
//     // let loginpage = new LoginPage();
//     // loginpage.login("vexosox474@email5.net","123456789");
//     // book.gotobottom();
//     // await gondola.executeScript(function(){
//     //     const y = document.getElementsByTagName("option");
//     //     var x = y[0];
//     //     console.log(x);
//     // })
//     //let value = await gondola.getElementsAttribute("option", "value");
//     // let value = await gondola.get("option");
//     // console.log(value);
//     // let value = await gondola.getText({"css":"select[name='Date'] > [value='3']"});
//     // let x = value.split("/",3);
//     // console.log(x);
//     // let ele = parseInt(x[1],10);
//     // let y = new Date();
    
//     // let t = parseInt(y.getDate().toString(),10);
//     // if(ele>t){
//     //     console.log("true");
//     // }
//     //const ele = importData("./data/timtable.json");
    
// })
// TestCase("Verify error message is alway display when entering email by special character.",async()=>{
//     let register = new Register();
//     register.open();
//     for(var i =0; i < 30  ; i++){
      
//         let path = "["+i+"].title";
//         const value = await gondola.getJSONValue(specialchar, path);
//         register.inputvalid("email",value);
//         //register.clickbtn("//input[@id='password']");
//         //let text = await gondola.getPopupText();
//         let text;
//         //if(text = await gondola.getPopupText()){
//             //gondola.clickPopup("ok");
//         //     // let ele  = new Array();
//         //     // let character = ele.push(value[i]);
//         //     // console.log(character);
//         //}
//         // gondola.executeScript(function(){
//         //     let window = null;

//         // })
//         //console.log(value[0]);
//         gondola.refresh();
//     }
//     gondola.wait(2);
//     // register.open();
//     // register.inputvalid("email","%");
//     // register.clickbtn("//input[@id='password']");
//     // let text = await gondola.getPopupText();
//     // gondola.clickPopup("ok");
//     // console.log(text);
// })
// TestCase("",async()=>{
//   let time = new time_table();
//   time.open();
//   const ele = importData("./data/timetable.json");
// })