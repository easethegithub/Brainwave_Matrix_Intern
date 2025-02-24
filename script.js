document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskTitle = document.getElementById("taskTitle").value.trim();
    let taskTime = document.getElementById("taskTime").value;

    if (taskTitle === "" || taskTime === "") {
        alert("Please enter both task name and time!");
        return;
    }

    let task = { title: taskTitle, time: taskTime };
    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    displayTasks();
    document.getElementById("taskTitle").value = "";
    document.getElementById("taskTime").value = "";
}

function displayTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<span>${task.time} - ${task.title}</span> <button onclick="deleteTask(${index})">❌</button>`;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    displayTasks();
}

function loadTasks() {
    displayTasks();
}
