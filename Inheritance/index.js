
class Animal{

    constructor(){
        this.alive = true;
    }
    eat(){
        console.log("This animal us eating")
    }
}

class Rabbit extends Animal{
run(){
    console.log("This rabbit is running");
}
}
class Fish extends Animal{
    swim(){
        console.log("This fish is swimming")
    }
}
class Hawk extends Animal{
    fly(){
        console.log("This hawk is flying")
    }

}

let rabbit = new Rabbit();
let fish = new Fish();
let hawk = new Hawk();

console.log(rabbit.alive);
rabbit.eat();

rabbit.run();
fish.swim();
hawk.fly();
