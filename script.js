const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('change', () => {
    const body = document.body;   

    body.classList.toggle('dark-mode');
});
