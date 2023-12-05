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
let numbers = document.querySelectorAll(".num");
let started = false;
function startCount(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    element.textContent++;
    if (element.textContent == goal) {
      clearInterval(count);
    }
  }, 2500 / goal);
}
window.onscroll = function () {
  if (this.scrollY >= document.querySelector(".countries").offsetTop) {
    if (!started) {
      numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};