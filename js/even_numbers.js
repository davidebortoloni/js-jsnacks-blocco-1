var n;
do {
    n = parseInt(prompt("Inserire un numero"));
} while (isNaN(n));
if (n % 2 == 0) {
    console.log(n);
} else {
    console.log(n + 1);
}