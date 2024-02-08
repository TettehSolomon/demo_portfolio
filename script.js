document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.hamburger-menu');
    const navbarList = document.querySelector('#navbar ul');

    menuToggle.addEventListener('click', function () {
        navbarList.classList.toggle('active');
    });
});
