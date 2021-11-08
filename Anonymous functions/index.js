(function(){
    document.getElementById("myH1").innerHTML = "Hey!";
})();

//let task = function(){document.getElementById("myH1").innerHTML = "Sup!";}

//setTimeout(task,5000);
setTimeout(function(){
    document.getElementById("myH1").innerHTML = "Sup?"
},
1000);