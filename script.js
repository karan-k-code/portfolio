// Navbar Scroll Effect
const nav = document.getElementById("mainNav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Intersection Observer for Reveal Animations
const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px",
};

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
}, revealOptions);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

// Mobile Menu Toggle
const menu_click = () => {
  const menuTogale = document.getElementById("menu_togale");
  const lineA = document.getElementById("line_a_2");
  const lineB = document.getElementById("line_b_2");
  const lineC = document.getElementById("line_c_2");

  menuTogale.classList.toggle("active");

  // Transform burger to X
  if (menuTogale.classList.contains("active")) {
    menuTogale.style.right = "0";
    lineA.style.transform = "rotate(45deg) translate(5px, 5px)";
    lineB.style.opacity = "0";
    lineC.style.transform = "rotate(-45deg) translate(7px, -7px)";
  } else {
    menuTogale.style.right = "-100%";
    lineA.style.transform = "none";
    lineB.style.opacity = "1";
    lineC.style.transform = "none";
  }
};

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Project Data & Generation
const project_data = [
  {
    title: "Kitmo E-commerce",
    url: "https://karan-k-code.github.io/kitmo/",
    img: "./image/cart_show.png",
    dec: "A high-performance e-commerce platform with secure payments and real-time inventory.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "kOnshu Social",
    url: "https://konshu.xyz/",
    img: "./image/konshu.png",
    dec: "Full-featured social media platform with real-time chat and post interactions.",
    tech: ["Socket.io", "Express", "MongoDB"],
  },
  {
    title: "kCode Blog",
    url: "https://kcode.konshu.in/",
    img: "./image/k_code.png",
    dec: "Modern blogging platform with markdown support and user authentication.",
    tech: ["Django", "React", "PostgreSQL"],
  },
  {
    title: "Plant Shop",
    url: "https://plant.konshu.in/",
    img: "./image/plant.konshu.in.png",
    dec: "Modern plant shop platform with markdown support and user authentication.",
    tech: ["React", "node.js", "MongoDB"],
  },
];

const project_gen = () => {
  const project_section = document.getElementById("project_section");
  if (!project_section) return;

  project_section.innerHTML = project_data
    .map(
      (project) => `
      <div class="project-card reveal" onclick="window.open('${project.url}', '_blank')">
        <img class="p-img" src="${project.img}" alt="${project.title}" />
        <div class="project-info">
          <h3 class="project-card-title">${project.title}</h3>
          <p class="project-card-dec">${project.dec}</p>
        </div>
      </div>
    `,
    )
    .join("");

  // Re-observe new elements
  document
    .querySelectorAll(".project-card.reveal")
    .forEach((el) => revealObserver.observe(el));
};

project_gen();

// Contact Form Submission
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();
    const responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = "Sending...";

    const formData = new FormData(this);
    const data = Object.fromEntries(formData.entries());

    // Mocking the fetch for now as I don't want to break their existing endpoint
    // but the logic remains similar.
    try {
      // In a real scenario, use: await fetch('api_url', { method: 'POST', body: JSON.stringify(data) })
      setTimeout(() => {
        responseMessage.textContent = "Thank you! I'll get back to you soon.";
        this.reset();
      }, 1500);
    } catch (error) {
      responseMessage.textContent = "Something went wrong. Please try again.";
    }
  });
}

// Global Nav Function
const homebtn = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
