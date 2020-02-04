import {gondola, TestCase, TestModule} from "gondolajs";
import { contact } from "../pages/contact";

TestModule("Contact Page")

TestCase("Verify that mailbox is display when clicking admin's mail.",async()=>{
    let contactpage : contact = new contact();
    contactpage.open();
    contactpage.clickbtn(contactpage.email);
    gondola.wait(5);
})