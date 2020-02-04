import {gondola,page,locator,action} from "gondolajs"
@page
export class Register {
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
    registerbtn = "//input[@value='Register']";
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
    clickregister = () =>{
        gondola.click({xpath: this.registerbtn})
    }
    @action("Register","Register with valid account")
    async registerwithacc (stremail:string,strpass:string,strcon:string,strpid:string){
        gondola.enter({id: this.email},stremail);
        gondola.enter({id: this.password},strpass);
        gondola.enter({id: this.confirmpass},strcon);
        gondola.enter({id: this.pid},strpid);
        this.clickregister();
    }
    open = () =>{
        gondola.navigate(this.url);
    }
    clickbtn = (btn : string) =>{
        gondola.click({xpath:btn});
    }
    checktext =(strcss : string, strtext:string)=>{
        gondola.checkText({css:strcss},strtext);
    }
    inputvalid = (strid:string,strvalid:string)=>{
        gondola.enter({id: strid},strvalid);
    }
}