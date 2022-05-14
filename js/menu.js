var isMenuClosed = true;

window.addEventListener('scroll', function () {
    nav_scroll();
});

window.addEventListener('load', function () {
    nav_scroll();
    menu();
    menu_items();
});

function nav_scroll() {
    var pagePosition = window.pageYOffset;
    var nav = document.getElementById("nav");
    var navLinks = document.getElementById("navLinks");
    if (pagePosition <= 520) {
        nav.classList.remove('nav-solid');
        nav.className = ('nav-transparent');
        nav.style.transition = '1s';
        navLinks.style.top = '70px';
    } else {
        nav.classList.remove('nav-transparent');
        nav.className = ('nav-solid');
        nav.style.transition = '1s';
        navLinks.style.top = '75px';
    }
}

function menu() {
    var navMenu = document.getElementById("navMenu");
    navMenu.addEventListener('click', function () {
        nav_menu();
    });
}

function nav_menu() {
    var navLinks = document.getElementById("navLinks");
    if (isMenuClosed) {
        navLinks.style.width = '50vw';
        isMenuClosed = false;
    } else {
        navLinks.style.width = '0%';
        navLinks.style.overflow = 'hidden';
        isMenuClosed = true;
    }
}

function menu_items() {
    const nodeList = document.querySelectorAll("#navLinks a");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].addEventListener('click', function () {
            nav_menu_items();
        });
    }
}

function nav_menu_items() {
    var navLinks = document.getElementById("navLinks");
    if (isMenuClosed == false) {
        navLinks.style.width = '0%';
        navLinks.style.overflow = 'hidden';
        isMenuClosed = true;
    }
}