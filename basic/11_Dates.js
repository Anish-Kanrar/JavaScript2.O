/*
Date - JavaScript Date objects represent a single moment in time in a platform-independent format. 
Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).
*/
//Date
let myDate = new Date()
console.log(myDate);  //2024-04-08T06:42:51.870Z //not readable
console.log(myDate.toString());   //Mon Apr 08 2024 06:44:20 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString());  //Mon Apr 08 2024
console.log(myDate.toLocaleDateString());   //4/8/2024
console.log(myDate.toISOString());  //2024-04-08T06:51:00.550Z
console.log(typeof myDate);  //object **

let myCreatedDate = new Date(2024, 0 ,23)
console.log(myCreatedDate.toDateString());   //Tue Jan 23 2024


let myCreatedDate_1 = new Date(2024, 3 ,8)
//console.log(myCreatedDate_1.toDateString());  //Mon Apr 08 2024
console.log(myCreatedDate_1.toLocaleString());  //4/8/2024, 12:00:00 AM


let myCreatedDate_2 = new Date("04-08-2024")
console.log(myCreatedDate_2.toLocaleString());   //4/8/2024, 12:00:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp);  //1712560212202 milisecond
console.log(myCreatedDate2.getTime());  
console.log(Date.now()); //1712560352122
console.log(Math.floor(Date.now()/1000));   //1712560439 sec

let newDate = new Date()
console.log(newDate);  //2024-04-08T07:15:24.519Z
console.log(newDate.getMonth() + 1); //4
console.log(newDate.getDay());  //1

// `${newDate.getDay()} and the time`

newDate.toLocaleDateString('default',{
    weekday: "long",
})
