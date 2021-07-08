var i;
var n;
var sum;
var firstButton = document.getElementById("first-sum");
var secondButton = document.getElementById("second-sum");
var firstResult = document.getElementById("first-result");
var secondResult = document.getElementById("second-result");

firstButton.addEventListener("click", function () {
    sum = 0;
    for (i = 1; i <= 5; i++) {
        do {
            n = parseFloat(prompt("Prima somma. Inserire numero " + i + "/5"));
        } while (isNaN(n));
        sum += n;
    }
    firstResult.innerHTML = "Risultato: " + sum;
})

secondButton.addEventListener("click", function () {
    sum = 0;
    i = 1;
    while (i <= 5) {
        do {
            n = parseFloat(prompt("Seconda somma. Inserire numero " + i + "/5"));
        } while (isNaN(n));
        sum += n;
        i++;
    }
    secondResult.innerHTML = "Risultato: " + sum;
})