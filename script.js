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
   AI ASSISTANT
========================= */

const aiButton =
    document.getElementById("aiButton");

const aiChat =
    document.getElementById("aiChat");

const closeAI =
    document.getElementById("closeAI");

const aiInput =
    document.getElementById("aiInput");

const aiSend =
    document.getElementById("aiSend");

const aiBody =
    document.getElementById("aiBody");


aiButton.addEventListener("click", () => {

    aiChat.classList.add("active");

});


closeAI.addEventListener("click", () => {

    aiChat.classList.remove("active");

});


function addMessage(text, type = "ai") {

    const message =
        document.createElement("div");

    message.className =
        "ai-message";

    if (type === "user") {

        message.style.background =
            "#8b5cf6";

        message.style.color =
            "white";

        message.style.marginLeft =
            "30px";

    }

    message.textContent = text;

    aiBody.appendChild(message);

    aiBody.scrollTop =
        aiBody.scrollHeight;

}


function getAIResponse(question) {

    const q =
        question.toLowerCase();

    if (
        q.includes("skill") ||
        q.includes("technology") ||
        q.includes("tech")
    ) {

        return "Vaishnav works with technologies such as Python, Java, JavaScript, HTML, CSS, React, Node.js, SQL and AI/ML.";

    }

    if (
        q.includes("project") ||
        q.includes("work")
    ) {

        return "Some featured projects include AI Friend, Full Stack Job Portal with Resume Analyzer and Avengers Simon Game.";

    }

    if (
        q.includes("education") ||
        q.includes("degree")
    ) {

        return "Vaishnav is a Computer Science graduate with a BTech degree.";

    }

    if (
        q.includes("experience") ||
        q.includes("internship")
    ) {

        return "Vaishnav has internship experience in the AI/ML and Data Science domain.";

    }

    if (
        q.includes("contact") ||
        q.includes("email")
    ) {

        return "You can contact Vaishnav through the contact section or his professional social profiles.";

    }

    if (
        q.includes("hello") ||
        q.includes("hi")
    ) {

        return "Hello! 👋 Ask me about Vaishnav's skills, projects, education or experience.";

    }

    return "I can tell you about Vaishnav's skills, projects, education, experience and contact information.";

}


function sendAIMessage() {

    const question =
        aiInput.value.trim();

    if (!question) return;

    addMessage(question, "user");

    aiInput.value = "";

    setTimeout(() => {

        const response =
            getAIResponse(question);

        addMessage(response);

    }, 500);

}


aiSend.addEventListener(
    "click",
    sendAIMessage
);


aiInput.addEventListener(
    "keydown",
    e => {

        if (e.key === "Enter") {

            sendAIMessage();

        }

    }
);


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    
    const phoneNumber = "9607219194";

    const whatsappMessage =
        `Hello Vaishnav! 👋%0A%0A` +
        `Name: ${name}%0A` +
        `Email: ${email}%0A%0A` +
        `Message:%0A${message}`;

    const whatsappURL = `https://wa.me/9607219194?text=${whatsappMessage}`;
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

