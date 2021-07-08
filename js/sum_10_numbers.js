var i;
var n;
var sum;

sum = 0;
for (i = 1; i <= 5; i++) {
    do {
        n = parseFloat(prompt("Prima somma. Inserire numero " + i + "/5"));
    } while (isNaN(n));
    sum += n;
    console.log(n);
}
console.log("sum:", sum);

sum = 0;
i = 1;
while (i <= 5) {
    do {
        n = parseFloat(prompt("Seconda somma. Inserire numero " + i + "/5"));
    } while (isNaN(n));
    sum += n;
    console.log(n);
    i++;
}
console.log("sum:", sum);