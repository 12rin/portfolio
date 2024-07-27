// Select the menu icon and navbar elements
let menuIcon = document.querySelector('.menu-icon'); // Change this selector to match your actual HTML
let navbar = document.querySelector('.navbar');

// Add click event listener to the menu icon
menuIcon.onclick = () => {
    // Toggle the 'bx-x' class on the menu icon
    menuIcon.classList.toggle('bx-x');
    
    // Toggle the 'active' class on the navbar
    navbar.classList.toggle('active');
};