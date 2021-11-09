// let storeAUD = [5, 6, 7, 8, 9];


// // function toEuros(value){
// //     value *= 0.65;
// //     return value;
// // }
// let storeEUR = storeAUD.map(value => value *= 0.65);
// console.log(storeEUR);

//---------------------------------------------------------------------

// let students = [16, 17, 18, 19, 20];

// // function checkAge(age){
// //     if(age >= 18){
// //         return age
// //     }
// // }

// let adultStudents = students.filter(age => age >= 18);
// console.log(adultStudents);

//--------------------------------------------------------------------------

let letters = ["H","E","L","P"];

// function combineLetters(total,nextLetter){
//     return total + nextLetter;
// }

// let word = letters.reduce(combineLetters);
// console.log(word);

// Arrow function

let word = letters.reduce((total,nextLetter) => total + nextLetter)

console.log(word);