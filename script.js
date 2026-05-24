const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const year = document.querySelector("[data-year]");
const config = window.PERIVIVE_SITE_CONFIG || {};

if (year) {
  year.textContent = new Date().getFullYear();
}

const closeMenu = () => {
  if (!menuButton || !nav) return;
  menuButton.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
};

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

const updateHeader = () => {
  if (!header) return;
  header.classList.toggle("is-scrolled", window.scrollY > 10);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

const socialMap = {
  line: config.officialLineUrl,
  instagram: config.instagramUrl,
};

document.querySelectorAll("[data-social-link]").forEach((link) => {
  const key = link.getAttribute("data-social-link");
  const url = socialMap[key];
  const status = document.querySelector(`[data-social-status="${key}"]`);

  if (url) {
    link.href = url;
    link.removeAttribute("aria-disabled");
    link.classList.remove("is-pending");
    if (status) status.textContent = "開く";
    return;
  }

  link.classList.add("is-pending");
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
