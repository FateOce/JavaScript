var cars = ["Mustang","Corvette","Jaguar"];

console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

cars.push("Tesla");
cars.pop();
console.log(cars[3]);

var numberOfCars = cars.length; 

//cars = cars.sort();
//cars = cars.reverse();
var lastCar = cars[cars.length-1];


console.log(cars);
console.log(numberOfCars);
console.log(lastCar);