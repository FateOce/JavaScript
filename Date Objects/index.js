date = new Date(0);
date = new Date();
date = new Date(2022, 3, 4, 18, 1, 2, 3);
date = new Date("20 April, 2022 16:20:01:02");


// var ti = window.prompt("Enter date and time e.g. 10 Oct 2021, 15:00")
// date = new Date(ti);
// document.write("📅 Your time and date is: ", date );

let year = date.getFullYear();
let month = date.getMonth();
let dayOfWeek = date.getDay();
let dayOfMonth = date.getDate();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let milliSeconds = date.getMilliseconds();


// console.log(year);
// console.log(month);
// console.log(dayOfWeek);
// console.log(dayOfMonth);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);
// console.log(milliSeconds);

date.setFullYear(2023);
date.setMonth(11);
date.setDate(25);
date.setHours(0);
date.setMinutes(0);
date.setSeconds(0);
date.setMilliseconds(0);

console.log(date);