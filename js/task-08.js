const dataForm = document.querySelector('.login-form');

dataForm.addEventListener('submit', onSubmit);

function onSubmit(event) {
    event.preventDefault()
   
    const { email, password } = event.currentTarget.elements;

    if (email.value === '' || password.value === '') {
        alert('Заповніть всі поля вводу')
    } else {
        const userData = {
                email: email.value,
                password: password.value
        }

        console.log(userData)

        dataForm.reset()
    }   
}
