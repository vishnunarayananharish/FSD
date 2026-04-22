// Load tasks when page opens
document.addEventListener("DOMContentLoaded", showTasks);

function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Enter a task");
        return;
    }

    // Get existing tasks
    let tasks = localStorage.getItem("tasks");

    if (tasks == null) {
        tasks = [];
    } else {
        tasks = JSON.parse(tasks);
    }

    // Add new task
    tasks.push(task);

    // Save as JSON
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = "";

    showTasks();
}

function showTasks() {

    let list = document.getElementById("taskList");
    list.innerHTML = "";

    let tasks = localStorage.getItem("tasks");

    if (tasks == null) {
        tasks = [];
    } else {
        tasks = JSON.parse(tasks);
    }

    tasks.forEach(function(task) {
        let li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
    });
}
