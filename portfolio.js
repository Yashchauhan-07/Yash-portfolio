// Smooth scroll highlight for navbar links
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Modal functionality
const modal = document.getElementById("contactModal");
const openModalBtn = document.querySelector('nav a[href="#contactModal"]');
const closeModalBtn = document.getElementsByClassName("close")[0];

openModalBtn.onclick = function() {
  modal.style.display = "block";
}

closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Contact form submit
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const responseMessage = document.getElementById("responseMessage");

  if (name && email && message) {
    responseMessage.textContent = "Thank you for reaching out! I'll get back to you soon.";
    responseMessage.style.color = "green";
    document.getElementById("contactForm").reset();
  } else {
    responseMessage.textContent = "Please fill in all fields.";
    responseMessage.style.color = "red";
  }
});