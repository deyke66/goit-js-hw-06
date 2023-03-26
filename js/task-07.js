const inputSizeControlRef = document.querySelector('#font-size-control');

const textRef = document.querySelector('#text');

inputSizeControlRef.addEventListener('input', event => textRef.style.fontSize = `${event.currentTarget.value}px`);
