import {gondola, TestModule, TestCase, importData} from "gondolajs";
import { TicketPricePage } from "../pages/ticket_price";

TestModule("Ticket Price Page");

TestCase("Verify that train ticket list is displayed when clicking ticket price",async ()=>{
    let pricePage  = new TicketPricePage();
    pricePage.openUrl();
    gondola.checkControlExist("//tbody[1]");
})

TestCase("Verify that user can access ticket price page when clicking check price button",async()=>{
    let pricePage  = new TicketPricePage();
    const ele = importData("./data/ticketprice.json");
    pricePage.checkClickButton(ele);
})