const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputRefClassChange);

function onInputRefClassChange(event) {
    const maxLength = inputRef.dataset.length;
    let inputValue = event.currentTarget.value.length;

    if (maxLength > inputValue) {
        inputRef.classList.add('invalid');
    } else {
        inputRef.classList.remove('invalid')
        inputRef.classList.add('valid')
    }
}