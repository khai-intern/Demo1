import {gondola,page,action,locator} from "gondolajs";
@page
export class bookticket{
    @locator
    date = "//select[@name='Date']";
    @locator
    depart = "//select[@name='DepartStation']";
    @locator
    arive = "//select[@name='ArriveStation']";
    @locator 
    seat = "//select[@name='SeatType']";
    @locator
    amouth = "//select[@name='TicketAmount']";
    @locator
    btnbook = "//input[@value='Book ticket']";
    url = "http://www.railway.somee.com/Page/BookTicketPage.cshtml";
    titletext = "Safe Railway - Book Ticket";
    @action("Open","Open link")
    async open (){
        gondola.navigate(this.url);
        gondola.maximize();
    }
    @action("Check","Check title book ticket page")
    async checktitle (){
        gondola.checkWindowExist(this.titletext);
    }
    clickbtn = (btn : string)=>{
        gondola.click({xpath:btn});
    }
    checktext = (strcss : string, strtext : string) =>{
        gondola.checkText(strcss,strtext);
    }
    gotobottom = ()=>{
        gondola.executeScript(function () {
            const scrollingElement = (document.scrollingElement || document.body)
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
        });
        
    }
    @action("Add","Add object ")
    async Add(strdate:string,strdepart:string,strarrive:string,strseat:string,stramouth:string){
        gondola.select(this.date,strdate);
        gondola.select(this.depart,strdepart);
        gondola.select(this.arive,strarrive);
        gondola.select(this.seat,strseat);
        gondola.select(this.amouth,stramouth);
        this.clickbtn(this.btnbook);
    }
    @action("","")
    async checkdate(){
        let value = await gondola.getText({"css":"select[name='Date'] > [value='3']"});
        let x = value.split("/",3);
        let date = x[1].toString();
        let y = new Date().getDate();
        y = y + 2;
        let ele : string = y.toString(); 
        gondola.checkEqual(ele,date);
    }
}