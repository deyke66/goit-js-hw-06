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
  const userQuantity = inputRef.value
  let sizes = 20;
  const array = [];
  for (let i = 1; i <= Number(userQuantity); i += 1) {
    const colorValue = getRandomHexColor()
    const divEl = document.createElement('div');
    sizes += 10;
    divEl.style.width = `${sizes}px`
    divEl.style.height = `${sizes}px`
    divEl.style.backgroundColor = `${colorValue}`
    divEl.style.marginBottom = `10px`
    array.push(divEl)
  }
  
  boxSpace.append(...array)
}

function onButtonDelete() {
  boxSpace.innerHTML = "";
}