document.addEventListener('DOMContentLoaded', function() {
    // Add initial tasks and notifications
    addTask('Task 1', '2023-12-18');
    addTask('Task 2', '2023-12-20');
    addNotification('Upcoming Event', '2023-12-13');

    // Function to add a task
    window.addQuickTask = function() {
        const taskName = document.getElementById('quickTaskName').value;
        const taskDueDate = document.getElementById('quickTaskDueDate').value;

        if (taskName && taskDueDate) {
            addTask(taskName, taskDueDate);
            document.getElementById('quickTaskName').value = '';
            document.getElementById('quickTaskDueDate').value = '';
        }
    };

    // Function to add a task to the task list
    function addTask(name, dueDate) {
        const taskListElement = document.getElementById('taskList');
        const taskItem = document.createElement('li');
        taskItem.textContent = `${name} - Due: ${dueDate}`;
        taskListElement.appendChild(taskItem);
    }

    // Function to add a notification to the notification list
    function addNotification(message, date) {
        const notificationListElement = document.getElementById('notificationList');
        const notificationItem = document.createElement('li');
        notificationItem.textContent = `${message} - ${date}`;
        notificationListElement.appendChild(notificationItem);
    }
});