import {gondola,locator,page,action} from "gondolajs";
@page
export class ChangePasswordPage{
    @locator
    currpass = "currentPassword";
    @locator
    newpass = "newPassword" ;
    @locator
    confirmpass = "confirmPassword";
    @locator
    buttonchange = "//input[@value='Change Password']"
    url = "http://www.railway.somee.com/Account/ChangePassword.cshtml"
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
    changePassword(strcurr:string,strnew:string,strcon:string){
        this.inputValid(this.currpass, strcurr);
        this.inputValid(this.newpass,strnew);
        this.inputValid(this.confirmpass,strcon);
        this.gotoBottom();
        this.clickButton();
        this.checkText(".message","Your password has been updated!")
    }
    clickButton = ()=>{
        gondola.click({xpath:this.buttonchange});
    }
    checkText = (strcss : string, strtext : string) =>{
        gondola.checkText(strcss,strtext);
    }
    inputValid = (strid:string,strvalid:string)=>{
        gondola.enter({id: strid},strvalid);
    }
    gotoBottom = ()=>{
        gondola.executeScript(function () {
            const scrollingElement = (document.scrollingElement || document.body)
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
        });
        
    }
    openUrl = ()=>{
        gondola.navigate(this.url);
        this.gotoBottom();
    }
}