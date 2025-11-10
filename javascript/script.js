let vaffelrore = 0;
let vafler = 0;
let penger = 0;
let vafflerSolgt = 0;
let poeng = 0;
let ettersporsel = 50;
let pris = 20;
let number = 0;

function lagRore() {
  vaffelrore = vaffelrore + 1;
  document.getElementById("batter").textContent = vaffelrore;
}

function lagvaffel() {
  if (vaffelrore > 0) {
    vaffelrore = vaffelrore - 1;
    vafler = vafler + 1;
  } else {
    alert("Du har ingen røre!!!");
  }
  document.getElementById("waffles").textContent = vafler;
  document.getElementById("batter").textContent = vaffelrore;
}

function okprisen() {
  if (pris < 44) {
    pris++;
    ettersporsel -= 2;
  }
  document.getElementById("price").textContent = pris;
  document.getElementById("demand").textContent = ettersporsel;
}

function reduserprisen() {
  if (pris > 1) {
    pris--;
    ettersporsel += 2;
  }
  document.getElementById("price").textContent = pris;
  document.getElementById("demand").textContent = ettersporsel;
}

function resetTimer() {
  if (aktivTimer) {
    clearInterval(aktivTimer);
    timer = 0;
    aktivTimer = null;
    timer.textContent = timer;
    console.log("Timer stoppet!");
  } else {
    console.log("Ingen aktiv timer å stoppe.");
  }
}
