var crsr = document.querySelector("#cursor");
var crsrblur = document.querySelector("#cursor-blur");

var typed = new Typed(".text", {
    strings: ["Developer", "Web Developer", "Backend"],
    typeSpeed: 100,

    loop: true,
});

Shery.mouseFollower();
Shery.makeMagnet(".magnet");

//drop down

function showmenu() {
    var m = document.querySelector(".drop-down");
    m.classList.add("showmenu");
}

function removewmenu() {
    var m = document.querySelector(".drop-down");
    m.classList.remove("showmenu");
}

// Add event listener to the window object
window.addEventListener("click", function (event) {
    var m = document.querySelector(".drop-down");
    var menuButton = document.querySelector(".ri-menu-line");
    if (!m.contains(event.target) && !menuButton.contains(event.target)) {
        m.classList.remove("showmenu");
    }
});

function firstPageAnimation() {
    var t1 = gsap.timeline();
    t1.from(".header", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
    })
        .to(".elem", {
            y: "4",
            ease: Expo.easeInOut,
            duration: 1.5,
            delay: -1,
            stagger: 0.2,
        });

    t1.from(".footerfirst", {
        y: "-10",
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut,
    });
}
firstPageAnimation();

document.querySelectorAll(".serviceelem").forEach(function (elem) {
    let rotate = 0;
    let diffrot = 0;

    elem.addEventListener("mouseleave", function (details) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
        });

        gsap.to(elem.getElementsByClassName("sele1"), {
            opacity: 0.7,
        });
    });

    elem.addEventListener("mousemove", function (details) {
        console.log(details.clientX, details.clientY);
        let diff = details.clientY - elem.getBoundingClientRect().top;

        diffrot = details.clientX - rotate;
        rotate = details.clientX;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: details.clientX,

            rotate: gsap.utils.clamp(-20, 20, diffrot * 0.1),
        });

        gsap.to(elem.getElementsByClassName("sele1"), {
            opacity: 0.3,
        });
    });
});

// Project filtering functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const noProjectsMessage = document.getElementById("noProjects");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        // Remove active class from all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        // Add active class to clicked button
        button.classList.add("active");

        const filterValue = button.getAttribute("data-filter");
        let visibleCount = 0;

        projectCards.forEach((card) => {
            const cardCategory = card.getAttribute("data-category");

            if (filterValue === "all" || cardCategory === filterValue) {
                card.classList.remove("hidden");
                visibleCount++;
            } else {
                card.classList.add("hidden");
            }
        });

        // Show/hide no projects message
        if (visibleCount === 0) {
            noProjectsMessage.style.display = "block";
        } else {
            noProjectsMessage.style.display = "none";
        }
    });
});

// Smooth scroll animation for project cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);




// Animate progress bars on page load
        function animateProgressBars() {
            const progressBars = document.querySelectorAll('.progress-fill');
            
            progressBars.forEach((bar, index) => {
                const percentage = bar.getAttribute('data-percentage');
                
                // Delay animation for each bar
                setTimeout(() => {
                    bar.style.width = percentage + '%';
                }, index * 100);
            });
        }

        // Animate skill categories
        function animateSkillCategories() {
            const categories = document.querySelectorAll('.skill-category');
            
            categories.forEach((category, index) => {
                setTimeout(() => {
                    category.classList.add('animate');
                }, index * 200);
            });
        }

        // Intersection Observer for scroll animations
        function setupScrollAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        animateProgressBars();
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.3
            });

            const skillsGrid = document.querySelector('.skills-grid');
            observer.observe(skillsGrid);
        }

        // Initialize animations when page loads
        document.addEventListener('DOMContentLoaded', () => {
            animateSkillCategories();
            setupScrollAnimations();
        });

        // Add hover effects for progress bars
        document.querySelectorAll('.skill-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                const progressFill = item.querySelector('.progress-fill');
                progressFill.style.background = 'linear-gradient(90deg, #2980b9, #3498db)';
            });

            item.addEventListener('mouseleave', () => {
                const progressFill = item.querySelector('.progress-fill');
                progressFill.style.background = 'linear-gradient(90deg, #3498db, #2980b9)';
            });
        });

// project


  const contactForm = document.getElementById("contactForm")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form values
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const subject = document.getElementById("subject").value
      const message = document.getElementById("message").value

      // Simple validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address")
        return
      }
    })

    }

// send email

function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    emailjs
        .send("service_laa5rny", "template_789xcpb", parms)
        .then(() => {
            alert("Your email was sent!");
        })
        .catch((error) => {
            alert("Failed to send email:", error);
        });
}
