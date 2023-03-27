const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputRefClassChange);

function onInputRefClassChange(event) {
    const maxLength = inputRef.dataset.length;
    let inputValue = event.currentTarget.value.length;

    
    if (Number(maxLength) === Number(inputValue)) {
        inputRef.classList.add('valid');
        if (inputRef.classList.contains('invalid')) {
            inputRef.classList.remove('invalid')
        }

    } else {
        inputRef.classList.add('invalid');
        if (inputRef.classList.contains('valid')) {
            inputRef.classList.remove('valid')
        }
    }
}