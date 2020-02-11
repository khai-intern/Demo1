import {gondola,page,locator,action} from "gondolajs";
@page
export class ContactPage{
    url : string = "http://www.railway.somee.com/Page/Contact.cshtml";
    @locator
    email = "//a[.='thanh.viet.le@logigear.com']";
    // constructor(url : string, titletext : string){
    //     this.url = url;
    //     this.tittletext = titletext;
    // }
    // seturl(url: string){
    //     this.url = url;
    // }
    // geturl(){
    //     return this.url;
    // }
    openUrl = () => {
        gondola.navigate(this.url);
    }
    clickButton = (btn : string)=>{
        gondola.click({xpath:btn});
    }
    checkText = (strcss : string, strtext : string) =>{
        gondola.checkText(strcss,strtext);
    }
}