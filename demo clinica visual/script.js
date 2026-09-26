/* =========================================================
   CLÍNICA VITAL EQUILÍBRIO — DEMONSTRAÇÃO
   Interações: menu mobile + header que reage ao scroll
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---- Menu mobile ---- */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var isOpen = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      navToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
      );
    });

    /* Fecha o menu ao clicar em um link (útil no mobile) */
    navMenu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
        navToggle.setAttribute("aria-label", "Abrir menu de navegação");
      });
    });
  }

  /* ---- Header: sombra sutil ao rolar a página ---- */
  var header = document.querySelector(".site-header");

  function updateHeaderState() {
    if (!header) return;
    if (window.scrollY > 12) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  }

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

});
