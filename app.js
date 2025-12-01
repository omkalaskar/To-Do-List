let add_task_button = document.getElementsByClassName("add_task_text")[0];
let taskContainer = document.getElementsByClassName("task-cont")[0];

add_task_button.addEventListener("click", () => {

    const currentTasks = taskContainer.querySelectorAll(".task").length;

    if (currentTasks >= 7) {
        alert("You can only add up to 7 tasks!");
        return;
    }    

        const check = document.createElement("input");
        check.type = "checkbox";
        check.classList.add("checkbox");

        const task = document.createElement("input");
        task.type = "text";
        task.placeholder = "Enter task...";
        task.classList.add("task");

        
        
        
        const tasks = document.createElement("div");
        tasks.className = "tasks"
        taskContainer.appendChild(tasks);
        task.classList.add("task");

        
        tasks.appendChild(task);
        tasks.appendChild(check);
        
        // Trigger animation AFTER appending
        setTimeout(() => {
            task.classList.add("display");
        }, 10); // allow DOM to append, then fade in
  
    
    
});