const todoContainer = document.getElementById('todo-container');
const loadTodo = () => {
  const url = "https://jsonplaceholder.typicode.com/todos";
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTodo(data))
    .catch((error) => console.log("Error", error));
};

const displayTodo = (todos) => {
  // 1.Get the parent
  todoContainer.innerHTML = "";

  // 2. Get each items
  todos.forEach((todo) => {
    const todoCard = document.createElement("div");
    todoCard.innerHTML = `
        <div class="todo-card">
            <h4>${todo.title}</h4>
            ${
              todo.completed
                ? `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="16" height="16" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>`
                : `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" width="16" height="16" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>`
            }
        </div>
        `;
    todoContainer.appendChild(todoCard);
  });

};

const remove = document.getElementById("remove");
const removeTodo = () => {
    todoContainer.innerHTML = '';
};