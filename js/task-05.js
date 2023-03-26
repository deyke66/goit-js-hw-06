const inputRef = document.querySelector('#name-input');

const userRef = document.querySelector('#name-output');

inputRef.addEventListener('input', event => {
    if (event.currentTarget.value === "") {
        userRef.textContent = 'Anonymous';
    } else {
        return userRef.textContent = event.currentTarget.value
    }

});

