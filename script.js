const nav = document.querySelector(".nav-bar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");    
    }
});

const sections = document.querySelectorAll(".section");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach((section) => {
    observer.observe(section);
});

const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = "🌙";
    } else {
        themeBtn.innerHTML = "☀️";
    }
});

const welcomeScreen = document.getElementById("welcome-screen");
welcomeScreen.addEventListener("click", () => {
    welcomeScreen.classList.add("hide");
    setTimeout(() => {
        welcomeScreen.remove();
    }, 800);
})
const texts = [
    "Frontend Developer",
    "HTML • CSS • JavaScript",
];

const typingText = document.getElementById("typing-text");
let textIndex = 0;
let charIndex = 0;
function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex][charIndex];
        charIndex++;
        setTimeout(type, 80);
    } else {
        setTimeout(erase, 1500);
    }
}

function erase() {
    if (typingText.textContent.length > 0) {
        typingText.textContent =
            typingText.textContent.slice(0, -1);
        setTimeout(erase, 40);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(type, 300);
    }
}
type();

 const cards = document.querySelectorAll(".card");
const cardObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.3
});
cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.2}s`;
    cardObserver.observe(card);
});