class User {

    constructor(first, last){
        this.first = first;
        this.last = last;
    }
    
    set first(value){
        this.firstName = value.toUpperCase();
    }
    set last(value){
        this.lastName = value.toUpperCase();
    }
    get fullName(){
    return this.firstName+" "+this.lastName;
    }
};

let user1 = new User("Spongebob", "Squarepants");
let user2 = new User("Patrick", "Star");

console.log(user1.fullName);
console.log(user2.fullName);