// Mobile Navigation
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

// Set current year
const year = document.querySelector(".current-year");
const currentYear = new Date().getFullYear();
year.textContent = currentYear;
