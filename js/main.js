import { log } from "./utils.js";

addEventListener("DOMContentLoaded", init);

function init() {
  addListeners();
}

function addListeners() {
  const bodySelect = document.querySelector("body");
  bodySelect.addEventListener("click", randomNum);
}
function randomNum() {
  let num = Math.random();
  if (Math.round(num)) {
    p1();
  } else {
    p2();
  }
}

function p1() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
}.then()

function p2() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 2000);
  });
}
