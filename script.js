const taskInput = document.getElementById("task");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">Delete</button>;
taskList.appendChild(taskItem);
        `
 taskInput.value = "";
const deleteButton = taskItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
            taskItem.remove();
        });
    }
}
addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTask();
    }
});