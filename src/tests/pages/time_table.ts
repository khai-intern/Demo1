import {gondola,page,action,locator} from "gondolajs";
@page
export class time_table{
    url : string = "http://www.railway.somee.com/Page/TrainTimeListPage.cshtml";
    titletext : string = "Safe Railway - Train Timetable";
    // constructor(url : string, titletext : string){
    //     this.url = url;
    //     this.titletext = titletext;
    // }
    // seturl(url : string){
    //     this.url = url;
    // }
    // geturl(){
    //     return this.url;
    // }
    // settitletext =(titletext : string)=>{
    //     this.titletext = titletext;
    // }
    // gettitletext = () =>{
    //     return this.titletext;
    // }
    open = () =>{
        gondola.navigate(this.url);
        gondola.maximize();
        this.gotobottom();
    }
    clickbtn = (btn : string)=>{
        gondola.click({xpath:btn});
    }
    checktext = (strcss : string, strtext : string) =>{
        gondola.checkText(strcss,strtext);
    }
    checktitletext = () =>{
        gondola.checkWindowExist(this.titletext);
    }
    gotobottom = ()=>{
        gondola.executeScript(function () {
            const scrollingElement = (document.scrollingElement || document.body)
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
        });
        
    }
}