
let score = function(){
    let points = 0;
    return function(){
        points += 1;
    return points;
    }   
}();

//points += 100;
console.log(score());
console.log(score());
console.log(score());