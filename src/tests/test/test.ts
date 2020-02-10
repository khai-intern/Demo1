// import {gondola, TestModule, TestCase, importData} from "gondolajs"
// import { bookticket } from "../pages/book_ticket";
// import { LoginPage } from "../pages/Login_Page";
// import {Register} from "../pages/Register"
// import { time_table } from "../pages/time_table";
// import {} from "../../../data/timetable.json";
// import { HomePage } from "../pages/Home_Page";
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
// TestCase("@test Test UI",async()=>{
//     let login = new LoginPage();
//     login.open();
//     gondola.executeScript(function(){
//         const ele = document.getElementById("username");
//     })
//     let x = await gondola.executeScript(function(){
//         const ele = document.getElementsByTagName("input")[0];
//         const color = window.getComputedStyle(ele,null).getPropertyValue("outline-color");
//         return color;
//     })
//     login.clickbtn("//input[@id='username']");
//     let y = await gondola.executeScript(function(){
//         const ele = document.getElementsByTagName("input")[0];
//         const color = window.getComputedStyle(ele,null).getPropertyValue("outline-color");
//         return color;
//     })
//     console.log(x,y);
//     // gondola.checkNotEqual(x,y);
//     // gondola.executeScript(function(){
//     //     var ele = document.getElementsByTagName("input")[2];
//     //     const color = window.getComputedStyle(ele,":hover").getPropertyValue("background-color");
//     //     console.log(color);
//     // })
//     // gondola.executeScript(function(){
//     //     var ele = document.getElementsByClassName(":hover")[0];
//     //     var color = window.getComputedStyle(ele, null).getPropertyValue("background-color");
//     //     console.log(color);
//     // })
// })
// TestCase("Check information ticket ",async()=>{
//     let timetable = new time_table();
//     let login = new LoginPage();
    
//     timetable.open();
//     timetable.gotobottom();
//     timetable.clickbtn("//tbody[1]/tr[1]//a[.='book ticket']");
//     let text = await gondola.getText({"css":"h1"});
//     if (text == "Login page"){
//         login.login("vexosox474@email5.net","123456789");
//     }
// })
// TestCase("Test",async()=>{
//     let login = new LoginPage();
//     let home = new HomePage();
//     let creat = new Register()
//     login.open();
//     gondola.openNewTab();
//     creat.open();
//     gondola.maximize();
//     creat.inputvalid("email","%");
//     creat.clickbtn("//input[@value='Register']");
//     gondola.switchBrowserTab("previous");
//     gondola.wait(5);
// })
