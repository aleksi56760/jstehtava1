function agefunk() {
  let age = document.getElementById("ikä").value;
  let ikäinen = (age < 18) ? "Alaikäinen":"Täysi-ikäinen";
  document.getElementById("paragraph").innerHTML = ikäinen;
}
console.log("Ran JS Script")