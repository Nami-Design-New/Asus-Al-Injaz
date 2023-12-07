let toggler = document.querySelector(".menu-btn");
let menue = document.querySelector(".nav-links");
toggler.addEventListener("click", () => {
  toggler.querySelector(".menu-bar").classList.toggle("menu-transform");
  menue.classList.toggle("show");
});
document.querySelectorAll(".nav-link").forEach(el => {
  el.addEventListener("click", () => {
    toggler.querySelector(".menu-bar").classList.remove("menu-transform");
    menue.classList.remove("show");
  });
});
function highlight(el) {
  el.previousElementSibling.classList.add("h");
}
function dehighlight(el) {
  if (el.value === "") {
    el.previousElementSibling.classList.remove("h");
  }
}