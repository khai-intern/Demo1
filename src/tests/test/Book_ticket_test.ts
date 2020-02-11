import {gondola, TestModule, TestCase, importData} from "gondolajs";
import { BookTicketPage } from "../pages/book_ticket";
import { LoginPage } from "../pages/Login_Page";
import { MyTicketPage } from "../pages/my_ticket";

TestModule("Book Ticket")

// TestCase("Verify...",async()=>{
//     let book = new bookticket();
//     book.open();
// })

TestCase("Verify that user can access book ticket page when clicking book ticket tab",async()=>{
    let bookPage = new BookTicketPage();
    let loginPage = new LoginPage();
    bookPage.OpenUrl();
    
    loginPage.loginWithAccount("vexosox474@email5.net","123456789");
    gondola.checkControlExist("//fieldset[1]");
})

TestCase("Verify that depart date is alway more than 2 days from now",async()=>{
  let bookPage = new BookTicketPage();
  let loginPage = new LoginPage();
  bookPage.OpenUrl();
  
  loginPage.loginWithAccount("vexosox474@email5.net","123456789");
  bookPage.GotoBottom();
  bookPage.CheckDate();
  
})
TestCase("Verify that user can book ticket",async()=>{
    let bookPage = new BookTicketPage();
    let ticketPage = new MyTicketPage();
    let loginPage = new LoginPage();
    loginPage.openUrl();
    loginPage.loginWithAccount("vexosox474@email5.net","123456789");
    ticketPage.openUrl();
    bookPage.GotoBottom();
    let x = await gondola.getElementCount("tr");
    bookPage.BookTicket(x);
})

TestCase("Verify...",async()=>{

    let bookPage = new BookTicketPage();
    let loginPage = new LoginPage();
    loginPage.openUrl();
    loginPage.loginWithAccount("vexosox474@email5.net","123456789");
    bookPage.OpenUrl();
    bookPage.GotoBottom();
    bookPage.CheckSelectListBox();
})