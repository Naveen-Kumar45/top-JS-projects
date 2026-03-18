// This JavaScript file handles the logic for the Task Manager application.
// It manages task creation, deletion, status changes, local storage persistence,
// and DOM manipulation to display tasks dynamically.

// Get references to DOM elements
let taskContainer = document.getElementById("taskList");
let addBtn=document.getElementById("addBtn");
let taskInput=document.getElementById("taskInput");
let saveBtn=document.getElementById("saveBtn");

// Function to retrieve tasks from local storage
let getTasksFromLocalStorage = () => {
    let storageValue = localStorage.getItem("tasks");
    if (storageValue !== null) {
        return storageValue;
    }
    else {
        return "[]";
    }
}

// Parse tasks from local storage and initialize task count
let tasks = JSON.parse(getTasksFromLocalStorage());
let taskCount=tasks.length;

// Function to toggle the completion status of a task
let changeTheStatusOfTask = (taskId, spanId, checkBoxId) => {
    let spanItem = document.getElementById(spanId);
    let checkBoxItem = document.getElementById(checkBoxId);

    // Toggle the "finished" class on the task text
    spanItem.classList.toggle("finished");

    // Find the task in the tasks array and toggle its isChecked property
    let taskIndex = tasks.findIndex( (eachItem) => {
        if ("taskId"+eachItem.id === taskId){
            return true
        }
    });
    
    let task = tasks[taskIndex]
    if (task.isChecked === false){
        task.isChecked = true;
    }
    else{
        task.isChecked = false;
    }
}

// Function to delete a task from the list and array
let deleteTheTask = (taskId) => {
    // Find the task index in the tasks array
    let taskIndex = tasks.findIndex( (eachItem) => {
        if ("taskId"+eachItem.id === taskId){
            return true
        }
    });

    // Remove the task from the tasks array
    tasks.splice(taskIndex, 1);

    // Remove the task element from the DOM
    let task = document.getElementById(taskId);
    task.remove();
}

// Function to create and add a task item to the DOM
let taskFunction = (addTask) => {
    // Generate unique IDs for the task elements
    let taskId = "taskId" + addTask.id;
    let spanId = "spanId" + addTask.id;
    let checkBoxId = "checkBoxId" + addTask.id;

    // Create the task list item element
    let taskItem = document.createElement("li");
    taskItem.classList.add("task-item");
    taskItem.id = taskId;
    taskContainer.appendChild(taskItem);

    // Create the task row container
    let taskRow = document.createElement("div");
    taskRow.classList.add("task-row");
    taskItem.appendChild(taskRow);

    // Create the checkbox for task completion
    let taskCheckBox = document.createElement("input");
    taskCheckBox.type = "checkbox";
    taskCheckBox.classList.add("task-checkbox");
    taskCheckBox.id = checkBoxId;
    taskCheckBox.checked = addTask.isChecked;
    taskRow.appendChild(taskCheckBox);

    // Add event listener to toggle task status on checkbox change
    taskCheckBox.addEventListener("change", () => {
        changeTheStatusOfTask(taskId, spanId, checkBoxId);
    }); 

    // Create the task text element
    let taskText = document.createElement("span");
    taskText.classList.add("task-text");
    taskText.textContent = addTask.taskName;
    taskText.id = spanId;
    taskRow.appendChild(taskText);

    // Apply "finished" class if the task is checked
    taskCheckBox.checked === true ? taskText.classList.add("finished") : taskText.classList.remove("finished");

    // Create the delete button container
    let deleteBtnContainer = document.createElement("div");
    deleteBtnContainer.classList.add("delete-btn-container");
    taskItem.appendChild(deleteBtnContainer);
    
    // Create the delete icon
    let deleteBtn = document.createElement("i");
    deleteBtn.classList.add("fa-solid", "fa-trash","delete-icon");
    deleteBtnContainer.appendChild(deleteBtn);

    // Add event listener to delete the task on click
    deleteBtn.addEventListener("click", () => {
        deleteTheTask(taskId);
    });
}

// Render all existing tasks on page load
for (let task of tasks) {
    taskFunction(task);
}

// Event listener for adding a new task
addBtn.addEventListener("click", () => {
    // Check if input is empty
    if (taskInput.value === "") {
        alert("Please enter a task");
        return
    };

    // Increment task count and create new task object
    taskCount+=1;
    let addTask = {
        taskName : taskInput.value,
        id : Date.now(),
        isChecked : false,
    };
    
    // Add to tasks array, render it, and clear input
    tasks.push(addTask);
    taskFunction(addTask);
    taskInput.value = "";
});

// Event listener for saving tasks to local storage
saveBtn.addEventListener("click", () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
});

// Event listener for clearing all tasks
clearBtn.addEventListener("click", () => {
    let confirmation = confirm("Are you sure you want to clear all tasks?");
    if (confirmation) {
        // Remove from local storage, clear array, clear DOM, and save empty array
        localStorage.removeItem("tasks");
        tasks = [];
        taskContainer.innerHTML = "";
        localStorage.setItem("tasks",JSON.stringify(tasks));
    }
});
