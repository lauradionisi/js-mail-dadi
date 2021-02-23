// generatore numero personale
var myNumber;
myNumber = document.getElementById("my_number").innerHTML = Math.floor(Math.random() * 6) +1;

// generatore numero computer

var computerNumber;
computerNumber = document.getElementById("computer_number").innerHTML = Math.floor(Math.random() * 6) +1;

// condizione

if (myNumber > computerNumber)  {
 document.getElementById("win").innerHTML = "Hai Vinto!";
}
else if (myNumber < computerNumber) {
 document.getElementById("win").innerHTML = "Hai perso!"
}
else {
 document.getElementById("win").innerHTML = "Pari!"
}

// Button gioca

function reloadPage() {
 location.reload();
}