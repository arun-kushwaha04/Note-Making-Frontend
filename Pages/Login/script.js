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

// hovering filling of text field
signUpName.addEventListener('click', () => {
    signUpNameHint.style.visibility = 'hidden'
})

signUpName.addEventListener('focusout', () => {
    if (signUpName.value === "") {
        signUpNameHint.style.visibility = 'initial'
    } else {
        let name = signUpName.value;
        name.toLowerCase();
        name = name.charAt(0).toUpperCase() + name.slice(1);
        signUpName.value = name;

    }
})
signUpEmail.addEventListener('click', () => {
    signUpEmailHint.style.visibility = 'hidden';
})

signUpPassword.addEventListener('click', () => {
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

const login = document.querySelector('.login');
const register = document.querySelector('.register');

login.addEventListener('click', () => {
    if (signInEmail.value == "") {
        alert('Please Enter Register Email to Login');
    }
    if (signInPassword.value == "") {
        alert('Please Enter Password to Login');
    }
});

register.addEventListener('click', () => {
    if (signUpName.value == "") {
        alert('Please Enter Name');
    }
    if (signUpEmail.value == "") {
        alert('Please Enter Email');
    }
    if (signUpPassword.value == "") {
        alert('Please Enter Password');
    }
})