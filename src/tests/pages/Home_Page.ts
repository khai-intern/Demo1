import {gondola, action,page,locator} from "gondolajs"
import { IGondolaWeb } from "gondolajs/built/builtin"
@page
export class HomePage {
    @locator
    btn = "//a[.='create an account']";
    url = "http://www.railway.somee.com/Page/HomePage.cshtml";
    title = "Safe Railway - Selenium Automation"
    @action("Check","Check title home page")
    async checktitle (){
        gondola.checkWindowExist(this.title);
    }
    open = () =>{
        gondola.navigate(this.url);
    }
    createacc = ()=>{
        gondola.click({xpath: this.btn});
        gondola.checkText({css: "h1"},"Create account");
    }
}