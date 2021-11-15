class Car{
    constructor(model, colour){
        this.model = model;
        this.colour = colour;
    }
}

function changeColour(car, newColour){
    car.colour = newColour;
}
let car1 = new Car("Corvette","blue");
let car2 = new Car("Mustang","red");

changeColour(car1, "purple");
changeColour(car2, "pink");

console.log(car1.model, car1.colour)
console.log(car2.model, car2.colour)
