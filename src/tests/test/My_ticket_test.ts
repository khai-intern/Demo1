import {gondola, TestModule, TestCase} from "gondolajs";
import { Myticket } from "../pages/my_ticket";
import { LoginPage } from "../pages/Login_Page";

TestModule("My Ticket")
TestCase("Verify...",async()=>{
    let myticket = new Myticket();
    myticket.open();
    myticket.checktext("h1","Login page");
})

TestCase("Verify...",async()=>{
    let myticket = new Myticket();
    let loginpage = new LoginPage();
    
    myticket.open();
    loginpage.login("vexosox474@email5.net","123456789");
    myticket.checktext("a[href='/Page/ManageTicket.cshtml']","My ticket");
})

TestCase("Verify filter...",async()=>{
    let myticket = new Myticket();
    let loginpage = new LoginPage();
    
    myticket.open();
    loginpage.login("vexosox474@email5.net","123456789");
    myticket.gotobottom();
    gondola.wait(5);
})
