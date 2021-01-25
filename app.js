// Pobrane elementy
const btn = document.querySelector("button");
const input = document.querySelector("input");
const ul = document.querySelector(".added-tasks ul");
//Flaga
let checked = false;

const addTask = (e) => {
  e.preventDefault();
  const inputValue = input.value;
  if (inputValue === "") return alert("Nic nie zostało wprowadzone");
  else if (inputValue.length > 35) return alert("Zbyt dlugie zadanie");
  let newListItem = document.createElement("li");
  let iconBefore = document.createElement("i");
  let iconAfter = document.createElement("i");
  ul.appendChild(newListItem).textContent = inputValue;
  newListItem.appendChild(iconAfter).className = "fas fa-times-circle";
  newListItem.appendChild(iconBefore).className = "far fa-circle";
  input.value = "";

  document.querySelectorAll("i.fa-circle").forEach((icon) => {
    icon.addEventListener("click", doneTask);
  });
  document.querySelectorAll("i.fa-times-circle").forEach((icon) => {
    icon.addEventListener("click", deleteTask);
  });
};

const doneTask = (e) => {
  if (checked == false) {
    checked = !checked;
    const actualIcon = e.target;
    actualIcon.parentNode.style.textDecoration = "line-through";
    actualIcon.setAttribute("class", "far fa-check-circle");
  } else {
    checked = !checked;
    const actualIcon = e.target;
    actualIcon.parentNode.style.textDecoration = "none";
    actualIcon.setAttribute("class", "far fa-circle");
  }
};

const deleteTask = (e) => {
  const deleteIcon = e.target;
  deleteIcon.parentNode.remove();
};

btn.addEventListener("click", addTask);
