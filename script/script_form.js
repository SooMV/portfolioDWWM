const form = document.getElementById('form');
const lastName = document.getElementById('last_name');
const firstName = document.getElementById('first_name');
const email = document.getElementById('email');
const message = document.getElementById('message'); // Correction ici

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    if(firstNameValue === '' || firstNameValue.length <= 3){
        setError(firstName, 'Le prénom doit contenir plus de 3 caractères');
    } else {
        setSuccess(firstName);
    }

    if(lastNameValue === '' || lastNameValue.length <= 3){
        setError(lastName, 'Le nom doit contenir plus de 3 caractères');
    } else {
        setSuccess(lastName);
    }

    if(emailValue === ''){
        setError(email, 'L\'adresse mail est requise');
    } else if (!isValidEmail(emailValue)){
        setError(email, 'L\'adresse mail n\'est pas valide');
    } else {
        setSuccess(email);
    }

    if(messageValue === ''){
        setError(message, 'Le message ne doit pas être vide');
    } else {
        setSuccess(message);
    }
};
