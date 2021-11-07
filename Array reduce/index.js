let letters = ["H","E","L","P"];

function combineLetters(total,nextLetter,index,array){
    return total + nextLetter;
}
let word = letters.reduce(combineLetters);
console.log(word);