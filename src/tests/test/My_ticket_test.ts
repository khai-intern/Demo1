import {gondola, TestModule, TestCase, importData} from "gondolajs";
import { MyTicketPage } from "../pages/my_ticket";
import { LoginPage } from "../pages/Login_Page";
import { BookTicketPage } from "../pages/book_ticket";

TestModule("My Ticket")
TestCase("Verify...",async()=>{
    let ticketPage = new MyTicketPage();
    ticketPage.openUrl();
    ticketPage.checkText("h1","Login page");
})

TestCase("Verify that user can acces my ticket when clicking my ticket tab.",async()=>{
    let ticketPage = new MyTicketPage();
    let loginpage = new LoginPage();
    
    ticketPage.openUrl();
    loginpage.loginWithAccount("vexosox474@email5.net","123456789");
    ticketPage.checkText("a[href='/Page/ManageTicket.cshtml']","My ticket");
})

TestCase("Verify ticket is removed when page haven't filter ",async()=>{
    let ticketPage = new MyTicketPage();
    let loginpage = new LoginPage();
    let bookPage = new BookTicketPage();
    ticketPage.openUrl();
    loginpage.loginWithAccount("vexosox474@email5.net","123456789");
    bookPage.OpenUrl();
    bookPage.GotoBottom();
    bookPage.AddTicket("2/20/2020","Sài Gòn","Đà Nẵng","Hard Seat","1");
    ticketPage.openUrl();
    let x = await ticketPage.getTicket();
    ticketPage.cancelTicket();
    let y = await ticketPage.getTicket();
    gondola.checkNotEqual(x,y);
})

TestCase("Verify filter is displayed when myticket page has 6 row or more ",async()=>{
    let ticketPage = new MyTicketPage();
    let loginPage = new LoginPage();
    const ticket = importData("./data/ticket.json");
    ticketPage.openUrl();
    loginPage.loginWithAccount("vexosox474@email5.net","123456789");
    ticketPage.gotoBottom();
    let x = await ticketPage.getTicket();
    ticketPage.checkAndAddTickets(x,ticket);
    ticketPage.openUrl();
    ticketPage.checkFilterAppear();
})

TestCase("",async()=>{
    let ticketPage = new MyTicketPage();
    let loginPage = new LoginPage();
    const ticket = importData("./data/ticket.json");
    ticketPage.openUrl();
    loginPage.loginWithAccount("vexosox474@email5.net","123456789");
    ticketPage.gotoBottom();
    let x = await ticketPage.getTicket();
    ticketPage.checkAndAddTickets(x,ticket);
    ticketPage.openUrl();
    ticketPage.addValidFilter(ticket);
})

TestCase("Cancel ticket",async()=>{
    let ticketPage = new MyTicketPage();
    let loginPage = new LoginPage();
    let bookPage = new BookTicketPage();
    const ticket = importData("./data/ticket.json");
    ticketPage.openUrl();
    loginPage.loginWithAccount("vexosox474@email5.net","123456789");
    ticketPage.gotoBottom();
    let x = await ticketPage.getTicket();
    ticketPage.checkAndCancelAmountTicket(x,ticket);
})


TestCase("Verify filter disappear there when page has less than 6 row after delete ticket",async()=>{
    let ticketPage = new MyTicketPage();
    let loginpage = new LoginPage();
    const ticket = importData("./data/ticket.json");
    ticketPage.openUrl();
    loginpage.loginWithAccount("vexosox474@email5.net","123456789");
    ticketPage.gotoBottom();
    let x = await ticketPage.getTicket();
    ticketPage.checkAndAddTickets(x,ticket);
    ticketPage.openUrl();
    ticketPage.deleteAllTicket();
    ticketPage.checkFilterDisappear();
})




