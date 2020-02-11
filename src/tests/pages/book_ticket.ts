import {gondola,page,action,locator, importData} from "gondolajs";
import { MyTicketPage } from "./my_ticket";
const ticket = importData("./data/ticket.json");
const ele = importData("./data/departdate.json")
const ele2 = importData("./data/departfrom.json");
const ele3 = importData("./data/seat.json");
@page
export class BookTicketPage{
    @locator
    date = "//select[@name='Date']";
    @locator
    depart = "//select[@name='DepartStation']";
    @locator
    arrive = "//select[@name='ArriveStation']";
    @locator 
    seatType = "//select[@name='SeatType']";
    @locator
    amouthTicket = "//select[@name='TicketAmount']";
    @locator
    buttonBook = "//input[@value='Book ticket']";
    url = "http://www.railway.somee.com/Page/BookTicketPage.cshtml";
    titletext = "Safe Railway - Book Ticket";
    @action("Open","Open link")
    async OpenUrl (){
        gondola.navigate(this.url);
        gondola.maximize();
    }
    @action("Check","Check title book ticket page")
    async CheckTitle (){
        gondola.checkWindowExist(this.titletext);
    }
    ClickButton = (btn : string)=>{
        gondola.click({xpath:btn});
    }
    CheckText = (strcss : string, strtext : string) =>{
        gondola.checkText(strcss,strtext);
    }
    GotoBottom = ()=>{
        gondola.executeScript(function () {
            const scrollingElement = (document.scrollingElement || document.body)
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
        });
        
    }
    @action("Add","Add object ")
    async AddTicket(strdate:string,strdepart:string,strarrive:string,strseat:string,stramouth:string){
        gondola.select(this.date,strdate);
        gondola.select(this.depart,strdepart);
        gondola.select(this.arrive,strarrive);
        gondola.select(this.seatType,strseat);
        gondola.select(this.amouthTicket,stramouth);
        this.ClickButton(this.buttonBook);
    }
    @action("","")
    async CheckDate(){
        
        let value = await gondola.getText({"css":"select[name='Date'] > [value='3']"});
        let x = value.split("/",3);
        let date = x[1].toString();
        let day = new Date().getDate();
        day = day + 3;
        let ele : string = day.toString(); 
        gondola.checkEqual(ele,date);
    }
    BookTicket = (x:any)=>{
        let index = 0;
        let myTicket = new MyTicketPage();
        if(x<13){
            this.OpenUrl();
            this.GotoBottom();
            this.AddTicket(ticket[index].date,ticket[index].depart,ticket[index].arrive,ticket[index].seat,ticket[index].amouth);
            this.CheckText("h1","Ticket booked successfully!");
        } else {
        myTicket.cancelTicket();
        this.OpenUrl();
        this.GotoBottom();
        this.AddTicket(ticket[index].date,ticket[index].depart,ticket[index].arrive,ticket[index].seat,ticket[index].amouth)
        }
    }
    CheckSelectListBox = ()=>{
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
    }
}