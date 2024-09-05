const hamburgerIcon = document.querySelector('.hamburger-icon');
const menu = document.querySelector('.menu');

hamburgerIcon.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});

// Add this CSS rule to your stylesheet
.show - menu {
    display: block;
}