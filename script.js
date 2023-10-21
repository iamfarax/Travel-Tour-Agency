Burger = document.querySelector(".burger");
Navbar = document.querySelector(".navbar");
Navlist = document.querySelector(".nav-list");
Burger.addEventListener("click", () => {
  Navbar.classList.toggle("h-nav-resp");
  Navlist.classList.toggle("v-nav-resp");
});
