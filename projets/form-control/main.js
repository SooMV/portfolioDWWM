const formContainer = document.querySelector(".FormContainer");
const form = document.querySelector("#sign-up-form");
const username = document.querySelector("#username");
const mail = document.querySelector("#mail");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");

// Checking the username

username.addEventListener("input", () => {
    const usernameValue = username.value;
    const usernameControlText = document.querySelector("#username-control-text");
    const usernameSuccess = document.querySelector("#username-success");
    const usernameInvalid = document.querySelector("#username-invalid");

    if (usernameValue.length < 3) {
        usernameControlText.style.display = "block";
        usernameInvalid.style.opacity = "1";
        usernameSuccess.style.opacity = "0";
        username.dataset.check = "invalid";
    }
    else {
        usernameControlText.style.display = "none";
        usernameInvalid.style.opacity = "0";
        usernameSuccess.style.opacity = "1";
        username.dataset.check = "ok";
    }
});

// Checking the email

mail.addEventListener("input", () => {
    const mailValue = mail.value;
    const mailControlText = document.querySelector("#mail-control-text");
    const mailSuccess = document.querySelector("#mail-success");
    const mailInvalid = document.querySelector("#mail-invalid");
    const regexMail = /^[a-zA-Z0-9-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (regexMail.test(mailValue) == false) {
        mailControlText.style.display = "block";
        mailInvalid.style.opacity = "1";
        mailSuccess.style.opacity = "0";
        mail.dataset.check = "invalid";
    }
    else {
        mailControlText.style.display = "none";
        mailInvalid.style.opacity = "0";
        mailSuccess.style.opacity = "1";
        mail.dataset.check = "ok";
    }
});

// Checking the password

password.addEventListener("input", () => {
    const passwordValue = password.value;
    const weak = document.querySelector(".weak");
    const moderate = document.querySelector(".moderate");
    const strong = document.querySelector(".strong");
    const passwordSuccess = document.querySelector("#password-success");
    const passwordInvalid = document.querySelector("#password-invalid");

    const regexPassword = /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,}$/;
    const regexPasswordNumbers = /(?=.*[\d])/;
    const regexPasswordSpecial = /(?=.*[!@#$%^&*])/;

    let isWeak = passwordValue.length < 6;
    let isModerate = regexPasswordNumbers.test(passwordValue) || regexPasswordSpecial.test(passwordValue);
    let isStrong = regexPassword.test(passwordValue);

    if (isWeak) {
        passwordInvalid.style.opacity = "1";
        passwordSuccess.style.opacity = "0";
        weak.style.display = "inline-block";
        moderate.style.display = "none";
        strong.style.display = "none";
        password.dataset.check = "invalid";
    }

    if (isModerate) {
        moderate.style.display = "inline-block";
        strong.style.display = "none";
        password.dataset.check = "invalid";
    }

    if (isStrong) {
        passwordInvalid.style.opacity = "0";
        passwordSuccess.style.opacity = "1";
        strong.style.display = "inline-block";
        password.dataset.check = "ok";
    }
});

// Checking the password confirm

passwordConfirm.addEventListener("input", () => {
    const passwordValue = password.value;
    const confirmValue = document.querySelector("#password-confirm").value;
    const confirmControlText = document.querySelector("#confirm-control-text");
    const confirmSuccess = document.querySelector("#confirm-success");
    const confirmInvalid = document.querySelector("#confirm-invalid");

    if (confirmValue !== passwordValue) {
        confirmControlText.style.display = "block";
        confirmInvalid.style.opacity = "1";
        confirmSuccess.style.opacity = "0";
        passwordConfirm.dataset.check = "invalid";
    }
    else {
        confirmControlText.style.display = "none";
        confirmInvalid.style.opacity = "0";
        confirmSuccess.style.opacity = "1";
        passwordConfirm.dataset.check = "ok";
    }
});


// Submitting

form.addEventListener("submit", e => {

    const globalFlag = (username.dataset.check === "ok") && (mail.dataset.check === "ok") && (password.dataset.check === "ok") & (passwordConfirm.dataset.check === "ok");
        
    if (globalFlag) {
        alert("Données envoyées avec succès.");
    }
    else {
        e.preventDefault();
        formContainer.classList.add("shook");
        setTimeout(() => {
            formContainer.classList.remove("shook");
        }, 200);
    }
});