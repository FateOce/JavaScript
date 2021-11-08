let message;

function displayConsole(output){
    console.log(output);
}

function displayDOM(output){
    document.getElementById("myH1").innerHTML = output;
}

function setMessage(text, callBack){
    message = text;
    callBack(message);
}

//displayDOM(setMessage("Hello"));
setMessage("Hello there", displayDOM);