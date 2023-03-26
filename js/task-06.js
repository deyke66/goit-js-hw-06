const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', event => inputRef.dataset.length > event.currentTarget.value.length ? inputRef.classList.add('invalid') : inputRef.classList.add('valid'));
