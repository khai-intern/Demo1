import {gondola, TestModule, TestCase, importData} from "gondolajs";
import { time_table } from "../pages/time_table";

const buttoncheck = [
    {
      id: 1,
      title: "//tbody[1]/tr[1]//a[.='check price']"
    },
    {
      id: 2,
      title: "//tr[2]//a[.='check price']",
    },
    {
      id: 3,
      title: "//tr[3]//a[.='check price']"
    },
    {
      id: 4,
      title: "//tr[4]//a[.='check price']"
    },
    {
      id: 5,
      title: "//tr[5]//a[.='check price']"
    },
    {
      id: 6,
      title: "//tr[6]//a[.='check price']"
    },
    {
      id: 7,
      title: "//tr[7]//a[.='check price']"
    },
    {
      id: 8,
      title: "//tr[8]//a[.='check price']"
    },
    {
      id: 9,
      title: "//tr[9]//a[.='check price']"
    },
    {
      id: 10,
      title: "//tr[10]//a[.='check price']"
    },
    {
      id: 11,
      title: "//tr[11]//a[.='check price']"
    },
    {
      id: 12,
      title: "//tr[12]//a[.='check price']"
    },
    {
      id: 13,
      title: "//tr[13]//a[.='check price']"
    },
    {
      id: 14,
      title: "//tr[14]//a[.='check price']"
    },
    {
      id: 15,
      title: "//tr[15]//a[.='check price']"
    },
    {
      id: 16,
      title: "//tr[16]//a[.='check price']"
    },
    {
      id: 17,
      title: "//tr[17]//a[.='check price']"
    },
    {
      id: 18,
      title: "//tr[18]//a[.='check price']"
    },
    {
      id: 19,
      title: "//tr[19]//a[.='check price']"
    },
    {
      id: 20,
      title: "//tr[20]//a[.='check price']"
    },
    {
      id: 21,
      title: "//tr[21]//a[.='check price']"
    },
    {
      id: 22,
      title: "//tr[22]//a[.='check price']"
    },
    {
      id: 23,
      title: "//tr[23]//a[.='check price']"
    },
    {
      id: 24,
      title: "//tr[24]//a[.='check price']"
    },
];
const buttonbook = [
    {
      id: 1,
      title: "//tbody[1]/tr[1]//a[.='book ticket']"
    },
    {
      id: 2,
      title: "//tr[2]//a[.='book ticket']",
    },
    {
      id: 3,
      title: "//tr[3]//a[.='book ticket']"
    },
    {
      id: 4,
      title: "//tr[4]//a[.='book ticket']"
    },
    {
      id: 5,
      title: "//tr[5]//a[.='book ticket']"
    },
    {
      id: 6,
      title: "//tr[6]//a[.='book ticket']"
    },
    {
      id: 7,
      title: "//tr[7]//a[.='book ticket']"
    },
    {
      id: 8,
      title: "//tr[8]//a[.='book ticket']"
    },
    {
      id: 9,
      title: "//tr[9]//a[.='book ticket']"
    },
    {
      id: 10,
      title: "//tr[10]//a[.='book ticket']"
    },
    {
      id: 11,
      title: "//tr[11]//a[.='book ticket']"
    },
    {
      id: 12,
      title: "//tr[12]//a[.='book ticket']"
    },
    {
      id: 13,
      title: "//tr[13]//a[.='book ticket']"
    },
    {
      id: 14,
      title: "//tr[14]//a[.='book ticket']"
    },
    {
      id: 15,
      title: "//tr[15]//a[.='book ticket']"
    },
    {
      id: 16,
      title: "//tr[16]//a[.='book ticket']"
    },
    {
      id: 17,
      title: "//tr[17]//a[.='book ticket']"
    },
    {
      id: 18,
      title: "//tr[18]//a[.='book ticket']"
    },
    {
      id: 19,
      title: "//tr[19]//a[.='book ticket']"
    },
    {
      id: 20,
      title: "//tr[20]//a[.='book ticket']"
    },
    {
      id: 21,
      title: "//tr[21]//a[.='book ticket']"
    },
    {
      id: 22,
      title: "//tr[22]//a[.='book ticket']"
    },
    {
      id: 23,
      title: "//tr[23]//a[.='book ticket']"
    },
    {
      id: 24,
      title: "//tr[24]//a[.='book ticket']"
    },
];
const button = importData("../data/timtable.json");
TestModule("Timetable")

// TestCase("Check title text",async()=>{
//     let timetb = new time_table("http://www.railway.somee.com/Page/TrainTimeListPage.cshtml","Safe Railway - Train Timetable");
//     timetb.open();
//     timetb.checktitletext();
// })

TestCase("Check button check price",async()=>{
    let timetb = new time_table("http://www.railway.somee.com/Page/TrainTimeListPage.cshtml","Safe Railway - Train Timetable");
   
    for(var i = 0;i<24;i++){
        timetb.open();
        timetb.gotobottom();
        // let path = "["+i+"].title";
        // const value = await gondola.getJSONValue(buttoncheck, path);
        timetb.clickbtn(button[i].title);
    }
    
})

// TestCase("Check button book price",async()=>{
//     let timetb = new time_table("http://www.railway.somee.com/Page/TrainTimeListPage.cshtml","Safe Railway - Train Timetable");
   
//     for(var i = 0;i<24;i++){
//         timetb.open();
//         timetb.gotobottom();
//         let path = "["+i+"].title";
//         const value = await gondola.getJSONValue(buttonbook, path);
//         timetb.clickbtn(value[0]);
//     }
    
// })