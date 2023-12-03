"use strict";

// Notification bell
const notificationBell = document.querySelector(".profile svg");
const notification = document.querySelector("header .notification");

function displayNotification() {
  document.body.classList.contains("display-my-store") &&
    document.body.classList.remove("display-my-store");

  return document.body.classList.toggle("display-notification");
}

notificationBell.addEventListener("click", displayNotification);

// Profile button
const profileBtn = document.querySelector("header .profile .profile-info");
const myStore = document.querySelector("header .my-store");

profileBtn.addEventListener("click", function () {
  document.body.classList.toggle("display-my-store");

  document.body.classList.contains("display-notification") &&
    document.body.classList.remove("display-notification");
});

// addGlobalEventListener("click", "body", (e) => {
//   console.log("hi");
// });

// const todos = document.querySelectorAll(".to-dos .to-do"),
//   writeups = document.querySelectorAll(".write-up");

// const arrowDown = document.querySelector("#arrow-down");
// const todoParent = document.querySelector("#to-dos");
// const arrowUp = document.querySelector("#arrow-up");

// arrowDown.addEventListener("click", function () {
//   const isExpanded = arrowDown.attributes["aria-expanded"].value;

//   todoParent.classList.toggle("menu-display");
//   arrowUp.style.display = "block";

//   if (isExpanded) {
//     arrowDown.ariaExpanded = "false";
//     arrowDown.style.display = "none";
//   } else {
//     arrowDown.ariaExpanded = "true";
//   }
// });

// let isClicked = false;

// // function displayTodo(e) {
// //   todos.forEach((todo, idx) => {

// //   });
// // }

// todos.forEach((todo) => todo.addEventListener("click", displayTodo));
