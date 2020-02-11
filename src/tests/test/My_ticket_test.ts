import {gondola, TestModule, TestCase, importData} from "gondolajs";
import { MyTicketPage } from "../pages/my_ticket";
import { LoginPage } from "../pages/Login_Page";
import { BookTicketPage } from "../pages/book_ticket";

TestModule("My Ticket")
TestCase("Verify...",async()=>{
    let myticket = new MyTicketPage();
    myticket.openUrl();
    myticket.checkText("h1","Login page");
})

TestCase("Verify that user can acces my ticket when clicking my ticket tab.",async()=>{
    let myticket = new MyTicketPage();
    let loginpage = new LoginPage();
    
    myticket.openUrl();
    loginpage.loginWithAccount("vexosox474@email5.net","123456789");
    myticket.checkText("a[href='/Page/ManageTicket.cshtml']","My ticket");
})

TestCase("Verify filter appear when less than 6 row after delete ticket",async()=>{
    let myticket = new MyTicketPage();
    let loginpage = new LoginPage();
    myticket.openUrl();
    loginpage.loginWithAccount("vexosox474@email5.net","123456789");
    myticket.gotoBottom();
    gondola.wait(5);
})

TestCase("Cancel ticket",async()=>{
    let ticketPage = new MyTicketPage();
    let loginPage = new LoginPage();
    let bookPage = new BookTicketPage();
    const ticket = importData("./data/ticket.json");
    ticketPage.openUrl();
    loginPage.loginWithAccount("vexosox474@email5.net","123456789");
    ticketPage.gotoBottom();
    let x = await gondola.getElementCount("tr");
    ticketPage.checkAndCancelAmountTicket(x,ticket);
})

TestCase("Verify filter is displayed when myticket page has 6 row or more ",async()=>{
    let ticketPage = new MyTicketPage();
    let loginPage = new LoginPage();
    const ticket = importData("./data/ticket.json");
    ticketPage.openUrl();
    loginPage.loginWithAccount("vexosox474@email5.net","123456789");
    ticketPage.gotoBottom();
    let x = await gondola.getElementCount("tr");
    ticketPage.checkAndAddTickets(x,ticket);
    ticketPage.openUrl();
    ticketPage.gotoBottom();
    gondola.checkControlExist("//div[@class='Filter']");
})
