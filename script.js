document.addEventListener("DOMContentLoaded", function () {
  // Модальное окно "Избранное"
  const favoritesImg = document.querySelector(".Favorites"); 
  const modal = document.querySelector(".modal");  
  const closeModal = modal.querySelector(".exit");
  favoritesImg.addEventListener("click", function () {
    modal.style.display = "flex";  
  });
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";  
  });

  // Модальное окно для логина
  const userDiv = document.querySelector(".User");
  const modalLogin = document.querySelector(".modalLogin"); // Модальное окно для логина
  const closeModalLogin = modalLogin.querySelector(".exit"); // Кнопка закрытия модального окна логина

  userDiv.addEventListener("click", function () {
    modalLogin.style.display = "flex"; // Открываем модальное окно
  });

  closeModalLogin.addEventListener("click", function () {
    modalLogin.style.display = "none"; // Закрываем модальное окно
  });

  // Бургер-меню для мобильной версии
  const burgerMenuMobail = document.querySelector(".burgerMenuMobail");
  const popupMenuMobail = document.querySelector(".popup-menuMobail");

  burgerMenuMobail.addEventListener("click", function () {
    popupMenuMobail.classList.toggle("show"); // Переключаем класс show для popup
  });

  // Закрытие меню, если клик был вне
  document.addEventListener("click", function (e) {
    if (!burgerMenuMobail.contains(e.target) && !popupMenuMobail.contains(e.target)) {
      popupMenuMobail.classList.remove("show"); // Скрываем меню, если клик был вне
    }
  });

  // Меню и языковая панель
  const menu = document.querySelector(".menu");
  const popupMenu = document.querySelector(".popup-menu");

  menu.addEventListener("click", function (e) {
    e.stopPropagation();
    menu.classList.toggle("active");
    popupMenu.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !popupMenu.contains(e.target)) {
      popupMenu.classList.remove("show");
      menu.classList.remove("active");
    }
  });

  // Языковая панель
  const language = document.querySelector(".language");
  const languageDrop = document.querySelector(".languageDrop");
  const currentLang = document.getElementById("current-lang");

  language.addEventListener("click", function (e) {
    e.stopPropagation();
    language.style.display = "none";
    languageDrop.style.display = "block";
  });

  document.addEventListener("click", function (e) {
    if (!language.contains(e.target) && !languageDrop.contains(e.target)) {
      language.style.display = "flex"; 
      languageDrop.style.display = "none"; 
    }
  });

  const languageLinks = languageDrop.querySelectorAll("a");
  languageLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault(); 
      currentLang.textContent = link.textContent;
      language.style.display = "flex";
      languageDrop.style.display = "none";
    });
  });
});
