document.addEventListener('DOMContentLoaded', (event) => {
  const toggleDarkMode = document.createElement('button');
  toggleDarkMode.textContent = 'Toggle Dark Mode';
  toggleDarkMode.style.position = 'fixed';
  toggleDarkMode.style.bottom = '20px';
  toggleDarkMode.style.right = '20px';
  toggleDarkMode.style.padding = '10px';
  toggleDarkMode.style.backgroundColor = '#494a49';
  toggleDarkMode.style.color = 'white';
  toggleDarkMode.style.border = 'none';
  toggleDarkMode.style.cursor = 'pointer';
  document.body.appendChild(toggleDarkMode);

  toggleDarkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
