var email;

 email = prompt("Inserisci la tua mail");
 console.log(email);
 
 // Array lista email

var mailingList = ["laura.1@gmail.com", "francesco@libero.it", "giacomo_pt@gmail.com", "edo-92@live.it"];

// descrive nel console le email inserite 

for (var i =0; i< mailingList.length; i++) {
 console.log(mailingList[i] + " " + "è una mail inserita");
}

//  condizione

 if (mailingList.indexOf(email) > -1 ) {
   console.log("email presente");
   document.getElementById("my_id").innerHTML = "Benvenuto " + email + "!";
 }
 else {
   document.getElementById("my_id").innerHTML = "L'email " + email + " non risulta attiva. Crea un account";
 }

