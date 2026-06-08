let notes = [];

const titleinput = document.getElementById("note-title");
const noteinput = document.getElementById("note-content");
const savebtn = document.getElementById("save-btn");
const notecontainerinput = document.getElementById("notes-container");

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

function createNote(note) {

    const notecard = document.createElement("div");

    const notetitle = document.createElement("h3");
    notetitle.textContent = note.title;

    const notecontent = document.createElement("p");
    notecontent.textContent = note.content;

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";

    deletebtn.addEventListener("click", function () {

        notecard.remove();

        const index = notes.indexOf(note);

        if (index !== -1) {
            notes.splice(index, 1);
        }

        saveNotes();
    });

    notecard.appendChild(notetitle);
    notecard.appendChild(notecontent);
    notecard.appendChild(deletebtn);

    notecontainerinput.appendChild(notecard);
}

const savedNotes = localStorage.getItem("notes");

if (savedNotes) {

    notes = JSON.parse(savedNotes);

    notes.forEach(function (note) {
        createNote(note);
    });

}

savebtn.addEventListener("click", function () {

    const title = titleinput.value;
    const content = noteinput.value;

    if (title === "") {
        alert("Enter the title");
        return;
    }

    const newNote = {
        title: title,
        content: content
    };

    notes.push(newNote);

    createNote(newNote);

    saveNotes();

    titleinput.value = "";
    noteinput.value = "";

});