function agefunk() {
  let age = document.getElementById("ikä").value;
  let ikäinen = (age < 18) ? "Alaikäinen":"Täysi-ikäinen";
  document.getElementById("paragraph").innerHTML = ikäinen;
}
console.log("Ran JS Script")

function loopfunk() {
  let text = ""
  let i = 0;

  do {
      text += "<br>Huhuu?!";
      i++;
  }
  while (i < 5)

  document.getElementById("loopius").innerHTML = text;
}

function eläimet() {
  const eläimet = ["Koira", "<br>Kissa", "<br>Hevonen", "<br>Hiiri", "<br>Marsu"];

  let text2 = "";
  for (let a = 0; a < eläimet.length; a++) {
    text2 += eläimet[a] + "<br>";
  }
  const final = eläimet.map(e=> e + '!')

  document.getElementById("elä").innerHTML = final;
}