import {gondola, TestModule, TestCase, importData} from "gondolajs";
import {faq} from "../pages/faq"
import { LoginPage } from "../pages/Login_Page";
TestModule("FAQ");

TestCase("Check title text",async()=>{
    let faqs = new faq();
    faqs.open();
    faqs.checktitletext();
});

TestCase("Check link ask",async()=>{
    let faqs = new faq();
    faqs.open();
    faqs.scrolltotop();
    const ele = importData("./data/faq.json");
    let index = 0;
    while(index < ele.length){
      gondola.click({css:ele[index].css});
      index++;
    }
});
TestCase("Check link create an account",async()=>{
    let faqs = new faq();
    faqs.open();
    faqs.clickbtn(faqs.crbtn);
});
TestCase("Check link book ticket",async()=>{
    let faqs = new faq();
    faqs.open();
    
    faqs.clickbtn(faqs.bookbtn);
    let text = await gondola.getText({"css":"h1"});
    if(text == "Book ticket"){
        return true;
    } else {
        let login = new LoginPage();
        login.login("vexosox474@email5.net","123456789");
        gondola.checkText("h1","Book ticket");
    }
});