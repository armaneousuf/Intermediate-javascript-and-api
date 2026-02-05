const todoInput = document.querySelector("#todo-input");
const todoButton = document.querySelector("#todo-button");
const todoDynamic = document.querySelector("#dynamic-items");

todoButton.addEventListener("click", () => {
  const text = todoInput.value.trim();
  if (text === "") {
    return alert("Please provide something");
    }
    
    const li = document.createElement('li');
    li.innerText = text;

    todoDynamic.appendChild(li);
    todoInput.value = '';
});
