class Vehicle{

    drive(){
        console.log("You drive the vehicle");
    }
}

class Car extends Vehicle{
    drive(){
        console.log("You drive the car!");
    }
}
class RaceCar extends Car{
    drive(){
        console.log("You drive the racecar!!!");
    }
}

let raceCar = new RaceCar();
let car = new Car();

raceCar.drive()