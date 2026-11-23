const header = document.querySelector("[data-header]");
const toggle = document.querySelector("[data-nav-toggle]");
const links = document.querySelector("[data-nav-links]");

function setHeaderState() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

function closeMenu() {
  document.body.classList.remove("nav-open");
  links?.classList.remove("is-open");
  toggle?.setAttribute("aria-expanded", "false");
}

toggle?.addEventListener("click", () => {
  const isOpen = toggle.getAttribute("aria-expanded") === "true";
  document.body.classList.toggle("nav-open", !isOpen);
  links?.classList.toggle("is-open", !isOpen);
  toggle.setAttribute("aria-expanded", String(!isOpen));
});

links?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    closeMenu();
  }
});

window.addEventListener("scroll", setHeaderState, { passive: true });
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && toggle?.getAttribute("aria-expanded") === "true") {
    closeMenu();
    toggle.focus();
  }
});
window.matchMedia("(min-width: 921px)").addEventListener("change", (event) => {
  if (event.matches) closeMenu();
});
setHeaderState();
