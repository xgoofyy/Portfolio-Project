// closes sidebar after link press on mobile devices
function initMenu() {
    const checkbox = document.getElementById('sidebar-active');

    const navLinks = document.querySelectorAll('.links a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            checkbox.checked = false;
        });
    });
}

document.addEventListener('DOMContentLoaded', initMenu);