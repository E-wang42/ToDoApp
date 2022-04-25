"use strict";

const input = document.querySelector("#userInput"); //user input bar
const button = document.querySelector("#addInput"); //user input add button
const reset = document.querySelector(".reset"); //user input reset button
const list = document.querySelector(".userInputContent"); //content list div
const div = document.querySelector(".contentDiv"); //content div
const paragraph = document.querySelector(".contentParagraph"); //content paragraph
const binDelete = document.querySelector(".binDelete");

//appends user input value
const appendList = function () {
  list.insertAdjacentHTML(
    "beforebegin",
    `<div class="contentDiv"><p class="contentParagraph">${input.value}</p><button class="binDelete"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg></button></div>`
  );
};

//function of button onClick
button.addEventListener("click", function () {
  appendList();
  input.value = "";
});

//function of "enter" key press
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    appendList();
    input.value = "";
  }
});

//strike-through event
// paragraph.addEventListener("click", function () {
//   paragraph.style.textDecoration = "line-through";
// });

//delete content event
// binDelete.addEventListener("click", function () {
//   div.remove();
// });

//reset button event
reset.addEventListener("click", function () {
  list.innerHTML = null;
  input.value = "";
});
