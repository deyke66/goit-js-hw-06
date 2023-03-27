function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const mainColorValue = document.querySelector('body');

const changeColorButton = document.querySelector('.change-color');

const nameColorText = document.querySelector('.color');

changeColorButton.addEventListener('click', onChangeColorButton);

function onChangeColorButton(event) {
  const colorValue = getRandomHexColor();
  const nameColor = colorValue;
  return mainColorValue.style.backgroundColor = colorValue, nameColorText.textContent = nameColor;
}