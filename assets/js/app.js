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
function togglePasswordVisibility(event, passwordClass, button) {
  event.preventDefault();
  let passStateTogglerIcon = button.querySelector("i");
  let passInpt = document.querySelector("." + passwordClass);
  if (passInpt.type === "password") {
    passInpt.type = "text";
    passStateTogglerIcon.classList.remove("fa-eye-slash");
    passStateTogglerIcon.classList.add("fa-eye");
  } else {
    passInpt.type = "password";
    passStateTogglerIcon.classList.remove("fa-eye");
    passStateTogglerIcon.classList.add("fa-eye-slash");
  }
  return false;
}
