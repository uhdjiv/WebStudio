(() => {
  const refs = {
    // Знаходження кнопки для відкриття
    // Щоб рядок нижче працював добре треба щоб у вас в html знаходився елемент з класом .mob-menu__button--open
    openMenuBtn: document.querySelector(".button__tel__nav"),
    // Знаходження кнопки для закриття
    // Щоб рядок нижче працював добре треба щоб у вас в html знаходився елемент з класом .mob-menu__button--close
    closeMenuBtn: document.querySelector(".close__button"),

    //Знаходження мобільного меню
    //Щоб рядок нижче працював добре треба щоб у вас в html знаходився елемент з класом .mob-menu
    menu: document.querySelector(".mobile__nav"),
  };
  // Додавання слухача події(addEventListener)
  // Наразі відстежує подію (click)
  // При кліку відбудеться функція обробник (toggleMenu)
  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    // на мобільному меню я змінюю клас is-hidden(якщо мобільне не приховане я його приховую, якщо воно приховане то я роблю не пррихованим)
    refs.menu.classList.toggle("is-hidden");
  }
})();
