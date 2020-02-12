import {gondola,page,locator,action} from "gondolajs"
@page
export class RegisterPage {
    url : string = "http://www.railway.somee.com/Account/Register.cshtml";
    @locator
    email = "email";
    @locator
    password = "password";
    @locator
    confirmpass = "confirmPassword" ;
    @locator
    pid = "pid";
    @locator
    registerbutton = "//input[@value='Register']";
    // constructor(url:string, email:any, password: any , confirmpass: any, pid:any){
    //     this.url = url;
    //     this.email = email;
    //     this.password = password;
    //     this.confirmpass = confirmpass;
    //     this.pid = pid;
    // }
    // seturl = (url : string)=>{
    //     this.url = url;
    // }
    // geturl = ()=>{
    //     return this.url;
    // }
    // setemail = (email: any) =>{
    //     this.email = email;
    // }
    // getemail = ()=>{
    //     return this.email;
    // }
    // setpassword = (password: any) =>{
    //     this.password = password;
    // }
    // getpassword = ()=>{
    //     return this.password;
    // }
    // setconfirmpass = (confirmpass : any)=>{
    //     this.confirmpass = confirmpass;
    // }
    // getconfirmpass = ()=>{
    //     return this.confirmpass;
    // }
    // setpid = (pid : any)=>{
    //     this.pid = pid;
    // }
    // getpid = ()=>{
    //     return this.pid;
    // }
    clickRegisterButton = () =>{
        gondola.click({xpath: this.registerbutton})
    }
    @action("Register","Register with valid account")
    async registerWithAccount (stremail:string,strpass:string,strcon:string,strpid:string){
        gondola.enter({id: this.email},stremail);
        gondola.enter({id: this.password},strpass);
        gondola.enter({id: this.confirmpass},strcon);
        gondola.enter({id: this.pid},strpid);
        this.clickRegisterButton();
    }
    openUrl = () =>{
        gondola.navigate(this.url);
        gondola.maximize();
        this.gotoBottom();
    }
    clickButton = (btn : string) =>{
        gondola.click({xpath:btn});
    }
    checkText =(strcss : string, strtext:string)=>{
        gondola.checkText({css:strcss},strtext);
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
    // async getColor(pseudo : string){
    //     await gondola.executeScript(function(){
    //         var ele = document.getElementsByTagName("input")[2];
    //         const color2 = window.getComputedStyle(ele, pseudo).getPropertyValue("background-color");
    //         return color2;
    //     });
    // }
}