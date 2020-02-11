import {gondola, TestCase, TestModule} from "gondolajs";
import { HomePage } from "../pages/Home_Page";
import { LoginPage } from "../pages/Login_Page";

TestModule("Home Page");
TestCase("Check window existing",async() => {
    let homePage = new HomePage();
    homePage.openUrl();
    homePage.checkTitle();
});

TestCase("Create an account",async()=>{
    let homepage = new HomePage();
    homepage.openUrl();
    homepage.checkCreatebutton();
})


