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
    public btnlogin = "//input[@value='login']";
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
    public async clickLoginbtn(){
        gondola.click(this.btnlogin);
    }
    @action("Login","Login with existing account")
    public async login(strusername: string, strpassword : string){
        gondola.waitForElement(this.username,20);
        gondola.enter(this.username,strusername);
        gondola.enter(this.password,strpassword);
        gondola.click(this.btnlogin);
    }
    open = () =>{
        gondola.maximize();
        gondola.navigate(this.geturl());

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