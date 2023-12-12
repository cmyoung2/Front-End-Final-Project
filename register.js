function registerUser() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registrationMessage = document.getElementById('registrationMessage');

    // Check if passwrods match
    if (password !== confirmPassword) {
        registrationMessage.textContent = 'Passwords do not match.';
        return;
    }

    console.log(`User Registered:\nUsername: ${username}\nPassword: ${password}`);
    registrationMessage.textContent = 'Registration successful. Redirecting to login...';

    // Redirect to login page after a brief delay (for demo purposes)
    setTimeout(() => {
        window.location.href = 'login.html';
    }, 2000);
}