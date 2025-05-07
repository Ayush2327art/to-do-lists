document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("todo-form");
  const todoList = document.getElementById("todo-list");
  const themeToggle = document.getElementById("theme-toggle");

  // Toggle between light and dark mode
  themeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");
  });

  // Handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const datetime = document.getElementById("datetime").value;
    const preference = document.getElementById("preference").value;

    // Validate inputs
    if (!title || !description || !datetime) {
      alert("Please fill in all fields.");
      return;
    }

    // Create a new task item
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    todoItem.innerHTML = `
      <h3>${title}</h3>
      <p>${description}</p>
      <div class="meta">
        <strong>Due:</strong> ${new Date(datetime).toLocaleString()} | 
        <strong>Priority:</strong> ${preference}
      </div>
    `;

    // Append the task to the todo list
    todoList.appendChild(todoItem);

    // Notify the user
    alert("Task added successfully!");

    // Clear form fields
    form.reset();
  });
});