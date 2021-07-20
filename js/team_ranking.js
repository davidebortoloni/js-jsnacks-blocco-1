const resultElement = document.getElementById("result");
const teams = [
  {
    name: "Juventus",
    city: "Torino",
    points: 82,
  },
  {
    name: "Milan",
    city: "Milano",
    points: 75,
  },
  {
    name: "Cagliari",
    city: "Cagliari",
    points: 56,
  },
];
teams.sort(function (a, b) {
  return a - b;
});
let content = "";
for (let i = 0; i < teams.length; i++) {
  content += "<tr>";
  for (let key in teams[i]) {
    content += "<td>" + teams[i][key] + "</td>";
  }
  content += "</tr>";
}
resultElement.innerHTML = content;
