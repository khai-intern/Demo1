import {gondola,page,locator,action} from "gondolajs";
import { LoginPage } from "./Login_Page";
@page
export class FaqPage{
    createbutton = "//a[.='create an account']";
    bookbutton = "//a[.='Book Ticket page']";
    url = "http://www.railway.somee.com/Page/FAQ.cshtml#1";
    titletext = "Safe Railway - FAQ";

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
    checkTitle = () =>{
        gondola.checkWindowExist(this.titletext);
    }
    scrollTotop = ()=>{
        gondola.executeScript(function () {
            let scrollingElement = (document.scrollingElement || document.body)
            scrollingElement.scrollTop = 0;
        });
    }
    checkBookPage = (text : any)=>{
        if(text == "Book ticket"){
            return true;
        } else {
            let loginPage = new LoginPage();
            loginPage.loginWithAccount("vexosox474@email5.net","123456789");
            gondola.checkText("h1","Book ticket");
        }
    }
    checkLink = (ele:any)=>{
        let index = 0;
        while(index < ele.length){
        gondola.click({css:ele[index].css});
        index++;
    }
    }
    async getText(){
        await gondola.getText({"css":"h1"});
    }
}