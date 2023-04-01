// Select the form and input field
const form = document.querySelector('form');
const input = document.querySelector('#new-todo');

// Select the unordered list to display the todo items
const list = document.querySelector('#todo-list');

// Add an event listener to the form to handle form submission
form.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the input field
  const todoText = input.value;

  // Create a new list item and append it to the list
  const listItem = document.createElement('li');
  listItem.innerText = todoText;
  list.appendChild(listItem);

  // Clear the input field
  input.value = '';
});
