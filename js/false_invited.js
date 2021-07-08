var nomi = ["Davide", "Alessandro", "Roberto", "Giorgio", "Francesco", "Laura", "Noemi", "Melissa", "Giulia", "Marilena", "Sebastian", "Raffaella", "Giuseppe"];
var cognomi = ["Bortoloni", "Volpe", "Baggio", "Mastrota", "Totti", "Pilloni", "Saccinto", "Fumero", "Cesa", "Cantisani", "Giovinco", "Spinazzola", "Conte"];
var invitati = [];
var startButton = document.getElementById("start-button");
var resultElement = document.getElementById("result");

startButton.addEventListener("click", function () {
    for (var i = 0; i < 3; i++) {
        do {
            var invitato = nomi[Math.floor(Math.random() * nomi.length)] + " " + cognomi[Math.floor(Math.random() * cognomi.length)]
        } while (invitati.includes(invitato));
        invitati[i] = invitato;
    }
    var result = "<ul><li>" + invitati.join("</li><li>") + "</li></ul>";
    resultElement.innerHTML = result;
})