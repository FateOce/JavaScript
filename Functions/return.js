function toCelsius(f){
    return (f-32) * (5/9);
};
function toFarenheit(c){
    return (c * 9/5) + 32
}

var myTemp = toFarenheit(37.7);

console.log("My temp in F is", myTemp,"Degrees");
