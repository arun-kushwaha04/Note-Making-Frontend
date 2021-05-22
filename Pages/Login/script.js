// window.addEventListener('unload', () => {
//     global.location.href += "#";
// })

const signUpEmailHint = document.querySelector("#signUpEmailHint");
const signUpEmail = document.querySelector(".signUpEmail");
const signUpPasswordHint = document.querySelector("#signUpPasswordHint");
const signUpPassword = document.querySelector(".signUpPassword")
const signUpNameHint = document.querySelector("#signUpNameHint");
const signUpName = document.querySelector(".signUpName")
const signInEmailHint = document.querySelector("#signInEmailHint");
const signInEmail = document.querySelector(".signInEmail");
const signInPasswordHint = document.querySelector("#signInPasswordHint");
const signInPassword = document.querySelector(".signInPassword")
const container = document.querySelector(".container");


// hovering and filling of text field
signUpName.addEventListener('click', () => {
    signUpNameHint.style.visibility = 'hidden'
})
signUpName.addEventListener('focus', () => {
    signUpNameHint.style.visibility = 'hidden'
})

signUpName.addEventListener('focusout', () => {
    if (signUpName.value === "") {
        signUpNameHint.style.visibility = 'initial'
    } else {
        let name = signUpName.value;
        name.toLowerCase();
        name = name.charAt(0).toUpperCase() + name.slice(1);
        if (name.length <= 20) {
            signUpName.value = name;
        } else {
            alert('Name Should Have Max 20 Characters')
            signUpName.value = "";
            signUpNameHint.style.visibility = 'initial'
        }
    }
})
signUpEmail.addEventListener('click', () => {
    signUpEmailHint.style.visibility = 'hidden';
})
signUpEmail.addEventListener('focus', () => {
    signUpEmailHint.style.visibility = 'hidden';
})

signUpPassword.addEventListener('click', () => {
    signUpPasswordHint.style.visibility = 'hidden';
})
signUpPassword.addEventListener('focus', () => {
    signUpPasswordHint.style.visibility = 'hidden';
})

signUpEmail.addEventListener('focusout', () => {
    if (signUpEmail.value === "") {
        signUpEmailHint.style.visibility = 'initial';
    }
})

signUpPassword.addEventListener('focusout', () => {
    if (signUpPassword.value === "") {
        signUpPasswordHint.style.visibility = 'initial';
    }
})

signInEmail.addEventListener('click', () => {
    signInEmailHint.style.visibility = 'hidden';
})

signInPassword.addEventListener('click', () => {
    signInPasswordHint.style.visibility = 'hidden';
})

signInEmail.addEventListener('focus', () => {
    signInEmailHint.style.visibility = 'hidden';
})

signInPassword.addEventListener('focus', () => {
    signInPasswordHint.style.visibility = 'hidden';
})

signInEmail.addEventListener('focusout', () => {
    if (signInEmail.value === "") {
        signInEmailHint.style.visibility = 'initial';
    }
})

signInPassword.addEventListener('focusout', () => {
    if (signInPassword.value === "") {
        signInPasswordHint.style.visibility = 'initial';
    }
});


// Connecting to backend

//setting url for login
const url = "http://localhost:8000";

const login = document.querySelector('.login');
const register = document.querySelector('.register');

login.addEventListener('click', (event) => {
    const form = document.querySelector('.login-form');
    if (!form.checkValidity()) {
        return;
    } else {
        event.preventDefault();
        let userData = {
            "email": signInEmail.value,
            "password": signInPassword.value,
        }
        console.log(userData);
        userData = JSON.stringify(userData);
        fetch(`${url}/auth/login`, {
                method: "POST",
                body: userData,
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.userToken) {
                    localStorage.setItem("userToken", data.userToken);
                    alert(`${data.message}`);
                    location.replace(`${data.dashboardUrl}`);
                } else {
                    alert(`${data.message}`);
                }
                signUpName.value = "";
                signUpEmail.value = "";
                signUpPassword.value = "";
            })
            .catch(err => {
                console.log(err);
                alert('An Internal Error Occured Try Again!');
            })
    }

});

register.addEventListener('click', (event) => {
    const form = document.querySelector('.register-form');
    form.checkValidity();
    if (!form.checkValidity()) {
        return;
    } else {
        event.preventDefault();
        let userData = {
            "name": signUpName.value,
            "email": signUpEmail.value,
            "password": signUpPassword.value,
        }
        userData = JSON.stringify(userData);
        fetch(`${url}/auth/signUp`, {
                method: "POST",
                body: userData,
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(res => res.json())
            .then(data => {
                alert(`${data.message}`);
                location.reload();
            })
            .catch(err => {
                console.log(err);
                alert('An Internal Error Occured Try Again!');
            })
    }
})