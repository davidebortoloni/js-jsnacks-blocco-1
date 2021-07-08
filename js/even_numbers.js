var n;
var startButton = document.getElementById("start-button");
var resultElement = document.getElementById("result");

startButton.addEventListener("click", function () {
    do {
        n = parseInt(prompt("Inserire un numero"));
    } while (isNaN(n));
    if (n % 2 == 0) {
        resultElement.innerHTML = "È stato inserito un numero pari: " + n;
    } else {
        resultElement.innerHTML = "È stato inserito un numero dispari, stampo il successivo: " + (n + 1);
    }
})