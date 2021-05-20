const mainContainer = document.querySelector('.main-container');
const heading = document.querySelector('.heading');
const main = document.querySelector('main');
let body = document.querySelector('body');
window.addEventListener('load', () => {
    body.classList.add('visible');
    const token = localStorage.getItem("userToken");
    if (!token) {
        location.href = "../../index.html";
    }
})

const url = "http://localhost:8000";

fetch(`${url}/notes/getNotes`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("userToken")}`,
        },
    }).then(res =>
        res.json())
    .then(data => {
        console.log(data.notes.length)
        heading.textContent = `Welcome ${data.name}`;
        if (data.notes.length == 0) {
            const card = document.createElement('div');
            card.classList.add('noCard');
            card.innerHTML = ` <img src = '../../assets/sad.svg' style = 'width:20em;'> <p style = 'font-size:3rem'> No Notes To Display </p>`;
            main.appendChild(card);
        } else { data.notes.forEach(createNoteElement) }
    })
    .catch(err => console.log(err))


function createNoteElement(note) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="header"><div class="heading">${note.noteHeading[0]}</div><div class="img-div"><a><img src="../../assets/edit.svg" alt=""></a><a><img src="../../assets/delete.svg" alt=""></a></div></div><div class="content"><p>${note.noteContent[0]}</p></div>`
    mainContainer.appendChild(card);
}