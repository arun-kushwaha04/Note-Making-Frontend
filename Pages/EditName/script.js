const namea = document.querySelector('.name');
const password = document.querySelector('.password');
const nameIcon1 = document.querySelector('.name-icon1');
const nameIcon2 = document.querySelector('.name-icon2');
const passwordIcon1 = document.querySelector('.password-icon1');
const passwordIcon2 = document.querySelector('.password-icon2');
const nameError = document.querySelector('.name-error');
const passwordError = document.querySelector('.password-error');
const enterPassword = document.querySelector('.error-text');
const button = document.querySelector('.btn');

function check() {
    if (namea.value.length <= 20) {
        namea.style.borderColor = '#27ae60';
        nameIcon1.style.display = 'none';
        nameIcon2.style.display = 'block';
        nameError.style.display = 'none';
    } else {
        namea.style.borderColor = '#e74c3c';
        nameIcon1.style.display = 'block';
        nameIcon2.style.display = 'none';
        nameError.style.display = 'block';
    }
    if (namea.value === "") {
        namea.style.borderColor = 'lightgray';
        nameIcon1.style.display = 'none';
        nameIcon2.style.display = 'none';
        nameError.style.display = 'none';
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

// const url = "http://localhost:8000";
const url = "https://evening-earth-85816.herokuapp.com";
button.addEventListener('click', () => {
    if (namea.value === "") {
        namea.style.borderColor = '#e74c3c';
        nameIcon1.style.display = 'block';
        nameIcon2.style.display = 'none';
        nameError.style.display = 'block';
        return;
    }
    if (password.value === "") {
        password.style.borderColor = '#e74c3c';
        passwordIcon1.style.display = 'block';
        passwordIcon2.style.display = 'none';
        enterPassword.style.display = 'block';
        return;
    }
    let temp = namea.value;
    temp.toLowerCase();
    temp = temp.charAt(0).toUpperCase() + temp.slice(1);
    namea.value = temp;
    let data = {
        "name": `${namea.value}`,
        "password": `${password.value}`,
    }
    data = JSON.stringify(data);
    fetch(`${url}/user/updateName`, {
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
        if (data.message === "Invalid Password") {
            password.style.borderColor = '#e74c3c';
            passwordIcon1.style.display = 'block';
            passwordIcon2.style.display = 'none';
            passwordError.style.display = 'block';
            enterPassword.style.display = 'none';
            return;
        } else {
            localStorage.setItem('userToken', data.userToken);
            alert(data.message);
        }

    }).catch(err => {
        console.log(err.message);
    })
})