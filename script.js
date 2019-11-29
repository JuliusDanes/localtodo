const elements = {
  todoList: document.getElementById("todo-list"),
  todoInput: document.getElementById("todo-input"),
  addButton: document.getElementById("add-todo")
};

function isInputFilled() {
  return elements.todoInput.value.length > 0;
}

function addTodo() {
  if (isInputFilled()) {
    const todoText = elements.todoInput.value;
    const newTodoElement = document.createElement("li");
    newTodoElement.innerText = todoText;

    elements.todoList.appendChild(newTodoElement);
    elements.todoInput.value = "";
    elements.todoInput.focus();
  }
}

elements.todoInput.addEventListener("keypress", function(e) {
  if (e.keyCode === 13) {
    addTodo();
  }
});

elements.addButton.addEventListener("click", function() {
  addTodo();
});

elements.todoInput.focus();
