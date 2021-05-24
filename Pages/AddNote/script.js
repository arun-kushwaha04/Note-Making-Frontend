const noteHeading = document.querySelector(".heading");
const noteContent = document.querySelector(".content");
const button = document.querySelector(".add-note");

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
                alert(data.message);
                location.href = "../Dashboard/index.html";
            })
            .catch(err => alert("Internal Error Try Later"));
    }
});