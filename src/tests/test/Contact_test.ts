import {gondola, TestCase, TestModule} from "gondolajs";
import { ContactPage } from "../pages/contact";

TestModule("Contact Page")

TestCase("Verify that mailbox is display when clicking admin's mail.",async()=>{
    let contactpage = new ContactPage();
    contactpage.openUrl();
    contactpage.clickButton(contactpage.email);
    gondola.wait(2);
})