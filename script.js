const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    const li = document.createElement('li');
    li.innerHTML = `<span>${taskText}</span><button class="deleteBtn">Delete</button>`;
    li.querySelector('.deleteBtn').addEventListener('click', function() {
        li.remove();
    });
    taskList.appendChild(li);
    taskInput.value = '';
}