const email = document.querySelector('.email');
const password = document.querySelector('.password');
const emailIcon1 = document.querySelector('.email-icon1');
const emailIcon2 = document.querySelector('.email-icon2');
const passwordIcon1 = document.querySelector('.password-icon1');
const passwordIcon2 = document.querySelector('.password-icon2');
const emailError = document.querySelector('.email-error');
const passwordError = document.querySelector('.password-error');
const enterPassword = document.querySelector('.error-text');
const button = document.querySelector('.btn');

let reg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function check() {
    if (email.value.match(reg)) {
        email.style.borderColor = '#27ae60';
        emailIcon1.style.display = 'none';
        emailIcon2.style.display = 'block';
        emailError.style.display = 'none';
    } else {
        email.style.borderColor = '#e74c3c';
        emailIcon1.style.display = 'block';
        emailIcon2.style.display = 'none';
        emailError.style.display = 'block';
    }
    if (email.value === "") {
        email.style.borderColor = 'lightgray';
        emailIcon1.style.display = 'none';
        emailIcon2.style.display = 'none';
        emailError.style.display = 'none';
    }
}

function check2() {
    if (password.value !== "") {
        password.style.borderColor = 'lightgray';
        passwordIcon1.style.display = 'none';
        passwordIcon2.style.display = 'none';
        passwordError.style.display = 'none';
        enterPassword.style.display = 'none';
    }
}

const url = "http://localhost:8000";

button.addEventListener('click', () => {
    console.log("Hi");
    if (password.value === "") {
        password.style.borderColor = '#e74c3c';
        passwordIcon1.style.display = 'block';
        passwordIcon2.style.display = 'none';
        enterPassword.style.display = 'block';
    }
    if (email.value === "") {
        email.style.borderColor = '#e74c3c';
        emailIcon1.style.display = 'block';
        emailIcon2.style.display = 'none';
        emailError.style.display = 'block';
    }
    let data = {
        "email": `${email.value}`,
        "password": `${password.value}`,
    }
    data = JSON.stringify(data);
    fetch(`${url}/user/updateEmail`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("userToken")}`,
        },
        body: data,
    }).then(res =>
        res.json()
    ).then(data => {
        console.log(data);
        if (data.message === "Invalid password") {
            password.style.borderColor = '#e74c3c';
            passwordIcon1.style.display = 'block';
            passwordIcon2.style.display = 'none';
            passwordError.style.display = 'block';
            enterPassword.style.display = 'none';
            return;
        } else {
            localStorage.setItem('userToken', data.token);
            alert('Email Updated Success');
        }

    }).catch(err => {
        console.log('Hi from err');

        console.log(err.message);
    })
})