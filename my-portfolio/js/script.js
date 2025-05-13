document.addEventListener("DOMContentLoaded", () => {
  const menutoggle = document.querySelector(".menu-toggle");
  const Nav = document.querySelector(".nav-bar");

  menutoggle.addEventListener("click", () => {
    Nav.classList.toggle("active");
  });
});
