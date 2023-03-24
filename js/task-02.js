const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');

const newMarkup = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item
  li.classList.add('item')
  return li
});

ulRef.append(...newMarkup);