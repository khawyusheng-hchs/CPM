// Select the dark mode toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Check if dark mode was previously enabled
let darkMode = localStorage.getItem('darkMode'); 

const enableDarkMode = () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
}

// Load saved preference
if (darkMode === 'enabled') {
    enableDarkMode(); 
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');
    if (darkMode !== 'enabled') {
        enableDarkMode(); 
    } else {  
        disableDarkMode(); 
    }
});
