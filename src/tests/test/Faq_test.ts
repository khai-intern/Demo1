import {gondola, TestModule, TestCase, importData} from "gondolajs";
import {FaqPage} from "../pages/faq"
import { LoginPage } from "../pages/Login_Page";
TestModule("FAQ");

TestCase("Check title text",async()=>{
    let faqPage = new FaqPage();
    faqPage.openUrl();
    faqPage.checkTitle();
});

TestCase("Check link ask",async()=>{
    const ele = importData("./data/faq.json");
    let faqPage = new FaqPage();
    faqPage.openUrl();
    faqPage.scrollTotop();
    faqPage.checkLink(ele);
});
TestCase("Check link create an account",async()=>{
    let faqPage = new FaqPage();
    faqPage.openUrl();
    faqPage.clickButton(faqPage.createbutton);
});
TestCase("Check link book ticket",async()=>{
    let faqPage = new FaqPage();
    faqPage.openUrl();
    faqPage.clickButton(faqPage.bookbutton);
    let text = await faqPage.getText();
    faqPage.checkBookPage(text);
});