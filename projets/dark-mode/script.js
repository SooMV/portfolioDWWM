const switchBtn = document.getElementById('switch-theme');
const body = document.querySelector('body');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
    body.classList.add(savedTheme);
}

switchBtn.addEventListener('click', switchTheme);

function switchTheme() {
    if (body.classList.contains('darkMode')) {
        body.classList.remove('darkMode');
        localStorage.setItem('theme', '');
    } else {
        body.classList.add('darkMode');
        localStorage.setItem('theme', 'darkMode');
    }
}