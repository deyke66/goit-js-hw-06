function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('button[data-create]');
const deleteButton = document.querySelector('button[data-destroy]');
const inputRef = document.querySelector('#controls > input');
const boxSpace = document.querySelector('#boxes');

createButton.addEventListener('click', onButtonCreate);
deleteButton.addEventListener('click', onButtonDelete)

function onButtonCreate() {
  let widhtValue = 20;
  let heightValue = 20;
  const userQuantity = inputRef.value
  for (let i = 1; i <= Number(userQuantity); i += 1) {
    const colorValue = getRandomHexColor()
    widhtValue += 10
    heightValue += 10
    boxSpace.innerHTML += `<div style ="width: ${widhtValue}px; height: ${heightValue}px; background-color: ${colorValue}; margin-bottom: 10px"></div>`
  }
  
}

function onButtonDelete() {
  boxSpace.innerHTML = "";
}