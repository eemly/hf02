let greets = [
  'Jó reggelt',
  'Jó napot',
  'Jó étvágyat',
  'Kellemes napot',
  'Jó estét',
  'Jó éjszakát',
  'Szép álmokat'
];
let d = new Date();
let h = d.getHours();
let m = d.getMinutes();
let conds = [
  h >= 6 && h < 9,
  h >= 9 && h < 12,
  h >= 12 && h < 13,
  h >= 13 && h < 18,
  h >= 18 && h < 23,
  (h >= 23 && h <= 24) || (h >= 0 && h < 3),
  h >= 3 && h < 6
];

document.getElementById("showTime").innerHTML = `${h} : ${m}`;

for (let i = 0; i < conds.length; i++) {
  if (conds[i]) {
    document.getElementById("showGreet").innerHTML = greets[i];
  };
}

if (h >= 5 && h < 21) {
  document.getElementById("showIsSun").innerHTML = '<i class="fas fa-sun"></i>';
} else {
  document.getElementById("showIsSun").innerHTML = '<i class="fas fa-sun"></i>';
};

