const body = document.querySelector('body');
window.addEventListener('load', () => {
    body.classList.add('visible');
})

const userName = document.querySelector('.name');
const userEmail = document.querySelector('.email');
const userNotes = document.querySelector('.notes');

// const url = "http://localhost:8000";
const url = "https://evening-earth-85816.herokuapp.com";
fetch(`${url}/user/getUserData`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("userToken")}`,
        },
    }).then(res => res.json())
    .then(data => {
        userName.textContent = data.name;
        userEmail.textContent = data.email;
        userNotes.textContent = localStorage.getItem("notes");
    })
    .catch(err => console.log(err))