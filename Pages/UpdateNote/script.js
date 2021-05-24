const noteHeading = document.querySelector(".heading");
const noteContent = document.querySelector(".content");
const button = document.querySelector(".add-note");

// const url = "http://localhost:8000";
const url = "https://evening-earth-85816.herokuapp.com";
const currUrl = new URLSearchParams(window.location.search);
const id = currUrl.get("noteId");

window.addEventListener('load', () => {
    let data = {
        id
    }
    data = JSON.stringify(data);
    fetch(`${url}/notes/getNoteWithId`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${localStorage.getItem("userToken")}`,
            },
            body: data,
        }).then(res =>
            res.json())
        .then(data => {
            noteHeading.value = data.notes[0].noteHeading[0];
            noteContent.value = data.notes[0].noteContent[0];
        })
        .catch(err => console.log(err))
});

button.addEventListener("click", () => {
    if (noteHeading.value === "" || noteContent.value === "") {
        alert("Note Heading and Content can't be Empty");
    } else if (noteHeading.value.length > 15) {
        alert("Note heading can't be more than 15");
    } else if (noteContent.value.length > 100) {
        alert("Note content can't be more than 100");
    } else {
        let data = {
            id,
            noteHeading: noteHeading.value,
            noteContent: noteContent.value,
        }
        data = JSON.stringify(data);
        fetch(`${url}/notes/updateNote`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${localStorage.getItem("userToken")}`,
                },
                body: data,
            }).then(res =>
                res.json())
            .then(data => {
                location.href = "../Dashboard/index.html";
                alert(data.message);
            })
            .catch(err => console.log(err))
    }
});