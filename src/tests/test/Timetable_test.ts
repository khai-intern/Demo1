import {gondola, TestModule, TestCase, importData} from "gondolajs";
import { TimeTablePage } from "../pages/time_table";

TestModule("Timetable")

TestCase("Check title text",async()=>{
    let timePage = new TimeTablePage();
    timePage.openUrl();
    timePage.checkTitleText();
})

TestCase("Verify that timetable is dispalyed when clicking timetable tab",async()=>{
  let timePage = new TimeTablePage();
  timePage.openUrl();
  gondola.checkControlExist("//div[@class='DivTable']");
})

TestCase("Verify that user can access ticket price page when clicking check price button from train timetable",async()=>{
    let timePage = new TimeTablePage();
    const ele = importData("./data/timetable.json");
    timePage.clickButtons(ele);
})

TestCase("Verify that user can access book ticket page when clicking book ticket button from train timetable",async()=>{
    let timePage = new TimeTablePage();
    const ele = importData("./data/timetable.json");
    let index = 0;
    timePage.clickButtons(ele);
})