// sayHello();

// function sayHello(){
//     console.log("Hello");
// }

//let greeting = function(){console.log("Hello")};
//let greeting = function(){document.getElementById("myH1").innerHTML = "Hello!"};

let greeting = "Hello"

outputConsole(greeting);

function outputConsole(x) {
    console.log(x);
}

function outputWebsite (x) {
    document.getElementById("myH1").innerHTML = x;
}

// let greeting = ()=>{document.getElementById("myH1").innerHTML = "Hello!"};
// output(greeting);


// //output = func => func(); // not working
// function output(func){
//     func();
//}


let hi = ()=>{console.log("New")};
hi();
