// Get references to DOM elements for form, dialog, buttons, inputs, and task container
const taskForm = document.getElementById("task-form");
const confirmCloseDialog = document.getElementById("confirm-close-dialog");
const openTaskFormBtn = document.getElementById("open-task-form-btn");
const closeTaskFormBtn = document.getElementById("close-task-form-btn");
const addOrUpdateTaskBtn = document.getElementById("add-or-update-task-btn");
const cancelBtn = document.getElementById("cancel-btn");
const discardBtn = document.getElementById("discard-btn");
const tasksContainer = document.getElementById("tasks-container");
const titleInput = document.getElementById("title-input");
const dateInput = document.getElementById("date-input");
const descriptionInput = document.getElementById("description-input");

// Retrieve tasks from localStorage or initialize as empty array
const taskData = JSON.parse(localStorage.getItem("data")) || [];
let currentTask = {};

// Remove special characters from input values (for title and description)
const removeSpecialChars = (val) => {
  return val.trim().replace(/[^A-Za-z0-9\-\s]/g, '')
}

// Add a new task or update an existing one
const addOrUpdateTask = () => {
   if(!titleInput.value.trim()){
    alert("Please provide a title");
    return;
  }
  const dataArrIndex = taskData.findIndex((item) => item.id === currentTask.id);
   
  removeSpecialChars(descriptionInput.value)
  const taskObj = {
    id: `${removeSpecialChars(titleInput.value).toLowerCase().split(" ").join("-")}-${Date.now()}`,
    title: removeSpecialChars(titleInput.value),
    date: dateInput.value,
    description: removeSpecialChars(descriptionInput.value)
  };

  if (dataArrIndex === -1) {
    // Add new task to the beginning of the array
    taskData.unshift(taskObj);
  } else {
    // Update existing task
    taskData[dataArrIndex] = taskObj;
  }

  // Save updated tasks to localStorage
  localStorage.setItem("data", JSON.stringify(taskData));
  updateTaskContainer()
  reset()
};

// Render all tasks in the tasks container
const updateTaskContainer = () => {
  tasksContainer.innerHTML = "";

  taskData.forEach(
    ({ id, title, date, description }) => {
        (tasksContainer.innerHTML += `
        <div class="task" id="${id}">
          <p><strong>Title:</strong> ${title}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Description:</strong> ${description}</p>
          <button onclick="editTask(this)" type="button" class="btn">Edit</button>
          <button onclick="deleteTask(this)" type="button" class="btn">Delete</button> 
        </div>
      `)
    }
  );
};

// Delete a task from the list and update localStorage
const deleteTask = (buttonEl) => {
  const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  buttonEl.parentElement.remove();
  taskData.splice(dataArrIndex, 1);
  localStorage.setItem("data", JSON.stringify(taskData));
}

// Populate the form with task data for editing
const editTask = (buttonEl) => {
    const dataArrIndex = taskData.findIndex(
    (item) => item.id === buttonEl.parentElement.id
  );

  currentTask = taskData[dataArrIndex];

  titleInput.value = currentTask.title;
  dateInput.value = currentTask.date;
  descriptionInput.value = currentTask.description;

  addOrUpdateTaskBtn.innerText = "Update Task";

  taskForm.classList.toggle("hidden");  
}

// Reset the form and UI state
const reset = () => {
  addOrUpdateTaskBtn.innerText = "Add Task";
  titleInput.value = "";
  dateInput.value = "";
  descriptionInput.value = "";
  taskForm.classList.toggle("hidden");
  currentTask = {};
}

// If there are tasks, render them on page load
if (taskData.length) {
  updateTaskContainer();
}

// Show the task form when the open button is clicked
openTaskFormBtn.addEventListener("click", () =>
  taskForm.classList.toggle("hidden")
);

// Handle closing the form: show confirmation dialog if there are unsaved changes
closeTaskFormBtn.addEventListener("click", () => {
  const formInputsContainValues = titleInput.value || dateInput.value || descriptionInput.value;
  const formInputValuesUpdated = titleInput.value !== currentTask.title || dateInput.value !== currentTask.date || descriptionInput.value !== currentTask.description;

  if (formInputsContainValues && formInputValuesUpdated) {
    confirmCloseDialog.showModal();
  } else {
    reset();
  }
});

// Cancel closing the form (close the dialog)
cancelBtn.addEventListener("click", () => confirmCloseDialog.close());

// Discard changes and reset the form
discardBtn.addEventListener("click", () => {
  confirmCloseDialog.close();
  reset()
});

// Handle form submission for adding or updating a task
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();

  addOrUpdateTask();
});