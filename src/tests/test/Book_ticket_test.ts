import {gondola, TestModule, TestCase, importData} from "gondolajs";
import { bookticket } from "../pages/book_ticket";
import { LoginPage } from "../pages/Login_Page";
import { Myticket } from "../pages/my_ticket";

TestModule("Book Ticket")

// TestCase("Verify...",async()=>{
//     let book = new bookticket();
//     book.open();
// })

TestCase("Verify that user can access book ticket page when clicking book ticket tab",async()=>{
    let book = new bookticket();
    book.open();
    let loginpage = new LoginPage();
    loginpage.login("vexosox474@email5.net","123456789");
    gondola.checkControlExist("//fieldset[1]");
})

TestCase("Verify that depart date is alway more than 2 days from now",async()=>{
  let book = new bookticket();
  book.open();
  let loginpage = new LoginPage();
  loginpage.login("vexosox474@email5.net","123456789");
  book.gotobottom();
  book.checkdate();
  
})
TestCase("Verify that user can book ticket",async()=>{
    let book = new bookticket();
    let myticket = new Myticket();
    
    let loginpage = new LoginPage();
    loginpage.open();
    loginpage.login("vexosox474@email5.net","123456789");
    myticket.open();
    book.gotobottom();
    let x = await gondola.getElementCount("tr");
    const ticket = importData("./data/ticket.json");
    let index = 0;
    if(x<13){
      while(index < (13-x)){
        book.open();
        book.gotobottom();
        book.Add(ticket[index].date,ticket[index].depart,ticket[index].arrive,ticket[index].seat,ticket[index].amouth);
        book.checktext("h1","Ticket booked successfully!");
        index++;
      }
    } else {
      myticket.cancel();
      book.open();
      book.gotobottom();
      book.Add(ticket[index].date,ticket[index].depart,ticket[index].arrive,ticket[index].seat,ticket[index].amouth)
    }
})

TestCase("Verify...",async()=>{
    let book = new bookticket();
    book.open();
    let loginpage = new LoginPage();
    loginpage.login("vexosox474@email5.net","123456789");
    book.gotobottom();
    const ele = importData("./data/departdate.json")
    const ele2 = importData("./data/departfrom.json");
    const ele3 = importData("./data/seat.json");
    for(var i = 0;i< ele.length ; i++){
      gondola.select("[name='Date']",ele[i].date);
      for(var j = 0;j<ele2.length;j++){
        gondola.select("[name='DepartStation']",ele2[j].depart);
        //var item = await gondola.getSelectedItems("//select[@name='ArriveStation']");
        //for(var k = 1;k<item.length;k++){
          //gondola.select("[name='ArriveStation']",item[k]);
          for(var g = 0;g<ele3.length;g++){
            gondola.select("[name='SeatType']",ele3[g].type);
            // const item2 = await gondola.getSelectedItems("//select[@name='TicketAmount']");
            // for(var h = 0;i<item2.length;h++){
            //   gondola.select("[name='TicketAmount']",item2[h]);
            // }
          }
        //}
      }
    }
})