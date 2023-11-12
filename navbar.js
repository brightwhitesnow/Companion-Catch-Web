function handleNavbar() {
    const navbarContent = document.getElementById('navbarContent').innerHTML;
    const navbarNav = document.getElementById('navbarNav');

    if (window.innerWidth < 992) {
        navbarNav.innerHTML = navbarContent;
    } else {
        navbarNav.innerHTML = '';
    }
}

handleNavbar();

window.addEventListener('resize', handleNavbar);