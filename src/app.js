/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

/*
function generator() {
  let x = who[Math.floor(Math.random() * who.length)];
  let w = action[Math.floor(Math.random() * action.length)];
  let y = what[Math.floor(Math.random() * what.length)];
  let z = when[Math.floor(Math.random() * when.length)];
  return x + " " + w + " " + y + " " + z;
}*/

function aleatorio(arreglo) {
  let x = arreglo[Math.floor(Math.random() * arreglo.length)];
  return x;
}

let excusa = "";

[who, action, when, what].forEach(parte => {
  excusa = excusa + aleatorio(parte) + " ";
});

window.onload = function() {
  //write your code here
  document.getElementById("excuse").innerHTML = excusa;
  console.log("Look Mom! I'm on the internet!");
};
