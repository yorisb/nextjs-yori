//=================== DOM Elements ===================
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navItems = document.querySelectorAll(".nav__item");
const header = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav__link");
const sections = document.querySelectorAll("section");

//=================== Mobile Menu Toggle ===================
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.toggle("nav__menu--open");
        changeIcon();
    });
}

// Close menu when clicking nav links
navItems.forEach((item) => {
    item.addEventListener("click", () => {
        if (navMenu.classList.contains("nav__menu--open")) {
            navMenu.classList.remove("nav__menu--open");
            changeIcon();
        }
    });
});

// Change nav toggle icon
function changeIcon() {
    if (navMenu.classList.contains("nav__menu--open")) {
        navToggle.classList.replace("ri-menu-3-line", "ri-close-line");
    } else {
        navToggle.classList.replace("ri-close-line", "ri-menu-3-line");
    }
}

//=================== Smooth Scrolling ===================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (navMenu && navMenu.classList.contains('nav__menu--open')) {
                navMenu.classList.remove('nav__menu--open');
                changeIcon();
            }
        }
    });
});

//=================== Active Link Highlighting ===================
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

//=================== Header Scroll Effect ===================
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("header--scroll");
    } else {
        header.classList.remove("header--scroll");
    }
});

//=================== Swiper Initialization ===================
const swiper = new Swiper(".certification__wrapper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    effect: "coverflow",
    grabCursor: true,
    slidesPerView: 1,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    breakpoints: {
        520: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 3,
        }
    }
});

//=================== ScrollReveal Animations ===================
const sr = ScrollReveal({
    duration: 2000,
    distance: "100px",
    delay: 400,
    reset: false,
});

sr.reveal(".hero__content, .about__content");
sr.reveal(".hero__img", { origin: "top" });

sr.reveal(".hero__info-wrapper, .skills__title, .skills__content, .qualification__name, .qualification__item, .project__content, .certification__card, .footer__content", {
    delay: 500,
    interval: 100,
});

sr.reveal(".qualification__footer-text, .contact__content", {
    origin: "left",
});

sr.reveal(".qualification__footer .btn, .contact__btn", { 
    origin: "right" 
});

//=================== Theme Toggle (Dark/Light Mode) ===================
function initThemeToggle() {
    const themeToggleBtn = document.createElement('button');
    themeToggleBtn.innerHTML = '<i class="ri-moon-line"></i>';
    themeToggleBtn.classList.add('theme-toggle');
    themeToggleBtn.setAttribute('aria-label', 'Toggle dark mode');
    document.body.appendChild(themeToggleBtn);

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Apply the current theme
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.body.classList.add('dark-mode');
        themeToggleBtn.innerHTML = '<i class="ri-sun-line"></i>';
    }

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        
        // Update icon
        themeToggleBtn.innerHTML = isDarkMode ? '<i class="ri-sun-line"></i>' : '<i class="ri-moon-line"></i>';
        
        // Save preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });

    // Listen for system theme changes (if user hasn't set preference)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) {
            document.body.classList.toggle('dark-mode', e.matches);
            themeToggleBtn.innerHTML = e.matches ? '<i class="ri-sun-line"></i>' : '<i class="ri-moon-line"></i>';
        }
    });
}

//=================== Back to Top Button ===================
function initBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="ri-arrow-up-line"></i>';
    backToTopBtn.classList.add('back-to-top');
    backToTopBtn.setAttribute('aria-label', 'Back to top');
    document.body.appendChild(backToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

//=================== Initialize All Functions ===================
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
    initBackToTop();
});

//=================== Form Validation (if contact form exists) ===================
const contactForm = document.querySelector('.contact__form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = this.querySelector('input[name="name"]')?.value;
        const email = this.querySelector('input[name="email"]')?.value;
        
        if (!name || !email) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Here you would typically send the form data to a server
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

//=================== Animate on Scroll ===================
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
}

// Add animation classes to elements
document.querySelectorAll('.hero__content, .hero__image-wrapper, .section__header, .qualification__item, .project__content, .certification__card').forEach(el => {
    el.classList.add('animate-on-scroll');
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);     