var human1 = {

    name: "Bob",
    age: 65,

    eat : function(){
        console.log("Bob is eating food")
    },
    
    drink : function(){
        console.log("Bob is drinking alcohol *burp*")
    },
    
    sleep : function(){
        console.log("Bob has passed out");
    }
};

//console.log(human1.name);
//console.log(human1.age);

human1.eat();
human1.drink();
human1.sleep();

var human2 = {

    name: "Sally",
    age: 40,

    eat : function(){
        console.log("Sally is eating food")
    },
    
    drink : function(){
        console.log("Sally is drinking water")
    },
    
    sleep : function(){
        console.log("Sally is asleep");
    }
};

console.log(human2.name);
console.log(human2.age);
human2.eat();
human2.drink();
human2.sleep();