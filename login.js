function loginUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    //Code is set to check if username and password are demo because you would need a server to store data.
    if (username === 'demoUser' && password === 'demoPassword') {
        loginMessage.textContent = 'Login successful. Redirecting to dashboard...';

        // Redirect to dashboard page after a brief delay
        setTimeout(() => {
            window.location.href = 'myDash.html';
        }, 2000);
    } else {
        loginMessage.textContent = 'Invalid username or password.';
    }
}