// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Contact form alert
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thanks for your message!');
});

