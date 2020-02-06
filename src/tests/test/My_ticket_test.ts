import {gondola, TestModule, TestCase, importData} from "gondolajs";
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

TestCase("Verify filter is displayed when myticket page has 6 row or more ",async()=>{
    let myticket = new Myticket();
    let loginpage = new LoginPage();
    let book = new bookticket();
    const ticket = importData("./data/ticket.json");
    myticket.open();
    loginpage.login("vexosox474@email5.net","123456789");
    
    myticket.gotobottom();
    let x = await gondola.getElementCount("tr");
    //gondola.checkControlExist("//div[@class='Filter']");
    let index = 0;
    if(x<9){
        while(index < (9-x)){
            book.open();
            book.gotobottom();
            book.Add(ticket[index].date,ticket[index].depart,ticket[index].arrive,ticket[index].seat,ticket[index].amouth);
            index++;
        }
        myticket.open();
    }
    gondola.checkControlExist("//div[@class='Filter']");
})
