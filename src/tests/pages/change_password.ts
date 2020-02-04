import {gondola,locator,page,action} from "gondolajs";
@page
export class changepassword{
    @locator
    currpass = "currentPassword";
    @locator
    newpass = "newPassword" ;
    @locator
    confirmpass = "confirmPassword";
    @locator
    btnchange = "//input[@value='Change Password']"
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
    // @action("Change passowrd","Change with valid password")
    // async
    changpassword(strcurr:string,strnew:string,strcon:string){
        this.inputvalid(this.currpass, strcurr);
        this.inputvalid(this.newpass,strnew);
        this.inputvalid(this.confirmpass,strcon);
        this.gotobottom();
    
    }
    clickbtn = ()=>{
        gondola.click({xpath:this.btnchange});
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