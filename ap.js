/* MOBILE MENU TOGGLE */

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");

// Toggle mobile menu
menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll(".navbar__links");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("is-active");
        menuLinks.classList.remove("active");
    });
});

/* SMOOTH SCROLL FOR BUTTONS */

const scrollLinks = document.querySelectorAll('a[href^="#"]');

scrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });
        }
    });
});

/* NAVBAR BACKGROUND ON SCROLL */

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.style.background = "#0a0a0a";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.4)";
    } else {
        navbar.style.background = "#131313";
        navbar.style.boxShadow = "none";
    }
});
