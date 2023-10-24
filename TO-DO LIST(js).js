document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

function loadTasks() {
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskListDiv = document.getElementById('task-list');

    taskListDiv.innerHTML = '';

    taskList.forEach((task, index) => {
        const taskItem = document.createElement('div');
        taskItem.classList.add('task-item');
        taskItem.innerHTML = `
            <span>${task}</span>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete(-)</button>
        `;
        taskListDiv.appendChild(taskItem);
    });
}

function addTask() {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();

    if (task === '') return;

    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.push(task);
    localStorage.setItem('tasks', JSON.stringify(taskList));

    taskInput.value = '';
    loadTasks();
}

function editTask(index) {
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    const editedTask = prompt('Edit task:', taskList[index]);
    
    if (editedTask !== null) {
        taskList[index] = editedTask;
        localStorage.setItem('tasks', JSON.stringify(taskList));
        loadTasks();
    }
}

function deleteTask(index) {
    const taskList = JSON.parse(localStorage.getItem('tasks')) || [];
    taskList.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(taskList));
    loadTasks();
}