//selecting all thw elements
const mainContainer = document.querySelector('.main-container');
const heading = document.querySelector('.heading');
const main = document.querySelector('main');
const nav = document.querySelector('nav');
let body = document.querySelector('body');
const loading = document.querySelector('.loading');
const text = document.querySelector('.text');
const img = document.querySelector('img');

//onload animation
window.addEventListener('load', () => {
    body.classList.add('visible');

    //if no userToken present directing user to home page
    const token = localStorage.getItem("userToken");
    if (!token) {
        location.href = "../../index.html";
    }
})

// const url = "http://localhost:8000";
const url = "https://evening-earth-85816.herokuapp.com";


// fetching user notes from database
setTimeout(() => {

    //hitting the endpoint
    fetch(`${url}/notes/getNotes`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${localStorage.getItem("userToken")}`,
            },
        }).then(res =>
            res.json())
        .then(data => {

            //getting the data send from the server
            console.log('request Send');

            //setting text to be seen by user
            heading.textContent = `Welcome ${data.name}`;
            localStorage.setItem("notes", data.notes.length); //storing the number of notes created by the user
            if (data.notes.length == 0) {

                //if the note length then showing that notes to display
                const card = document.createElement('div');
                card.classList.add('noCard');
                card.innerHTML = ` <p style = 'font-size:3rem'> No Notes To Display </p>`;
                main.appendChild(card);
                loading.style.display = 'none';
                nav.style.visibility = 'visible';
                mainContainer.style.visibility = 'visible';
            } else {

                //else creating the card for each notes
                data.notes.forEach(createNoteElement);
                loading.style.display = 'none';
                mainContainer.style.visibility = 'visible';
                nav.style.visibility = 'visible';
            }
        })
        .catch(err => {

            //if any error occured showing it to the user
            console.log(err);
            text.textContent = 'Server Down';
            img.src = "../../assets/error.png";
            img.style.width = "20rem";
            img.style.height = "20rem";
            setTimeout(() => { location.reload(); }, 10000);
        })
}, 1000);


//card creating function
function createNoteElement(note) {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<div class="header"><div class="heading">${note.noteHeading[0]}</div><div class="img-div"><a class="edit" href="../UpdateNote/index.html?noteId=${note.id}"><img src="../../assets/edit.svg" alt=""></a><a class="delete" id="${note.id}" onClick="noteDelete(this.id)"><img src="../../assets/delete.svg" alt=""></a></div></div><div class="content"><p>${note.noteContent[0]}</p></div>`
        // const href = `../UpdateNote/index.html?noteId=${note.id}`;
        // console.log(href);
    mainContainer.appendChild(card);
}

//deleting Notes method
function noteDelete(noteId) {

    //making note data to be send to server to delete note
    const id = noteId;
    let data = {
        id
    }
    data = JSON.stringify(data);

    //hitting the endpoint
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

            //if successfully deleted note alerting the user
            alert(data.message);
            location.reload();
        })
        .catch(err => {

            //if any error occured showing to user
            console.log(err);
            alert('Unable to connect to server');
        })
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

    //deleting the userToken from internal localStorage
    localStorage.removeItem("userToken");
    alert("Signed Out Successfully");
    location.replace("../../index.html");
})