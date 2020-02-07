import {gondola,page,locator,action} from "gondolajs";
@page
export class Myticket{
    url : string = "http://www.railway.somee.com/Page/ManageTicket.cshtml";
    titletext : string= "Safe Railway - My Ticket";
    btncc : string ="input"
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
    open = () =>{
        gondola.navigate(this.url);
        gondola.maximize();
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
    @action("cancel","cancel ticket")
    async cancel(){
        gondola.click({tagName:this.btncc});
        gondola.clickPopup("ok");
    }
    
}