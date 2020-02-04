import {gondola, TestCase, TestModule} from "gondolajs";
import { HomePage } from "../pages/Home_Page";
import { LoginPage } from "../pages/Login_Page";

TestModule("Home Page");
TestCase("Check window existing",async() => {
    let homepage = new HomePage();
    homepage.open();
    homepage.checktitle();
});

TestCase("Create an account",async()=>{
    let homepage = new HomePage();
    homepage.open();
    homepage.createacc();
})


