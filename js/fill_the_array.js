var array1 = [54, 75, 36, 12, 71, 15, 98, 20, 7, 4];
var array2 = [2, 76, 63, 12, 24, 8];
var firstArrayElement = document.getElementById("first-array");
var secondArrayElement = document.getElementById("second-array");
var startButton = document.getElementById("start-button");
var resetButton = document.getElementById("reset-button");
var firstArray = array1.join("<br>");
var secondArray = array2.join("<br>");
firstArrayElement.innerHTML = firstArray;
secondArrayElement.innerHTML = secondArray;

startButton.addEventListener("click", function () {
    if (array1.length < array2.length) {
        while (array1.length != array2.length) {
            array1.push(Math.floor(Math.random() * 100) + 1);
        }
    } else {
        while (array2.length != array1.length) {
            array2.push(Math.floor(Math.random() * 100) + 1);
        }
    }
    firstArray = array1.join("<br>");
    secondArray = array2.join("<br>");
    firstArrayElement.innerHTML = firstArray;
    secondArrayElement.innerHTML = secondArray;
})

resetButton.addEventListener("click", function () {
    array1 = [54, 75, 36, 12, 71, 15, 98, 20, 7, 4];
    array2 = [2, 76, 63, 12, 24, 8];
    firstArray = array1.join("<br>");
    secondArray = array2.join("<br>");
    firstArrayElement.innerHTML = firstArray;
    secondArrayElement.innerHTML = secondArray;
})
