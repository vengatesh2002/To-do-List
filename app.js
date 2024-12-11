const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const noTaskMessage = document.getElementById("noTaskMessage");

addTaskBtn.addEventListener("click", () => 
    {
    const taskValue = taskInput.value.trim();

    if (taskValue === "") 
    {
        alert("Please enter a task!");
        return;
    }
    const li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center";
    li.innerHTML = `
        <span>${taskValue}</span>
        <div>
            <button class="complete-btn btn btn-success btn-sm">Complete</button>
            <button class="delete-btn btn btn-danger btn-sm">Delete</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

    noTaskMessage.style.display = "none";

    li.querySelector(".complete-btn").addEventListener("click", () => 
    {
        li.querySelector("span").classList.toggle("completed");
    });

    li.querySelector(".delete-btn").addEventListener("click", () => 
    {
        li.remove();
        if (taskList.children.length === 0) 
        {
            noTaskMessage.style.display = "block";
        }
    });
});

if (taskList.children.length === 0) 
{
    noTaskMessage.style.display = "block";
}
