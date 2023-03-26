const dataForm = document.querySelector('.login-form');

dataForm.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault()

    const { email, password } = event.currentTarget.elements;
    
    const userData = {
        email: email.value,
        password: password.value
    }
    console.log(userData)
};
