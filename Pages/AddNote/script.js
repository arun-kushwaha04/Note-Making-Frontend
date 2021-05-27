const noteHeading = document.querySelector(".heading");
const noteContent = document.querySelector(".content");
const main = document.querySelector("main");
const body = document.querySelector("body");
const container = document.querySelector(".container");
const heading = document.querySelector('.heading');
const button = document.querySelector(".add-note");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");

// const url = "http://localhost:8000";
const url = "https://evening-earth-85816.herokuapp.com";
// Adding Note To Database
button.addEventListener("click", () => {
    if (noteHeading.value === "" || noteContent.value === "") {
        alert("Note Heading and Content can't be Empty");
    } else if (noteHeading.value.length > 15) {
        alert("Note heading can't be more than 15");
    } else if (noteContent.value.length > 100) {
        alert("Note content can't be more than 100");
    } else {
        circle1.style.visibility = "hidden";
        circle2.style.visibility = "hidden";
        main.style.visibility = 'hidden';
        body.style.background = 'lightgrey';
        container.style.display = 'block';
        let data = {
            noteHeading: noteHeading.value,
            noteContent: noteContent.value,
        }
        data = JSON.stringify(data);
        fetch(`${url}/notes/addNotes`, {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${localStorage.getItem("userToken")}`,
                },
            }).then(res => res.json())
            .then(data => {
                heading.textContent = "Note Added";
                setTimeout(() => { location.href = "../Dashboard/index.html"; }, 5000);
            })
            .catch(err => {
                heading.textContent = "Can't Connect To Server";
            });
    }
});