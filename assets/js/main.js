(() => {
  "use strict";
  const header = document.querySelector("#site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector("#site-nav");
  const updateHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 20);

  toggle?.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav?.classList.toggle("is-open", !open);
    toggle.querySelector("i")?.classList.toggle("bi-list", open);
    toggle.querySelector("i")?.classList.toggle("bi-x-lg", !open);
  });

  nav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.querySelector("i")?.classList.add("bi-list");
    toggle?.querySelector("i")?.classList.remove("bi-x-lg");
  }));

  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
  document.querySelector("#year").textContent = new Date().getFullYear();
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
})();
