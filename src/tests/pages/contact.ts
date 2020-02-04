import {gondola,page,locator,action} from "gondolajs";
@page
export class contact{
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
    open = () => {
        gondola.navigate(this.url);
    }
    clickbtn = (btn : string)=>{
        gondola.click({xpath:btn});
    }
    checktext = (strcss : string, strtext : string) =>{
        gondola.checkText(strcss,strtext);
    }
}