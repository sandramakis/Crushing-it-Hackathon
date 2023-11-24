"use strict";

const todos = document.querySelectorAll(".to-dos .to-do"),
  writeups = document.querySelectorAll(".write-up");

let isClicked = false;

function displayTodo(e) {
  todos.forEach((todo, idx) => {
    // const currentInd = todo.classList.add(`${[idx]}`);
    // currentInd.classList.add("display");
    // todo.style.display = "flex";
    // console.log(todo, idx);
    // return console.log(currentInd);
  });
}

todos.forEach((todo) => todo.addEventListener("click", displayTodo));
