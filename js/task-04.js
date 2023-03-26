const decrementBtnRef = document.querySelector('button[data-action="decrement"]');

const incrementBtnRef = document.querySelector('button[data-action="increment"]');

const counterValueRef = document.querySelector('#value');


decrementBtnRef.addEventListener('click', onDecrementBtnClick);
incrementBtnRef.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick(event) {
    let value = Number(counterValueRef.textContent);
    if (event) {
        value -= 1;
    }

    return counterValueRef.textContent = value;
};

function onIncrementBtnClick(event) {
    let value = Number(counterValueRef.textContent);
    if (event) {
        value += 1;
    }
    
    return counterValueRef.textContent = value;
};