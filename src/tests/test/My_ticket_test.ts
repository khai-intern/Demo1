import {gondola, TestModule, TestCase} from "gondolajs";
import { Myticket } from "../pages/my_ticket";
import { LoginPage } from "../pages/Login_Page";
import { bookticket } from "../pages/book_ticket";

TestModule("My Ticket")
TestCase("Verify...",async()=>{
    let myticket = new Myticket();
    myticket.open();
    myticket.checktext("h1","Login page");
})

TestCase("Verify that user can acces my ticket when clicking my ticket tab.",async()=>{
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

TestCase("Cancel ticket",async()=>{
    let myticket = new Myticket();
    let loginpage = new LoginPage();
    myticket.open();
    loginpage.login("vexosox474@email5.net","123456789");
    myticket.gotobottom();
    myticket.cancel();
})

TestCase("",async()=>{
    let myticket = new Myticket();
    let loginpage = new LoginPage();
    let book = new bookticket();
    myticket.open();
    loginpage.login("vexosox474@email5.net","123456789");
    
    myticket.gotobottom();
    let x = await gondola.getElementCount("tr");
    //gondola.checkControlExist("//div[@class='Filter']");
    console.log(x);
    
    if(x<9){
        myticket.clickbtn("//span[.='Book ticket']");
        book.gotobottom();
        book.Add("2/24/2020","Phan Thiết","Đà Nẵng","Soft bed with air conditioner","2");
    }
    myticket.clickbtn("//span[.='My ticket']")
    gondola.checkControlExist("//div[@class='Filter']");
})
