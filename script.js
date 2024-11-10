document.addEventListener('DOMContentLoaded', function () {
  // Инициализация первого слайдера (например, с категориями)
  const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 100,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination-1', // Указываем пагинацию для первого слайдера
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

  // Инициализация второго слайдера (для ресторанов)
  const swiperRestaurants = new Swiper('.swiper-container-restaurants', {
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
      nextEl: '.navigationArrow1',
    },
    pagination: {
      el: '.swiper-pagination-2', 
      clickable: true,
    },
    loop: true,
    breakpoints: {
      1920: {
        slidesPerView: 4,
      },

      1300: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 2,
      },
      200: {
        slidesPerView: 1,
      },
    },
  });

  const swiperHostel = new Swiper('.swiper-container-hostel', {
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
      nextEl: '.navigationArrow2',
    },
    pagination: {
      el: '.swiper-pagination-2', 
      clickable: true,
    },
    loop: true,
    breakpoints: {
      1920: {
        slidesPerView: 4,
      },

      1300: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 2,
      },
      200: {
        slidesPerView: 1,
      },
    },
  });


  const swiperGuide = new Swiper('.swiper-container-guide', {
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
      nextEl: '.navigationArrow3',
    },
    pagination: {
      el: '.swiper-pagination-2', 
      clickable: true,
    },
    loop: true,
    breakpoints: {
      1920: {
        slidesPerView: 4,
      },

      1300: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 2,
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
  const modalLogin = document.querySelector(".modalLogin");
  const closeModalLogin = modalLogin.querySelector(".exit");

  userDiv.addEventListener("click", function () {
    modalLogin.style.display = "flex";
  });

  closeModalLogin.addEventListener("click", function () {
    modalLogin.style.display = "none";
  });

  // Бургер-меню для мобильной версии
  const burgerMenuMobail = document.querySelector(".burgerMenuMobail");
  const popupMenuMobail = document.querySelector(".popup-menuMobail");

  burgerMenuMobail.addEventListener("click", function () {
    popupMenuMobail.classList.toggle("show");
  });

  document.addEventListener("click", function (e) {
    if (!burgerMenuMobail.contains(e.target) && !popupMenuMobail.contains(e.target)) {
      popupMenuMobail.classList.remove("show");
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
