import { action, gondola, locator, page } from "gondolajs";
@page
export class LoginPage {
    url : string = "http://www.railway.somee.com/Account/Login.cshtml";
    // constructor(url : string){
    //     this.url = url;
    // }
    // email : string;
    // password : string; 
    // loginbtn : string = "//input[@value='login']";
    @locator
    public username = "//input[@id='username']";
    @locator
    public password = "//input[@id='password']";
    @locator
    public loginbutton = "//input[@value='login']";
    // constructor(url:string,email:string,password:string){
    //     this.url = url;
    //     this.email = email;
    //     this.password = password;
    // }
    seturl = (url: string) =>{
        this.url = url;
    }
    geturl = ()=>{
        return this.url;
    }
    // setemail = (email: string) =>{
    //     this.email = email;
    // }
    // getemail = ()=>{
    //     return this.email;
    // }
    // setpassword = (password: string) =>{
    //     this.password = password;
    // }
    // getpassword = ()=>{
    //     return this.password;
    // }
    @action("Click login button","Click button")
    public async clickLoginbutton(){
        gondola.click(this.loginbutton);
    }
    @action("Login","Login with existing account")
    public async loginWithAccount(strusername: string, strpassword : string){
        gondola.waitForElement(this.username,20);
        gondola.enter(this.username,strusername);
        gondola.enter(this.password,strpassword);
        gondola.click(this.loginbutton);
    }
    openUrl = () =>{
        gondola.maximize();
        gondola.navigate(this.geturl());

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
    getColorBox = ()=>{
        gondola.executeScript(function(){
            const ele = document.getElementsByTagName("input")[0];
            const color = window.getComputedStyle(ele,null).getPropertyValue("outline-color");
            return color;
        })
    }
}