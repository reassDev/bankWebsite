var users = [
    { username: 'reass', password: 'password' },
    { username: 'user2', password: 'password' },
];

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var validLogin = users.some(function(user) {
        return user.username === username && user.password === password;
    });

    if (validLogin) {
        window.location.href = 'bankaccount.html';
    } else {
        alert('Invalid username or password');
    }
});