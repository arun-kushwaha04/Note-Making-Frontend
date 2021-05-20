const heading = document.querySelector(".heading");
const content = document.querySelector(".content");
const button = document.querySelector(".add-note");

button.addEventListener("click", () => {
    if (heading.value === "" || content.value === "") {
        alert("Note Heading and Content can't be Empty");
    }
    if (heading.value.length > 15) {
        alert("Note heading can't be more than 15");
    }
    if (content.value.length > 100) {
        alert("Note content can't be more than 100");
    }
});