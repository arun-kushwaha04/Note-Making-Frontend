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


// fetching user notes from database
fetch(`${url}/notes/getNotes`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `${localStorage.getItem("userToken")}`,
        },
    }).then(res =>
        res.json())
    .then(data => {
        heading.textContent = `Welcome ${data.name}`;
        localStorage.setItem("notes", data.notes.length);
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
    card.innerHTML = `<div class="header"><div class="heading">${note.noteHeading[0]}</div><div class="img-div"><a class="edit" href="../UpdateNote/index.html?noteId=${note.id}"><img src="../../assets/edit.svg" alt=""></a><a class="delete" id="${note.id}" onClick="noteDelete(this.id)"><img src="../../assets/delete.svg" alt=""></a></div></div><div class="content"><p>${note.noteContent[0]}</p></div>`
        // const href = `../UpdateNote/index.html?noteId=${note.id}`;
        // console.log(href);
    mainContainer.appendChild(card);
}

//deleting Notes
function noteDelete(noteId) {
    const id = noteId;
    let data = {
        id
    }
    data = JSON.stringify(data);
    fetch(`${url}/notes/deleteNote`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${localStorage.getItem("userToken")}`,
            },
            body: data,
        }).then(res =>
            res.json())
        .then(data => {
            alert(data.message);
            location.reload();
        })
        .catch(err => console.log(err))
}

//User profile
const profile = document.querySelector('.profile');
profile.addEventListener("click", () => {
    location.href = "../UserProfile/index.html";
});

//Adding New notes
const addNote = document.querySelector(".add-note");
addNote.addEventListener("click", () => {
    location.href = "../AddNote/index.html";
});

// Siging Out The User
const signOut = document.querySelector(".sign-out");
signOut.addEventListener("click", () => {
    localStorage.removeItem("userToken");
    alert("Signed Out Successfully");
    location.replace("../../index.html");
})