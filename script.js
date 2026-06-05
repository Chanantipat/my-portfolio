window.addEventListener("scroll", function () {
    var nav = document.querySelector(".nav-bar");
    if (window.scrolly > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");    
    }
});

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            sec.classList.add("show");
        }
    });
});

const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerHTML = "☀️";
    } else {
        themeBtn.innerHTML = "🌙";
    }
});

const welcomeScreen = document.getElementById("welcome-screen");
welcomeScreen.addEventListener("click", () => {
    welcomeScreen.classList.add("hide");

    setTimeout(() => {
        welcomeScreen.remove();
    }, 800);
})

const particleContainer = document.getElementById("particle");
for (let i = 0; i < 50; i++) {
    const particle = document.createElement("span");
    const size = Math.random() * 5 + 2;
    particle.classList.add("particle");
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.animationDuration =
    `${Math.random() * 10 + 10}s`;
    particle.style.animationDelay =
    `${Math.random() * 5}s`;
    particleContainer.appendChild(particle);
}

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