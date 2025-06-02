function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Mark as done on click
  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'X';
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}
