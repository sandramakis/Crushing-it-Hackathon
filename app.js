"use strict";

// Notification bell
const notificationBell = document.querySelector(
  ".profile button#notification-bell"
);
const notification = document.querySelector("[role='alert']");

const profileBtn = document.querySelector("header .profile .profile-info");
const myStore = document.querySelector("header .my-store");

// display notification
function displayNotification() {
  document.body.classList.contains("display-my-store") &&
    document.body.classList.remove("display-my-store");

  document.body.classList.toggle("display-notification");

  // const isExpanded = notificationBell.attributes["aria-expanded"].value;

  // if (isExpanded) {
  //   notificationBell.ariaExpanded = "false";
  // } else {
  //   notificationBell.ariaExpanded = "true";
  // }

  // console.log(isExpanded);
}

// display myStore
function displayMyStore() {
  document.body.classList.toggle("display-my-store");

  document.body.classList.contains("display-notification") &&
    document.body.classList.remove("display-notification");
}

// Event listeners
notificationBell.addEventListener("click", displayNotification);
profileBtn.addEventListener("click", displayMyStore);

function addGlobalEventListener(type, selector, callback, options) {
  document.addEventListener(
    type,
    (e) => {
      if (e.target.matches(selector)) callback(e);
    },
    options
  );
}

addGlobalEventListener(
  "click",
  ".main-section",
  () => {
    document.body.classList.remove("display-notification");
  },
  { once: true }
);

addGlobalEventListener(
  "click",
  "div.heading",
  () => {
    document.body.classList.remove("display-notification");
  },
  { once: true }
);

window.addEventListener("keydown", function (e) {
  // escape notification
  document.body.classList.contains("display-notification") &&
    e.key === "Escape" &&
    document.body.classList.remove("display-notification");

  // escape myStore
  document.body.classList.contains("display-my-store") &&
    e.key === "Escape" &&
    document.body.classList.remove("display-my-store");
});

// const allTodos = document.querySelectorAll(".to-dos .to-do"),
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

// function displayTodo(e) {
//   todos.forEach((todo, idx) => {

//   });
// }

// todos.forEach((todo) => todo.addEventListener("click", displayTodo));
