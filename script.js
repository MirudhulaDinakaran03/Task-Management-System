let taskList = [];

const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskListElement = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    if (taskText) {
        const task = {
            id: Date.now(),
            text: taskText,
            completed: false
        };
        taskList.push(task);
        renderTaskList();
        taskInput.value = '';
    }
});

function renderTaskList() {
    const taskListHtml = taskList.map((task) => {
        return `
            <li class="task-item" data-id="${task.id}">
                <input type="checkbox" ${task.completed ? 'checked' : ''}>
                <span>${task.text}</span>
                <button class="delete-btn">Delete</button>
            </li>
        `;
    }).join('');
    taskListElement.innerHTML = taskListHtml;
    const deleteBtns = document.querySelectorAll('.delete-btn');
    deleteBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            const taskId = e.target.closest('.task-item').getAttribute('data-id');
            taskList = taskList.filter((task) => task.id !== parseInt(taskId));
            renderTaskList();
        });
    });
}

renderTaskList();


