import {gondola,page,action,locator} from "gondolajs";
@page
export class TimeTablePage{
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
    openUrl = () =>{
        gondola.navigate(this.url);
        gondola.maximize();
        this.gotoBottom();
    }
    clickButton = (btn : string)=>{
        gondola.click({xpath:btn});
    }
    checkText = (strcss : string, strtext : string) =>{
        gondola.checkText(strcss,strtext);
    }
    checkTitleText = () =>{
        gondola.checkWindowExist(this.titletext);
    }
    gotoBottom = ()=>{
        gondola.executeScript(function () {
            const scrollingElement = (document.scrollingElement || document.body)
            scrollingElement.scrollTop = scrollingElement.scrollHeight;
        });
    }
    clickButtons = (ele :any)=>{
        let index = 0;
        while(index < ele.length){
        this.openUrl();
        this.clickButton(ele[index].title)
        index ++;
        }
    }
}