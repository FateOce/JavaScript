class Car{

    constructor(make,model,year,colour){
        this.make = make;
        this.model = model;
        this.year = year;
        this.colour = colour;  
    }

    drive(){
        console.log("You Drive the car!");
    }
    break(){
        console.log("You step on the breaks!");
    }
}

    let car1 = new Car("Ford", "Mustang", 2022, "Red");
    let car2 = new Car("Chevy","Corvette",2021,"blue");

 console.log(car1.make);
 console.log(car1.model);
 console.log(car1.year);
 console.log(car1.colour);
 
 console.log(car2.make);
 console.log(car2.model);
 console.log(car2.year);
 console.log(car2.colour);
