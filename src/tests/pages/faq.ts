import {gondola,page,locator,action} from "gondolajs";
@page
export class faq{
    url = "http://www.railway.somee.com/Page/FAQ.cshtml#1";
    titletext = "Safe Railway - FAQ";
    open = () =>{
        gondola.navigate(this.url);
    }
    clickbtn = (btn : string)=>{
        gondola.click({xpath:btn});
    }
    checktext = (strcss : string, strtext : string) =>{
        gondola.checkText(strcss,strtext);
    }
    checktitletext = () =>{
        gondola.checkWindowExist(this.titletext);
    }
    scrolltotop = ()=>{
        gondola.executeScript(function () {
            let scrollingElement = (document.scrollingElement || document.body)
            scrollingElement.scrollTop = 0;
        });
    }
}