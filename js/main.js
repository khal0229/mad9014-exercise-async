import { log } from "./utils.js";

addEventListener("DOMContentLoaded", init);

function init() {
  addListeners();
}

function addListeners() {
  const bodySelect = document.querySelector("body");
  bodySelect.addEventListener("click", randomPromise);
}
function randomPromise() {
  let num = Math.random();
  if (Math.round(num)) {
    p1().then((hex) => {
      let body = document.querySelector("body");
      body.style.backgroundColor = hex;
    });
  } else {
    p2().then((message) => {
      let main = document.querySelector("main");
      let p = document.createElement("p");
      p.textContent = message;
      main.appendChild(p);
    });
  }
}

function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(generateHex()), 2000);
  });
}

function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "Hello, this is a great message!");
  });
}

function generateHex() {
  let hexCode = "#";
  let hexDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

  while (hexCode.length < 7) {
    hexCode += hexDigits[Math.floor(Math.random() * hexDigits.length)];
  }
  return hexCode;
}
