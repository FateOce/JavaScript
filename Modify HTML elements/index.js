document.querySelector("#myButton").onclick = function(){ 
    const h1 = document.querySelector("#myH1");
    const underline = document.createElement("u");
    underline.innerText = "Bye Bye!"
    h1.innerText = "";
    h1.append(underline);

    const p = document.querySelectorAll(".myP");
    //p[0].innerText = "WHOOOAAAA!";
    p.forEach(element => element.innerText = "WHOA!");

const buttons = document.querySelectorAll("button");
buttons.forEach(element => element.remove());

}