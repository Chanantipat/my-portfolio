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