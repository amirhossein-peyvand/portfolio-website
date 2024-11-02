// toggle icon navbar
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll sections
window.onscroll = () => {
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// Select all links within the navbar
const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove the active class from all links
    navLinks.forEach((nav) => nav.classList.remove("active"));
    // Add active class to the clicked link
    link.classList.add("active");
  });
});

// using footer link button to make the Home nav active
const footerLink = document.querySelector(".footer-iconTop a");
footerLink.addEventListener("click", () => {
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });

  navLinks[0].classList.add("active");
});
