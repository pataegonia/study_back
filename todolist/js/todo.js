const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input")
const todoList = document.querySelector("#todo-list")

let todos = [];

function saveTodos() {
    localStorage.setItem("todos",JSON.stringify(todos));
}

function handleXClick(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodos();
}


function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText=newTodoObj.text
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click",handleXClick)
    li.appendChild(span);
    li.appendChild(button);
    todoList.appendChild(li)
}

function handleTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value="";
    const newTodoObj = {
        text:newTodo,
        id: Date.now()
    }
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit",handleTodoSubmit)

const gettodos = localStorage.getItem("todos")
if(gettodos!=null){
    const parsedTodos = JSON.parse(gettodos)
    todos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}