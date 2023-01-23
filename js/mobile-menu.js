(() => {
  const refs = {
    openMenuBtn: document.querySelector(".header-open-btn"),
    closeMenuBtn: document.querySelector(".mob-close-btn"),
    menu: document.querySelector(".mob"),
    body: document.querySelector("body"),
    link: document.querySelectorAll(".nav-mob-text"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);
  refs.link.forEach((item) => item.addEventListener("click", toggleMenu));

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
    refs.body.classList.toggle("hidden");
  }
})();
