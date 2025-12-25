// Get the button element
const btn = document.getElementById('colorModeBtn');

// Add a click event listener
btn.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
    
    // Change button text based on mode
    if (document.body.classList.contains('dark-mode')) {
        btn.textContent = "Light Mode";
    } else {
        btn.textContent = "Dark Mode";
    }
});
