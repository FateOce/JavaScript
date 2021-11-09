let hello;
let x = "Yo";
let y = "Yo!";

// hello = function(){
//     return "Hello World!"
// }
hello = function(x, y){
    console.log(x);
    console.log(y);
}
hello(x,y);


hello = (x , y) => {
    console.log(x);
    console.log(y);
}
hello(x,y);