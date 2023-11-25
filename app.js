"use strict";

const todos = document.querySelectorAll(".to-dos .to-do"),
  writeups = document.querySelectorAll(".write-up");

const arrowDown = document.querySelector("#arrow-down");
const todoParent = document.querySelector("#to-dos");
const arrowUp = document.querySelector("#arrow-up");

arrowDown.addEventListener("click", function () {
  const isExpanded = arrowDown.attributes["aria-expanded"].value;

  todoParent.classList.toggle("menu-display");
  arrowUp.style.display = "block";
  // arrowDown.style.display = "none";

  if (isExpanded) {
    arrowDown.ariaExpanded = "false";
  } else {
    arrowDown.ariaExpanded = "true";
  }
});

let isClicked = false;

// function displayTodo(e) {
//   todos.forEach((todo, idx) => {

//   });
// }

todos.forEach((todo) => todo.addEventListener("click", displayTodo));
