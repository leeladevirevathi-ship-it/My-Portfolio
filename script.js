/* =========================================================
   LEELADEVI PORTFOLIO - SCRIPT.JS
   LeelaVerse | Python Full Stack Developer
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", () => {

        navMenu.classList.toggle("active");

        const icon = menuToggle.querySelector("i");

        if (navMenu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }

    });

}


/* ================= CLOSE MOBILE MENU ================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (menuToggle) {

            const icon = menuToggle.querySelector("i");

            if (icon) {
                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");
            }

        }

    });

});


/* ================= TYPING ANIMATION ================= */

const typingText = document.getElementById("typing-text");

const roles = [
    "Python Full Stack Developer",
    "Web Developer",
    "Python Developer",
    "Frontend Developer",
    "IT Student"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentRole = roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1800);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }

        }

    }

    const speed = isDeleting ? 50 : 90;

    setTimeout(typeEffect, speed);
}

typeEffect();


/* ================= NAVBAR SCROLL EFFECT ================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* ================= ACTIVE NAV LINK ================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveNav() {

    const scrollPosition =
        window.scrollY + 150;

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.offsetHeight;

        const sectionId = section.getAttribute("id");

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

}

window.addEventListener("scroll", updateActiveNav);


/* ================= SCROLL REVEAL ================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .certificate-card, .timeline-content, .experience-card, .about-card, .contact-form-container"
    );

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* ================= PROJECT CARD TILT ================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ================= SKILL CARD EFFECT ================= */

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
            "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* ================= CONTACT FORM ================= */

const contactForm =
    document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", event => {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        /* Validation */

        if (!name || !email || !subject || !message) {

            alert(
                "Please fill in all the fields."
            );

            return;
        }


        /* Email validation */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            alert(
                "Please enter a valid email address."
            );

            return;
        }


        /* Success */

        alert(
            `Thank you, ${name}! Your message has been submitted successfully.`
        );

        contactForm.reset();

    });

}


/* ================= SCROLL TO TOP ================= */

const scrollTopButton =
    document.getElementById("scroll-top");

window.addEventListener("scroll", () => {

    if (!scrollTopButton) return;

    if (window.scrollY > 400) {

        scrollTopButton.classList.add("show");

    } else {

        scrollTopButton.classList.remove("show");

    }

});


if (scrollTopButton) {

    scrollTopButton.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ================= SMOOTH SCROLL ================= */

document.querySelectorAll(
    'a[href^="#"]'
).forEach(anchor => {

    anchor.addEventListener("click", function(event) {

        const targetId =
            this.getAttribute("href");

        if (
            targetId === "#" ||
            !targetId
        ) {
            return;
        }

        const target =
            document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            const navbarHeight =
                navbar
                    ? navbar.offsetHeight
                    : 0;

            const targetPosition =
                target.offsetTop -
                navbarHeight;

            window.scrollTo({

                top: targetPosition,

                behavior: "smooth"

            });

        }

    });

});


/* ================= BUTTON RIPPLE EFFECT ================= */

const buttons =
    document.querySelectorAll(
        ".btn, .project-btn"
    );

buttons.forEach(button => {

    button.addEventListener(
        "click",
        function(event) {

            const ripple =
                document.createElement("span");

            ripple.classList.add("ripple");

            const rect =
                button.getBoundingClientRect();

            const size =
                Math.max(
                    rect.width,
                    rect.height
                );

            ripple.style.width =
                `${size}px`;

            ripple.style.height =
                `${size}px`;

            ripple.style.left =
                `${event.clientX - rect.left - size / 2}px`;

            ripple.style.top =
                `${event.clientY - rect.top - size / 2}px`;

            button.appendChild(ripple);

            setTimeout(() => {

                ripple.remove();

            }, 600);

        }
    );

});


/* ================= CURSOR GLOW ================= */

const cursorGlow =
    document.createElement("div");

cursorGlow.style.position = "fixed";
cursorGlow.style.width = "250px";
cursorGlow.style.height = "250px";
cursorGlow.style.borderRadius = "50%";
cursorGlow.style.pointerEvents = "none";
cursorGlow.style.background =
    "radial-gradient(circle, rgba(168,85,247,0.08), transparent 70%)";
cursorGlow.style.transform =
    "translate(-50%, -50%)";
cursorGlow.style.zIndex = "-1";

document.body.appendChild(cursorGlow);


document.addEventListener("mousemove", event => {

    cursorGlow.style.left =
        `${event.clientX}px`;

    cursorGlow.style.top =
        `${event.clientY}px`;

});


/* ================= PROFILE IMAGE FALLBACK ================= */

const profileImage =
    document.querySelector(
        ".profile-card img"
    );

if (profileImage) {

    profileImage.addEventListener(
        "error",
        () => {

            console.log(
                "Profile image not found. Please check images/profile.jpg"
            );

        }
    );

}


/* ================= PAGE LOADED ================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "🚀 LeelaVerse Portfolio Loaded Successfully!"
    );

    console.log(
        "👩‍💻 M. Leeladevi | Python Full Stack Developer"
    );

});


/* ================= CURRENT YEAR ================= */

const currentYear =
    new Date().getFullYear();

const copyright =
    document.querySelector(".copyright");

if (copyright) {

    copyright.innerHTML =
        `© ${currentYear} Leeladevi. All Rights Reserved.`;

}