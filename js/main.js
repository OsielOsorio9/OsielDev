// Initialize Lucide icons
lucide.createIcons();

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const themeToggleMobile = document.getElementById('theme-toggle-mobile');
const htmlElement = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
if (savedTheme === 'dark') {
    htmlElement.classList.add('dark');
}

function toggleTheme() {
    htmlElement.classList.toggle('dark');
    const currentTheme = htmlElement.classList.contains('dark') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
}

themeToggle.addEventListener('click', toggleTheme);
themeToggleMobile.addEventListener('click', toggleTheme);

// Language Toggle Logic
const langToggle = document.getElementById('lang-toggle');
const langToggleMobile = document.getElementById('lang-toggle-mobile');
const langText = document.getElementById('lang-text');
let currentLang = localStorage.getItem('lang') || 'es';

const translatableElements = document.querySelectorAll('[data-en][data-es]');

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    langText.textContent = lang === 'es' ? 'EN' : 'ES';
    
    translatableElements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });

    // Update placeholders if any
    const inputs = document.querySelectorAll('input[data-en], textarea[data-en]');
    inputs.forEach(input => {
        input.placeholder = input.getAttribute(`data-${lang}`);
    });
}

// Initialize language
updateLanguage(currentLang);

langToggle.addEventListener('click', () => {
    updateLanguage(currentLang === 'es' ? 'en' : 'es');
});

langToggleMobile.addEventListener('click', () => {
    updateLanguage(currentLang === 'es' ? 'en' : 'es');
});

// Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    if (isMenuOpen) {
        icon.setAttribute('data-lucide', 'x');
    } else {
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
});

// Close mobile menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        isMenuOpen = false;
        const icon = menuBtn.querySelector('i');
        icon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
    });
});

// Form Submission (Basic)
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(contactForm);
        alert(currentLang === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!');
        contactForm.reset();
    });
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('shadow-lg');
    } else {
        nav.classList.remove('shadow-lg');
    }
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});
