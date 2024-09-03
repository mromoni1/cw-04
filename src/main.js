import "../style.css";

// Data
const todos = [
    "Buy coffee",
    "Buy sugar", 
    "Buy jam"
];

// Functions (classes)
function renderTodos() {
    // gets the todo-list HTML elements
    const todoListSection = 
        document.getElementById(
            "todo-list"
        );
    // replaces milk and bread (which are hard coded)
    todoListSection.innerHTML = ""; 

    for (let i = 0; i < todos.length; i++) {
        const todo = todos[i];
        const todoItemDiv = document.createElement("div");
        //todoItemDiv.textContent = todo;

        // adds style to newly added elements 
        todoItemDiv.classList.add("p-4", "todo-item");

        const todoTextDiv = document.createElement("div");
        todoTextDiv.classList.add("todo-text");
        todoTextDiv.textContent = todo;

        const todoEditInput = document.createElement("input");
        todoEditInput.classList.add("hidden", "todo-edit");
        todoEditInput.setAttribute("value", todo);


        todoItemDiv.appendChild(todoTextDiv);
        todoItemDiv.appendChild(todoEditInput);

        todoListSection.appendChild(todoItemDiv);

    }
}

// need to call the function to actually execute the code 
// renderTodos();

document.addEventListener("DOMContentLoaded", renderTodos)






