let letters = ["H","E","L","P"];

let Car = {
    make: "Chevy",
    model: "Corvette",
    year: "2022",
    Color: "blue"
}


// for(let i = 0; i<letters.length; i++)
//     {console.log(letters[i]);
//     }

// for(let i in letters){
//     console.log(letters[i]);
// }

for(let property in Car){
    console.log(Car[property]);
}