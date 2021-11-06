var randNum;

//randNum = Math.random();
//randNum = Math.floor (Math.random() * 6 ) + 1;

function getRandomNum(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

randNum = getRandomNum(1,6);
console.log(randNum);
randNum = getRandomNum(1,6);
console.log(randNum);
randNum = getRandomNum(1,6);
console.log(randNum);