document.addEventListener("DOMContentLoaded", function() {
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", function() {
      document.body.classList.toggle("dark-mode");
  });
});
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-mode');
};
