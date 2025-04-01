document.addEventListener('DOMContentLoaded', function() {
    const menu = document.querySelector('.modal');
    const openButton = document.querySelector('.btn__menu');
    const closeButton = document.querySelector('.btn__menu--close');

    if (openButton && closeButton && menu) {
        openButton.addEventListener('click', openMenu);
        closeButton.addEventListener('click', closeMenu);

        function openMenu() {
            menu.style.visibility = 'visible';
            menu.style.opacity = '1';
            menu.style.transform = 'translateX(0)';
        }

        function closeMenu() {
            menu.style.visibility = 'hidden';
            menu.style.opacity = '0';
            menu.style.transform = 'translateX(300%)';
        }
    } else {
        console.error("One or more modal elements not found.");
    }
});