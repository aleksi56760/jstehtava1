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