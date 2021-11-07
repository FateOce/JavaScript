let students = [16, 17, 18, 19, 20];
// let adultStudents = [];


// function checkAge(age){
//     if(age >= 18){
//         adultStudents.push(age + " - Yes");
//     } else {
//         adultStudents.push(age + " - No");
//     }
// }
// students.forEach(checkAge);
// console.log(adultStudents);

function checkAge(age){
    if(age >= 18){
        return age
    }
}
let adultStudents = students.map(checkAge);

console.log(adultStudents);
