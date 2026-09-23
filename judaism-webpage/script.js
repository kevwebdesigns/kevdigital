// Judaism: Faith, History, and Tradition — small enhancements only.
// The page works fully without JavaScript.

(function () {
  "use strict";

  // ----- Mobile menu -----
  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");

  function closeMenu() {
    links.classList.remove("open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.querySelector(".sr-only").textContent = "Open menu";
  }

  toggle.addEventListener("click", function () {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.querySelector(".sr-only").textContent = open ? "Close menu" : "Open menu";
  });

  links.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && links.classList.contains("open")) {
      closeMenu();
      toggle.focus();
    }
  });

  // ----- Highlight the nav link for the section on screen -----
  const navMap = {};
  links.querySelectorAll('a[href^="#"]').forEach(function (a) {
    navMap[a.getAttribute("href").slice(1)] = a;
  });

  if ("IntersectionObserver" in window) {
    const sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          Object.values(navMap).forEach(function (a) { a.classList.remove("active"); });
          const link = navMap[entry.target.id];
          if (link) link.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    Object.keys(navMap).forEach(function (id) {
      const section = document.getElementById(id);
      if (section) sectionObserver.observe(section);
    });
  }

  // ----- Fade sections in as they scroll into view -----
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("visible"); });
  }

  // ----- If a photo fails to load, try its backup, then show a labeled panel -----
  function handleImageError(img) {
    const backup = img.getAttribute("data-fallback");
    if (backup && img.src !== backup) {
      img.removeAttribute("data-fallback");
      img.src = backup;
      return;
    }
    const panel = document.createElement("div");
    panel.className = "img-missing";
    panel.setAttribute("role", "img");
    panel.setAttribute("aria-label", img.alt);
    panel.textContent = img.alt;
    img.replaceWith(panel);
  }

  document.querySelectorAll("main img").forEach(function (img) {
    if (img.complete && img.naturalWidth === 0 && img.currentSrc) {
      handleImageError(img);
    } else {
      img.addEventListener("error", function () { handleImageError(img); });
    }
  });

  // ----- Back-to-top button -----
  const toTop = document.querySelector(".to-top");
  window.addEventListener("scroll", function () {
    toTop.hidden = window.scrollY < 900;
  }, { passive: true });
  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0 });
    document.querySelector(".brand").focus();
  });
})();
