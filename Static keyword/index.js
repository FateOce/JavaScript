class Car{

static numberOfCars =0;

static beginRace(){
    console.log("The race has begun!");
}


    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }

}


let car1 = new Car("Mustang");
let car2 = new Car("corvette")
let car3 = new Car("Challenger");

console.log(car1.numberOfCars);
Car.beginRace();



//-----------------------------------------------------

Math.PI;
Math.round();