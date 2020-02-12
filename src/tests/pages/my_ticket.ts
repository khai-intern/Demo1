import {gondola,page,locator,action} from "gondolajs";
import { BookTicketPage } from "./book_ticket";
import { IErrorInfo } from "gondolajs/built/builtin";
@page
export class MyTicketPage{
    url : string = "http://www.railway.somee.com/Page/ManageTicket.cshtml";
    titletext : string= "Safe Railway - My Ticket";
    @locator
    buttncancel : string ="//table[@class='MyTable']//tr[2]//input[@value='Cancel']"
    @locator
    departbox = "//select[@name='FilterDpStation']";
    @locator
    arrivebox = "//select[@name='FilterArStation']";
    @locator
    datebox = "//input[@name='FilterDpDate']";
    @locator
    statusbox = "//select[@name='FilterStatus']";
    // constructor(url : string, titletext : string){
    //     this.url = url;
    //     this.titletext = titletext;
    // }
    // seturl(url : string){
    //     this.url = url;
    // }
    // geturl(){
    //     return this.url;
    // }
    openUrl = () =>{
        gondola.navigate(this.url);
        gondola.maximize();
    }
    clickButton = (btn : string)=>{
        gondola.click({xpath:btn});
    }
    checkText = (strcss : string, strtext : string) =>{
        gondola.checkText(strcss,strtext);
    }
    gotoBottom = ()=>{
        gondola.executeScript(function () {
            const scrollingElement = (document.scrollingElement || document.body)
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
        });
    }
    @action("cancel","cancel ticket")
    async cancelTicket(){
        gondola.click({xpath:this.buttncancel});
        gondola.clickPopup("ok");
    }
    async checkAndCancelAmountTicket(x:any,ticket:any){
        let bookPage = new BookTicketPage();
        if(x==0){
            bookPage.OpenUrl();
            bookPage.GotoBottom();
            bookPage.AddTicket(ticket[0].date,ticket[0].depart,ticket[0].arrive,ticket[0].seat,ticket[0].amouth);
            this.openUrl();
            this.gotoBottom();
            let z = await gondola.getElementCount("tr");
            this.cancelTicket();
            let y = await gondola.getElementCount("tr");
            gondola.checkNotEqual(z,y);
        }else{
            this.cancelTicket();
            let y = await gondola.getElementCount("tr");
            gondola.checkNotEqual(x,y);
        }
    }
    async checkAndAddTickets(x:any,ticket:any){
        let book = new BookTicketPage();
        let index = 0;
        if(x==0 || x<9){
            while(index < (10-x)){
                book.OpenUrl();
                book.GotoBottom();
                book.AddTicket(ticket[index].date,ticket[index].depart,ticket[index].arrive,ticket[index].seat,ticket[index].amouth);
                index++;
            }
        } else if(x >9){
            while(index < (13-x)){
                book.OpenUrl();
                book.GotoBottom();
                book.AddTicket(ticket[index].date,ticket[index].depart,ticket[index].arrive,ticket[index].seat,ticket[index].amouth);
                index++;
            }
        }
    }  
    async deleteAllTicket (){
        let x = 10
        while (x>0){
            this.cancelTicket();
            x--;
        }
    }
    checkFilterDisappear = ()=>{
        gondola.checkControlNotExist("//div[@class='Filter']");
    }
    checkFilterAppear =()=>{
        gondola.checkControlExist("//div[@class='Filter']");
    }
    async getTicket (){
        let x = await gondola.getElementCount("tr");
        return x;
    }
    addFilter = (strdepart:string,strarrive:string)=>{
        gondola.select(this.departbox,strdepart);
        gondola.select(this.arrivebox,strarrive);
        //gondola.select(this.datebox,strdate);
        //gondola.select(this.statusbox,strstatus);
        this.clickButton("//input[@value='Apply filter']");
    }
    addValidFilter = (ticket:any)=>{
        let index = 0;
        this.addFilter(ticket[index].depart,ticket[index].arrive)
    }
}