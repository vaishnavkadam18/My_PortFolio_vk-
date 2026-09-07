/* =========================
   TYPING ANIMATION
========================= */

const typingElement = document.getElementById("typing");

const words = [
    "Full Stack Developer",
    "AI/ML Enthusiast",
    "Python Developer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;
        }

    }

    setTimeout(
        typeEffect,
        deleting ? 50 : 100
    );
}

typeEffect();


/* =========================
   MOBILE MENU
========================= */

const menuBtn =
    document.getElementById("menuBtn");

const navMenu =
    document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


document.querySelectorAll("#navMenu a")
.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight =
            window.innerHeight;

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow =
    document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

    cursorGlow.style.left =
        `${e.clientX}px`;

    cursorGlow.style.top =
        `${e.clientY}px`;

});


/* =========================
   3D PROJECT CARD TILT
========================= */

const cards =
    document.querySelectorAll(".project-card");

cards.forEach(card => {

    card.addEventListener("mousemove", e => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -5;

        const rotateY =
            ((x - centerX) / centerX) * 5;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";

    });

});



/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    const phoneNumber = "919607219194";

    const whatsappMessage =
    `Hello Vaishnav! 👋%0A%0A` +
    `Name: ${name}%0A` +
    `Email: ${email}%0A%0A` +
    `Message:%0A${message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

window.open(whatsappURL, "_blank");
    contactForm.reset();

});


/* =========================
   PARTICLE BACKGROUND
========================= */

const canvas =
    document.createElement("canvas");

const ctx =
    canvas.getContext("2d");

const particlesContainer =
    document.getElementById("particles");

particlesContainer.appendChild(canvas);

canvas.width =
    window.innerWidth;

canvas.height =
    window.innerHeight;

const particles = [];

const particleCount =
    window.innerWidth < 600 ? 40 : 80;


for (let i = 0; i < particleCount; i++) {

    particles.push({

        x: Math.random() *
            canvas.width,

        y: Math.random() *
            canvas.height,

        size:
            Math.random() * 2 + 0.5,

        speedX:
            (Math.random() - 0.5) * 0.3,

        speedY:
            (Math.random() - 0.5) * 0.3

    });

}


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(p => {

        p.x += p.speedX;
        p.y += p.speedY;

        if (p.x < 0)
            p.x = canvas.width;

        if (p.x > canvas.width)
            p.x = 0;

        if (p.y < 0)
            p.y = canvas.height;

        if (p.y > canvas.height)
            p.y = 0;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(139,92,246,0.5)";

        ctx.fill();

    });

    requestAnimationFrame(
        animateParticles
    );

}

animateParticles();


window.addEventListener(
    "resize",
    () => {

        canvas.width =
            window.innerWidth;

        canvas.height =
            window.innerHeight;

    }
);

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.skills-panel').forEach(p => p.classList.remove('active'));

        btn.classList.add('active');
        document.querySelector(`.skills-panel[data-panel="${btn.dataset.tab}"]`).classList.add('active');
    });
});

