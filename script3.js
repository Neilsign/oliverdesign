// Get references to the sidebar and toggle button
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('toggle-btn');

// Add event listener to toggle the sidebar
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('open');
});