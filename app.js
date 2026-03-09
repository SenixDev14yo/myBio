// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});

// Fade in on scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('fade-in'); }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.card, .skill-card, .project-card, .testimonial-card, .btn').forEach(card => {
    observer.observe(card);
});

// Hitbox effect
const hitbox = document.createElement('div');
hitbox.classList.add('hitbox');
document.body.appendChild(hitbox);

const interactiveElements = document.querySelectorAll('.btn, .card, .social a, .menu a');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', e => {
        hitbox.style.opacity = 0.25;
        hitbox.style.transform = 'translate(-50%,-50%) scale(1)';
    });
    el.addEventListener('mouseleave', e => {
        hitbox.style.opacity = 0;
        hitbox.style.transform = 'translate(-50%,-50%) scale(0)';
    });
    el.addEventListener('mousemove', e => {
        hitbox.style.left = e.clientX + 'px';
        hitbox.style.top = e.clientY + 'px';
    });
});

// Theme switch
document.getElementById('light-btn').onclick = () => document.body.classList.add('light');
document.getElementById('dark-btn').onclick = () => document.body.classList.remove('light');

// Language switch
const translations = {
    ru: {
        home: "Главная",
        about: "Обо мне",
        skills: "Навыки",
        projects: "Проекты",
        socials: "Соц сети",
        testimonials: "Отзывы",
        contact: "Контакты",
        greeting: "Привет, я Azizbek",
        intro: "В будущем хочу стать специалистом по кибербезопасности",
        contacts: "Контакты",
        projects_btn: "Мои проекты",
        about_title: "Обо мне",
        about_text: "Всем привет, я Palvanov Azizbek, мне 15 лет. Сейчас учусь в школе №30 в 9 классе. Знаю 4 языка: английский, русский, узбекский и немного немецкий. Люблю монтировать видео, занимаюсь вайбкодингом и изучаю веб-девелопинг.",
        skills_title: "Навыки",
        projects_title: "Проекты",
        projects_none: "Пока нет проектов",
        projects_desc: "Здесь будут мои проекты в будущем",
        projects_btn2: "Подробнее",
        socials_title: "Соц сети",
        testimonials_title: "Отзывы",
        contact_title: "Контакты"
    },
    en: { /* переводы на английский */ },
    uz: { /* переводы на узбекский */ }
};

document.querySelectorAll('.lang-switch button').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        document.querySelectorAll('[data-key]').forEach(el => {
            const key = el.dataset.key;
            if (translations[lang][key]) el.innerText = translations[lang][key];
        });
    });
});