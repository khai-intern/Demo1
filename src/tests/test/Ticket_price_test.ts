import {gondola, TestModule, TestCase, importData} from "gondolajs";
import { ticket_price } from "../pages/ticket_price";

TestModule("Ticket Price Page");

TestCase("Verify that train ticket list is displayed when clicking ticket price",async ()=>{
    let ticket : ticket_price = new ticket_price();
    ticket.open();
    gondola.checkControlExist("//tbody[1]");
})

TestCase("Verify that user can access ticket price page when clicking check price button",async()=>{
    let ticket : ticket_price = new ticket_price();
    const ele = importData("./data/ticketprice.json");
    let index = 0;
    while(index<ele.length){
      ticket.open();
      if(index>7){
        ticket.gotobottom();
      }
      ticket.clickbtn(ele[index].xpath);
      index++;
    }
})