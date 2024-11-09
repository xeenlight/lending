document.addEventListener('DOMContentLoaded', function () {
  // Инициализация Swiper с адаптивными настройками
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3, 
    spaceBetween: 100,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      1920: {
        slidesPerView: 6,
      },
      1600: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 4,
      },
      900: {
        slidesPerView: 3,
      },
      200: {
        slidesPerView: 1,
      },
    },
  });

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

  // Меню
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
  const languageDrop = document.querySelector('.languageDrop');
  const currentLanguage = document.getElementById('currentLanguage');
  const languageOptions = document.querySelector('.languageOptions');
  const languageLinks = document.querySelectorAll('.languageOption');

  const availableLanguages = ['RU', 'KZ', 'EN'];

  function updateLanguageOptions(selectedLang) {
    const remainingLanguages = availableLanguages.filter(lang => lang !== selectedLang);
    const options = languageOptions.querySelectorAll('a.languageOption');
    options.forEach((option, index) => {
      option.textContent = remainingLanguages[index];
    });
  }

  currentLanguage.addEventListener('click', function(event) {
    event.preventDefault();
    languageDrop.classList.toggle('open');
  });

  languageLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const selectedLanguage = link.textContent;
      currentLanguage.textContent = selectedLanguage;
      updateLanguageOptions(selectedLanguage);
      languageDrop.classList.remove('open');
    });
  });
});
