// window.addEventListener('unload', () => {
//     global.location.href += "#";
// })

//Selecting all input tags 
const signUpEmail = document.querySelector(".signup-email");
const signUpPassword = document.querySelector(".signup-password")
const signUpName = document.querySelector(".name")
const confirmPassword = document.querySelector('.confirmPassword')
const signInEmail = document.querySelector(".signin-email");
const signInPassword = document.querySelector(".signin-password");

//selecting all icons
const signUpEmailIcon1 = document.querySelector('.signup-email-icon1');
const signUpEmailIcon2 = document.querySelector('.signup-email-icon2');
const signInEmailIcon1 = document.querySelector('.signin-email-icon1');
const signInEmailIcon2 = document.querySelector('.signin-email-icon2');
const nameIcon1 = document.querySelector('.name-icon1');
const nameIcon2 = document.querySelector('.name-icon2');
const confirmPasswordIcon1 = document.querySelector('.confirmPassword-icon1');
const confirmPasswordIcon2 = document.querySelector('.confirmPassword-icon2');
const signUpPasswordIcon1 = document.querySelector('.signup-password-icon1');
const signUpPasswordIcon2 = document.querySelector('.signup-password-icon2');
const signInPasswordIcon1 = document.querySelector('.signin-password-icon1');
const signInPasswordIcon2 = document.querySelector('.signin-password-icon2');

//selecting all error
const emailError = document.querySelector('.signup-email-error');
const emailExists = document.querySelector('.signup-email-exists');
const nameError = document.querySelector('.name-error');
const signUpPasswordError = document.querySelector('.signup-enter-password');
const confirmPasswordError = document.querySelector('.confirm-password-error');
const signinEmailError = document.querySelector('.signin-email-error');
const signinEmailExists = document.querySelector('.signin-email-exists');
const signinPasswordError = document.querySelector('.signin-enter-password');
const signinPasswordIncorrect = document.querySelector('.signin-password-incorrect');

const login = document.querySelector('.login');
const register = document.querySelector('.register');


//handling all error cases
let reg = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

let chk1 = 0,
    chk2 = 0,
    chk3 = 0,
    chk4 = 0,
    chk5 = 0;

function check1() {
    if (signUpName.value.length <= 20) {
        signUpName.style.borderColor = '#27ae60';
        nameIcon1.style.display = 'none';
        nameIcon2.style.display = 'block';
        nameError.style.display = 'none';
        chk1 = 1;
    } else {
        signUpName.style.borderColor = '#e74c3c';
        nameIcon1.style.display = 'block';
        nameIcon2.style.display = 'none';
        nameError.style.display = 'block';
        chk1 = 0;
    }
    if (signUpName.value === "") {
        signUpName.style.borderColor = 'lightgray';
        nameIcon1.style.display = 'none';
        nameIcon2.style.display = 'none';
        nameError.style.display = 'none';
        chk1 = 0;
    }
    if (chk1 === 1 && chk2 === 1 && chk3 === 1 && chk4 === 1) register.style.display = 'block';
    else register.style.display = 'none';
}

function check2() {
    if (signUpEmail.value.match(reg)) {
        signUpEmail.style.borderColor = '#27ae60';
        signUpEmailIcon1.style.display = 'none';
        signUpEmailIcon2.style.display = 'block';
        emailError.style.display = 'none';
        emailExists.style.display = 'none';
        chk2 = 1;
    } else {
        signUpEmail.style.borderColor = '#e74c3c';
        signUpEmailIcon1.style.display = 'block';
        signUpEmailIcon2.style.display = 'none';
        emailError.style.display = 'block';
        emailExists.style.display = 'none';
        chk2 = 0;
    }
    if (signUpEmail.value === "") {
        signUpEmail.style.borderColor = 'lightgray';
        signUpEmailIcon1.style.display = 'none';
        signUpEmailIcon2.style.display = 'none';
        emailError.style.display = 'none';
        emailExists.style.display = 'none';
        chk2 = 0;
    }
    if (chk1 === 1 && chk2 === 1 && chk3 === 1 && chk4 === 1) register.style.display = 'block';
    else register.style.display = 'none';
}

function check3() {
    if (signUpPassword.value.match(strongRegex)) {
        signUpPassword.style.borderColor = '#27ae60';
        signUpPasswordIcon1.style.display = 'none';
        signUpPasswordIcon2.style.display = 'block';
        signUpPasswordError.style.display = 'none';
        chk3 = 1;
    } else {
        signUpPassword.style.borderColor = '#e74c3c';
        signUpPasswordIcon1.style.display = 'block';
        signUpPasswordIcon2.style.display = 'none';
        signUpPasswordError.style.display = 'block';
        chk3 = 0;
    }
    if (signUpPassword.value === "") {
        signUpPassword.style.borderColor = 'lightgray';
        signUpPasswordIcon1.style.display = 'none';
        signUpPasswordIcon2.style.display = 'none';
        signUpPasswordError.style.display = 'none';
        chk3 = 0;
    }
    if (chk1 === 1 && chk2 === 1 && chk3 === 1 && chk4 === 1) register.style.display = 'block';
    else register.style.display = 'none';
}

function check4() {
    if (confirmPassword.value === signUpPassword.value) {
        confirmPassword.style.borderColor = '#27ae60';
        confirmPasswordIcon1.style.display = 'none';
        confirmPasswordIcon2.style.display = 'block';
        confirmPasswordError.style.display = 'none';
        chk4 = 1;
    } else {
        confirmPassword.style.borderColor = '#e74c3c';
        confirmPasswordIcon1.style.display = 'block';
        confirmPasswordIcon2.style.display = 'none';
        confirmPasswordError.style.display = 'block';
        chk4 = 0;
    }
    if (confirmPassword.value === "") {
        confirmPassword.style.borderColor = 'lightgray';
        confirmPasswordIcon1.style.display = 'none';
        confirmPasswordIcon2.style.display = 'none';
        confirmPasswordError.style.display = 'none';
        chk4 = 0;
    }
    if (chk1 === 1 && chk2 === 1 && chk3 === 1 && chk4 === 1) register.style.display = 'block';
    else register.style.display = 'none';
}

function check5() {
    if (signInPassword.value !== "") {
        signInPassword.style.borderColor = 'lightgray';
        signInPasswordIcon1.style.display = 'none';
        signInPasswordIcon2.style.display = 'none';
        signinPasswordError.style.display = 'none';
        signinPasswordIncorrect.style.display = 'none';
    }
}

function check6() {
    if (signInEmail.value.match(reg)) {
        signInEmail.style.borderColor = '#27ae60';
        signInEmailIcon1.style.display = 'none';
        signInEmailIcon2.style.display = 'block';
        signinEmailError.style.display = 'none';
        signinEmailExists.style.display = 'none';
        chk5 = 1;
    } else {
        signInEmail.style.borderColor = '#e74c3c';
        signInEmailIcon1.style.display = 'block';
        signInEmailIcon2.style.display = 'none';
        signinEmailError.style.display = 'block';
        signinEmailExists.style.display = 'none';
        chk5 = 0;
    }
    if (signInEmail.value === "") {
        signInEmail.style.borderColor = 'lightgray';
        signInEmailIcon1.style.display = 'none';
        signInEmailIcon2.style.display = 'none';
        signinEmailError.style.display = 'none';
        signinEmailExists.style.display = 'none';
        chk5 = 0;
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Connecting to backend

//setting url for login
const url = "https://evening-earth-85816.herokuapp.com";
// const url = "http://localhost:8000";
const loading = document.querySelector('.loading');
const text = document.querySelector('.text');
const img = document.querySelector('img');

login.addEventListener('click', (event) => {
    if (chk5 === 0) {
        signinEmailError.style.display = 'block';
        return;
    }
    loading.style.display = 'block';
    let userData = {
        "email": signInEmail.value,
        "password": signInPassword.value,
    }
    console.log(userData);
    userData = JSON.stringify(userData);
    fetch(`${url}/auth/login`, {
            mode: "no-cors",
            method: "POST",
            body: userData,
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => res.json())
        .then(data => {
            if (data.message === "Invalid Password") {
                signInPassword.style.borderColor = '#e74c3c';
                signInPasswordIcon1.style.display = 'block';
                signInPasswordIcon2.style.display = 'none';
                signinPasswordError.style.display = 'none';
                signinPasswordIncorrect.style.display = 'block';
                loading.style.display = 'none';
            } else if (data.message === "No Such User Exists Try Registering Yourself") {
                signInEmail.style.borderColor = '#e74c3c';
                signInEmailIcon1.style.display = 'block';
                signInEmailIcon2.style.display = 'none';
                signinEmailError.style.display = 'none';
                signinEmailExists.style.display = 'block';
                loading.style.display = 'none';
            } else if (data.userToken) {
                localStorage.setItem("userToken", data.userToken);
                text.textContent = data.message;
                img.src = "../../assets/success.png";
                img.style.width = "20rem";
                img.style.height = "20rem";
                setTimeout(() => { location.replace(`${data.dashboardUrl}`); }, 1000);
            } else {
                text.textContent = 'Internal Error Try Again';
                img.src = "../../assets/error.webp";
                img.style.width = "30rem";
                img.style.height = "30rem";
                setTimeout(() => { location.reload(); }, 5000);
            }
        })
        .catch(err => {
            console.log(err);
            text.textContent = 'Server Down';
            img.src = "../../assets/error.png";
            img.style.width = "20rem";
            img.style.height = "20rem";
            setTimeout(() => { location.reload(); }, 5000);
        })
});

register.addEventListener('click', (event) => {
    let temp = signUpName.value;
    temp.toLowerCase();
    temp = temp.charAt(0).toUpperCase() + temp.slice(1);
    signUpName.value = temp;
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
            //alert(`${data.message}`);
            if (data.message === "User Already exists, Try To Login") {
                signUpEmail.style.borderColor = '#e74c3c';
                signUpEmailIcon1.style.display = 'block';
                signUpEmailIcon2.style.display = 'none';
                emailError.style.display = 'none';
                emailExists.style.display = 'block';
            } else {
                const domain = data.domain;
                const key = data.key;
                const userToken = data.userToken;
                sendEmail2(signUpEmail.value, domain, key, userToken);
            }
        })
        .catch(err => {
            console.log(err);
            text.textContent = 'Server Down';
            img.src = "../../assets/error.webp";
            img.style.width = "30rem";
            img.style.height = "30rem";
            setTimeout(() => { location.reload(); }, 5000);
        })

})

const forgotPassword = document.querySelector('.forgot-password');

forgotPassword.addEventListener('click', () => {
    if (chk5 === 0) {
        signinEmailError.style.display = 'block';
        return;
    }

    let userData = {
        "email": signInEmail.value,
    }
    userData = JSON.stringify(userData);
    fetch(`${url}/auth/forgotPassword`, {
            method: "POST",
            body: userData,
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => res.json())
        .then(data => {
            if (data.message === "No Such User Exists Try Registering Yourself") {
                signInEmail.style.borderColor = '#e74c3c';
                signInEmailIcon1.style.display = 'block';
                signInEmailIcon2.style.display = 'none';
                signinEmailError.style.display = 'none';
                signinEmailExists.style.display = 'block';
                loading.style.display = 'none';
            } else if (data.message === "Error occured in searching users") {
                text.textContent = 'Internal Error Try Again';
                img.src = "../../assets/error.webp";
                img.style.width = "30rem";
                img.style.height = "30rem";
                setTimeout(() => { location.reload(); }, 5000);
            } else {
                const domain = data.domain;
                const key = data.key;
                const userToken = data.userToken;
                sendEmail(signInEmail.value, domain, key, userToken);
            }
        })
        .catch(err => {
            console.log(err);
            text.textContent = 'Server Down';
            img.src = "../../assets/error.png";
            img.style.width = "25rem";
            img.style.height = "20rem";
            setTimeout(() => { location.reload(); }, 5000);
        })

});


function sendEmail(email, domain, key, userToken) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: `${domain}`,
        Password: `${key}`,
        To: `${email}`,
        From: "noReply@noteMaker.com",
        Subject: "RESET PASSWORD",
        Body: `
            <p>Someone (hopefully you) has requested a password reset for your Heroku account. Follow the link below to set a new password:</p>
            <h1>Click on Below Link To Reset Your Password.</h1>
            <p>If you don't wish to reset your password, disregard this email and no action will be taken.</p>
            <a href="https://dreamy-carson-5588a8.netlify.app/Pages/changePassword/index.html?userToken=${userToken}" target="_blank">Reset Password</a>
            <p>Arun Singh Kushwaha - 2020 IMT IIITM-G</p>
        `,
    }).then(message => {
        loading.style.display = 'block';
        text.textContent = "Password Reset Mail Sent";
        img.src = "../../assets/success.png";
        img.style.width = "25rem";
        img.style.height = "20rem";
        setTimeout(() => { location.reload(); }, 1000);
    }).catch(err => console.log(err));
}

function sendEmail2(email, domain, key, userToken) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: `${domain}`,
        Password: `${key}`,
        To: `${email}`,
        From: "noReply@noteMaker.com",
        Subject: "Verify Email",
        Body: `
            <p>Thanks for signing up with Note Maker You must follow this link to activate your account:</p>
            <h1>Click on Below Link To Verify Your Mail.</h1>
            <a href="https://dreamy-carson-5588a8.netlify.app/Pages/verifyEmail/index.html?userToken=${userToken}&email=${email}" target="_blank">Verify Email</a>
            <p>Have fun, and don't hesitate to contact me with your feedback..</p>
            <p>Arun Singh Kushwaha - 2020 IMT IIITM-G</p>
        `,
    }).then(message => {
        loading.style.display = 'block';
        text.textContent = "Accounting Creation Pending, Verify Email to Complete Account Creation Process.";
        img.src = "../../assets/success.png";
        img.style.width = "25rem";
        img.style.height = "20rem";
        setTimeout(() => { location.reload(); }, 3000);
    }).catch(err => console.log(err));
}