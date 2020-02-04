import {gondola, TestModule, TestCase} from "gondolajs";
import { Myticket } from "../pages/my_ticket";
import { LoginPage } from "../pages/Login_Page";

TestModule("My Ticket")
// TestCase("Verify...",async()=>{
//     let myticket = new Myticket();
//     myticket.open();
//     myticket.checktext("h1","Login page");
// })

// TestCase("Verify that user can acces my ticket when clicking my ticket tab.",async()=>{
//     let myticket = new Myticket();
//     let loginpage = new LoginPage();
    
//     myticket.open();
//     loginpage.login("vexosox474@email5.net","123456789");
//     myticket.checktext("a[href='/Page/ManageTicket.cshtml']","My ticket");
// })

// TestCase("Verify filter...",async()=>{
//     let myticket = new Myticket();
//     let loginpage = new LoginPage();
    
//     myticket.open();
//     loginpage.login("vexosox474@email5.net","123456789");
//     myticket.gotobottom();
//     gondola.wait(5);
// })

TestCase("Cancel ticket",async()=>{
    let myticket = new Myticket();
    let loginpage = new LoginPage();
    myticket.open();
    loginpage.login("vexosox474@email5.net","123456789");
    myticket.gotobottom();
    myticket.cancel();
})
