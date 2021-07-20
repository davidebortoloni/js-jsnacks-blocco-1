const ball = {
  nome: "palla",
  peso: 10,
};

printObject(ball, "result");
const changeName = document.getElementById("change-name");
const changeWeight = document.getElementById("change-weight");
const input = document.getElementById("new-name");
const confirmName = document.getElementById("confirm-name");
const confirmWeight = document.getElementById("confirm-weight");

changeName.addEventListener("click", function () {
  changeName.classList.add("d-none");
  changeWeight.classList.add("d-none");
  input.setAttribute("placeholder", "Nuovo nome");
  input.classList.remove("d-none");
  confirmName.classList.remove("d-none");
});
changeWeight.addEventListener("click", function () {
  changeName.classList.add("d-none");
  changeWeight.classList.add("d-none");
  input.setAttribute("placeholder", "Nuovo peso");
  input.classList.remove("d-none");
  confirmWeight.classList.remove("d-none");
});
confirmName.addEventListener("click", function () {
  const newName = input.value;
  if (isValidName(newName)) {
    ball.nome = newName;
    confirmName.classList.add("d-none");
    input.classList.add("d-none");
    input.value = "";
    printObject(ball, "result");
    changeName.classList.remove("d-none");
    changeWeight.classList.remove("d-none");
  }
});
confirmWeight.addEventListener("click", function () {
  const newWeight = input.value;
  if (isValidWeight(newWeight)) {
    ball.peso = newWeight;
    confirmWeight.classList.add("d-none");
    input.classList.add("d-none");
    input.value = "";
    printObject(ball, "result");
    changeName.classList.remove("d-none");
    changeWeight.classList.remove("d-none");
  }
});

function printObject(object, id) {
  const resultElement = document.getElementById(id);
  let content = "";
  for (let key in object) {
    content += capitalize(key) + ": " + object[key] + "<br>";
  }
  resultElement.innerHTML = content;
}
function isValidName(inputTxt) {
  var letters = /^[a-zA-Z\s]+$/;
  if (inputTxt.match(letters)) {
    return true;
  } else {
    alert("Inserire un nome valido (senza numeri e caratteri speciali)");
    return false;
  }
}
function isValidWeight(weight) {
  if (!weight || weight <= 0 || weight == "" || isNaN(weight)) {
    alert("Inserire un peso valido (maggiore di 0)");
    return false;
  }
  return true;
}
// Funzione per rendere le iniziali maiuscole
function capitalize(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(" ");
}
