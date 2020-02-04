import {gondola, TestModule, TestCase} from "gondolajs";
import {faq} from "../pages/faq"
const data = [
    {
      id: 1,
      title: "//a[.='How to book a ticket?']"
    },
    {
      id: 2,
      title: "//a[.='Why do my tickets get expired?']",
    },
    {
      id: 3,
      title: "//a[.='How to pay for my tickets?']"
    },
    {
      id: 4,
      title: "//a[.='How many tickets can I book?']"
    },
    {
      id: 5,
      title: "//a[.="+'"'+"I don't see the filter in My Ticket page, why?"+'"'+"]"
    },
    {
      id: 6,
      title: "//a[.='I want to change the station, date, ... on my ticket, what should I do?']"
    },
    {
      id: 7,
      title: "//a[contains(.,'I want to use Opera, Safari, smart phone browsers, ... to access the website but')]"
    },
    {
      id: 8,
      title: "//a[.='I want to ask other questions.']"
    },
];
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
    const value = await gondola.getJSONValue(data, "[0].title");
    faqs.clickbtn(value[0]);
});
TestCase("Check link create an account",async()=>{
    let faqs = new faq();
    faqs.open();
    
    faqs.clickbtn("//a[.='create an account']");
});
TestCase("Check link book ticket when don't login",async()=>{
    let faqs = new faq();
    faqs.open();
    faqs.clickbtn("//a[.='Book Ticket page']");
});