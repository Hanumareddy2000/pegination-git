function openTab(event, tabName) {
    // Hide all tab content
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from all buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabName).classList.add('active');
    // Add active class to the button that was clicked
    event.currentTarget.classList.add('active');
}

// Open the first tab by default
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.tab-button.active').click();
});
