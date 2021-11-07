let storeAUD = [5, 6, 7, 8, 9];

function toEuros(value){
    value *= 0.65;
    return value;
}
let storeEUR = storeAUD.map(toEuros);
console.log(storeEUR);
