//Theme Declaration
const buttonTheme = document.querySelector('.theme');
const iconTheme = buttonTheme.querySelector('i');
const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
const theme = localStorage.getItem('theme');

if (theme === 'dark') {
    container.classList.add('darkTheme');
    h1.classList.add('darkTheme');
    iconTheme.classList.replace('fa-sun', 'fa-moon');
    buttonTheme.title = 'Dark Theme';
    buttonTheme.classList.add('darkTheme');
}

buttonTheme.addEventListener('click', () => {
    container.classList.toggle('darkTheme');
    h1.classList.toggle('darkTheme');
    buttonTheme.classList.toggle('darkTheme');
    
    if (container.classList.contains('darkTheme')) {
        iconTheme.classList.replace('fa-sun', 'fa-moon');
        buttonTheme.title = 'Dark Theme';
        localStorage.setItem('theme', 'dark');
    } else {
        iconTheme.classList.replace('fa-moon', 'fa-sun');
        buttonTheme.title = 'Light Theme';
        localStorage.setItem('theme', 'light');
    }
    event.currentTarget.classList.toggle('rotate');
});
