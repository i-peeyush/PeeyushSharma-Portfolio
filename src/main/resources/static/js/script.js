// ----------------------------
// Loader Animation
// ----------------------------
window.addEventListener('load', () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    if (!loaderWrapper) return;

    // Fade out loader smoothly
    setTimeout(() => {
        loaderWrapper.style.opacity = '0';
        loaderWrapper.style.transition = 'opacity 0.5s ease';

        setTimeout(() => {
            loaderWrapper.style.display = 'none';
        }, 600);
    }, 2000); // loader stays visible for 2 seconds
});


// ----------------------------
// Header Scroll Effect
// ----------------------------
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// ----------------------------
// Smooth Scroll for Navigation Links
// ----------------------------
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 80, // adjust for fixed header
                behavior: 'smooth'
            });
        }
    });
});


// ----------------------------
// Optional: Active Link Highlight
// ----------------------------
window.addEventListener('scroll', () => {
    const fromTop = window.scrollY + 100;

    navLinks.forEach(link => {
        const section = document.querySelector(link.getAttribute('href'));
        if (section && section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
