import {gondola, TestModule, TestCase, importData} from "gondolajs";
import { time_table } from "../pages/time_table";

TestModule("Timetable")

TestCase("Check title text",async()=>{
    let timetb = new time_table();
    timetb.open();
    timetb.checktitletext();
})

TestCase("Verify that timetable is dispalyed when clicking timetable tab",async()=>{
  let timetb = new time_table();
  timetb.open();
  gondola.checkControlExist("//div[@class='DivTable']");
})

TestCase("Verify that user can access ticket price page when clicking check price button from train timetable",async()=>{
    let timetb = new time_table();
    const ele = importData("./data/timetable.json");
    let index = 0;
    while(index < ele.length){
      timetb.open();
      timetb.clickbtn(ele[index].title)
      index ++;
    }
})

TestCase("Verify that user can access book ticket page when clicking book ticket button from train timetable",async()=>{
    let timetb = new time_table();
    const ele = importData("./data/timetable.json");
    let index = 0;
    while(index < ele.length){
      timetb.open();
      timetb.clickbtn(ele[index].book)
      index ++;
    }
})