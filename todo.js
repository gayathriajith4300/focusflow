let tasks = [];

const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTask(task) {

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;

    const span = document.createElement("span");
    span.textContent = task.text;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    checkbox.addEventListener("change", function () {

        task.completed = checkbox.checked;

        saveTasks();

    });

    deleteBtn.addEventListener("click", function () {

        li.remove();

        const index = tasks.indexOf(task);

        if (index !== -1) {
            tasks.splice(index, 1);
        }

        saveTasks();

    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
}

const savedTasks = localStorage.getItem("tasks");

if (savedTasks) {

    tasks = JSON.parse(savedTasks);

    tasks.forEach(function (task) {
        createTask(task);
    });

}

addBtn.addEventListener("click", function () {

    const taskText = taskInput.value;

    if (taskText === "") {
        alert("task not entered");
        return;
    }

    const newTask = {
        text: taskText,
        completed: false
    };

    tasks.push(newTask);

    createTask(newTask);

    saveTasks();

    taskInput.value = "";

});