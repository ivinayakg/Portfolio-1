var size;
var menuOpen = document.querySelector(".fa-bars");
var menuClose = document.querySelector(".fa-times");
var menu = document.querySelector(".menu");
var mobile = false;

window.addEventListener("resize", () => {
  size = window.screen.width;
  if (size < 600) {
    menuOpen.style.display = "block";
  } else {
    menuOpen.style.display = "none";
  }
});

if (size < 600) {
  menuOpen.style.display = "block";
} else {
  menuOpen.style.display = "none";
}

menuOpen.addEventListener("click", () => {
  menu.style.display = "block";
  menuClose.style.display = "block";
  menuOpen.style.display = "none";
});

menuClose.addEventListener("click", () => {
  menu.style.display = "none";
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
});
