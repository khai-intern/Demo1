import {gondola,locator,page,action} from "gondolajs";
@page
export class changepassword{
    @locator
    currpass = "//input[@id='currentPassword']";
    @locator
    newpass = "//input[@id='newPassword']" ;
    @locator
    confirmpass = "//input[@id='confirmPassword']";
    @locator
    btnchange = "//input[@id='confirmPassword']"
    // constructor(currpass : string, newpass : string, confirmpass: string){
    //     this.currpass = currpass;
    //     this.newpass = newpass;
    //     this.confirmpass = confirmpass;
    // }
    // setcurpass = (currpass : string)=>{
    //     this.currpass = currpass;
    // }
    // getcurrpass = ()=>{
    //     return this.currpass;
    // }
    // setnewpass = (newpass : string)=>{
    //     this.newpass = newpass;
    // }
    // getnewpass = ()=>{
    //     return this.newpass;
    // }
    // setconfirmpass = (confirmpass : string)=>{
    //     this.confirmpass = confirmpass;
    // }
    // getconfirmpass = ()=>{
    //     return this.currpass;
    // }
    @action("Change passowrd","Change with valid password")
    async changpassword(strcurr:string,strnew:string,strcon:string){
        this.inputvalid(this.currpass,strcurr);
        this.inputvalid(this.newpass,strnew);
        this.inputvalid(this.confirmpass,strcon);
        this.gotobottom();
        this.clickbtn(this.btnchange);
    }
    clickbtn = (btn : string)=>{
        gondola.click({xpath:btn});
    }
    checktext = (strcss : string, strtext : string) =>{
        gondola.checkText(strcss,strtext);
    }
    inputvalid = (strid:string,strvalid:string)=>{
        gondola.enter({id: strid},strvalid);
    }
    gotobottom = ()=>{
        gondola.executeScript(function () {
            const scrollingElement = (document.scrollingElement || document.body)
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
        });
        
    }
}