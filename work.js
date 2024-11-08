document.getElementById('worker-login').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('active');
    document.querySelector('form').action = '/worker-login';
});

document.getElementById('user-login').addEventListener('click', function() {
    document.getElementById('login-form').classList.add('active');
    document.querySelector('form').action = '/user-login';
});
