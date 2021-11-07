var myName = "Christine Dee";
var myStreet = "123 Fake st.";
var myCity = "Sydney NSW 2000";
var myPhone = "02-2222-2222"

// console.log(myName.length);
// console.log(myName.charAt(0));
// console.log(myName.indexOf(" "));
// console.log(myName.lastIndexOf("e"));
// console.log(myName.trim());
// console.log(myName.toUpperCase());
// console.log(myName.toLowerCase());

var firstName = myName.slice(0, 9);
// var firstName = myName.slice(0, myName.indexOf(" "));
console.log(firstName);

var lastName = myName.slice(myName.lastIndexOf(" ") + 1);
console.log(lastName);

var myAddress = myStreet.concat(" ", myCity);
console.log(myAddress);

myPhone = myPhone.replaceAll("-","");
console.log(myPhone);

// var fun = window.prompt("Enter your full name in CAPS! 😊");
// fun = fun.replaceAll("T","7");
// fun = fun.replaceAll("O","0");
// fun = fun.replaceAll("A","4");
// fun = fun.replaceAll("E","3");


// document.write("Hello ", fun, " 🙌🏼");
