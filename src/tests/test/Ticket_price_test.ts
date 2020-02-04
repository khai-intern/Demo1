import {gondola, TestModule, TestCase, importData} from "gondolajs";
import { ticket_price } from "../pages/ticket_price";
const buttoncheckprice = [
    {
      id: 1,
      title: "//tr[2]//a[.='Check Price']"
    },
    {
      id: 2,
      title: "//tr[3]//a[.='Check Price']",
    },
    {
      id: 3,
      title: "//tr[4]//a[.='Check Price']",
    },
    {
      id: 4,
      title: "//tr[5]//a[.='Check Price']",
    },
    {
      id: 5,
      title: "//tr[6]//a[.='Check Price']",
    },
    {
      id: 6,
      title: "//tr[8]//a[.='Check Price']",
    },
    {
      id: 7,
      title: "//tr[9]//a[.='Check Price']",
    },
    {
      id: 8,
      title: "//tr[10]//a[.='Check Price']",
    },
    {
      id: 9,
      title: "//tr[12]//a[.='Check Price']",
    },
    {
      id: 10,
      title: "//tr[13]//a[.='Check Price']",
    },
    {
      id: 11,
      title: "//tr[14]//a[.='Check Price']",
    },
    {
      id: 12,
      title: "//tr[15]//a[.='Check Price']",
    },
    {
      id: 13,
      title: "//tr[17]//a[.='Check Price']",
    },
    {
      id: 14,
      title: "//tr[18]//a[.='Check Price']",
    },
    {
      id: 15,
      title: "//tr[19]//a[.='Check Price']",
    },
    {
      id: 16,
      title: "//tr[20]//a[.='Check Price']",
    },
    {
      id: 17,
      title: "//tr[22]//a[.='Check Price']",
    },
    {
      id: 18,
      title: "//tr[23]//a[.='Check Price']",
    },
    {
      id: 19,
      title: "//tr[24]//a[.='Check Price']",
    },
    {
      id: 20,
      title: "//tr[25]//a[.='Check Price']",
    },
    {
      id: 21,
      title: "//tr[27]//a[.='Check Price']",
    },
    {
      id: 22,
      title: "//tr[28]//a[.='Check Price']",
    },
    {
      id: 23,
      title: "//tr[29]//a[.='Check Price']",
    },
    {
      id: 24,
      title: "//tr[30]//a[.='Check Price']",
    }
];
TestModule("Ticket Price Page");

TestCase("Verify that train ticket list is displayed when clicking ticket price",async ()=>{
    let ticket : ticket_price = new ticket_price();
    ticket.open();
    gondola.checkWindowExist("Train ticket price list");
})

TestCase("Verify that user can access ticket price page when clicking check price button",async()=>{
    let ticket : ticket_price = new ticket_price();
    for(var i = 0;i<buttoncheckprice.length;i++){
        ticket.open();
        if(i>=7){
            ticket.gotobottom();
        }
        let path = "["+i+"].title";
        const value = await gondola.getJSONValue(buttoncheckprice, path);
        ticket.clickbtn(value[0]);
    }
})