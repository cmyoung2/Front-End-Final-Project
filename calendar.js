document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const calendarContainer = document.getElementById('calendar');
    const taskDateInput = document.getElementById('task-date');
    const taskDescriptionInput = document.getElementById('task-description');
    const taskListElement = document.getElementById('tasks');

    renderCalendar(currentMonth, currentYear);

    function renderCalendar(month, year) {
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();

        calendarContainer.innerHTML = '';

        for (let i = 1; i <= daysInMonth; i++) {
            const dayCell = document.createElement('div');
            dayCell.textContent = i;
            dayCell.dataset.date = formatDate(new Date(year, month, i));
            dayCell.addEventListener('click', function () {
                openTaskForm(dayCell.dataset.date);
            });
            calendarContainer.appendChild(dayCell);
        }
    }

    function openTaskForm(date) {
        taskDateInput.value = date;
        taskDescriptionInput.value = '';
    }

    window.addTask = function () {
        const taskDate = taskDateInput.value;
        const taskDescription = taskDescriptionInput.value;

        if (taskDate && taskDescription) {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `${taskDate} - ${taskDescription} <button onclick="deleteTask(this)">Delete</button>`;
            taskListElement.appendChild(taskItem);
        }
    };

    window.deleteTask = function (button) {
        const taskItem = button.parentElement;
        taskItem.remove();
    };

    function formatDate(date) {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    let tasksForMonth = Array(31).fill([]);

    function updateCalendarDisplay() {
        const daysElements = document.getElementById('days').children;

        for (let i = 0; i < daysElements.length; i++) {
            const dayCell = daysElements[i];
            const dayDate = new Date(dayCell.dataset.date);
            const dayOfMonth = dayDate.getDate();

            const taskList = document.createElement('ul');
            tasksForMonth[dayOfMonth - 1].forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.innerHTML = `${task} <button onclick="deleteTask(this)">Delete</button>`;
                taskList.appendChild(taskItem);
            });
            dayCell.innerHTML = '';
            dayCell.appendChild(taskList);
        }
    }
});
