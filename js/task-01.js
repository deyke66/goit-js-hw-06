const ulRef = document.querySelector('#categories');

const numbersOfItems = ulRef.children.length;
console.log('Number of categories: ', numbersOfItems);

const itemRef = document.querySelectorAll('.item');
itemRef.forEach(item => {
    const nameOfCategory = item.firstElementChild.textContent;
    console.log('Category: ', nameOfCategory,);

    const elements = item.querySelectorAll('li').length;
    console.log('Elements ', elements);

});




