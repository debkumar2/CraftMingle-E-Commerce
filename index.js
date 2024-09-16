const header = document.querySelector('header');

window.addEventListener('scroll', function () {
    header.classList.toggle('sticky', window.scrollY > 50)
});

let menu = document.querySelector('#menu-icons');
let navList = document.querySelector('.navbar-items');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navList.classList.remove('open');
}

const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", function () {
    if (window.pageYOffset > 50) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

// When the user clicks on the button, smoothly scroll to the top of the document
scrollToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    scrollToTopButton.style.display = "none";
});

const sr = ScrollReveal({
    distance: '50px',
    duration: 1700,
});

sr.reveal('.home', { delay: 100, origin: 'top' });
sr.reveal('.main-craft', { delay: 200, origin: 'top' });
sr.reveal('.arrival', { delay: 200, origin: 'top' });
sr.reveal('.cta', { delay: 200, origin: 'top' });
sr.reveal('.trending', { delay: 200, origin: 'top' });
sr.reveal('.latest', { delay: 200, origin: 'top' });

