class Car{

    constructor(make,model,year,colour){
        this.make = make;
        this.model = model;
        this.year = year;
        this.colour = colour;  
    }

    drive(){
        console.log("You Drive the",this.model);
    }
    break(){
        console.log("You step on the",this.model,"'s breaks!");

    }
    whatIsThis(){
        return this;
    }

}
    let car1 = new Car("Ford", "Mustang", 2022, "Red");
    let car2 = new Car("Chevy","Corvette",2021,"blue");

    car1.drive();
    car2.break();
    console.log(this);