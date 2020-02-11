import {gondola,page,locator,action} from "gondolajs";
@page
export class TicketPricePage{
    url : string = "http://www.railway.somee.com/Page/TrainPriceListPage.cshtml";
    titletext : string = "Safe Railway - Train ticket price list";
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
    checkClickButton = (ele:any)=>{
        let index = 0;
        while(index<ele.length){
            this.openUrl();
            if(index>7){
            this.gotoBottom();
        }
        this.clickButton(ele[index].xpath);
        index++;
    }
    }
}