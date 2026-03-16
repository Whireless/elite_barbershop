const mainNav = document.querySelector('.main-nav');
const navBlock = mainNav.querySelector('.main-nav__block');

// Закрытие мобильного меню после нажатия пункта

mainNav.querySelectorAll('.main-nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navBlock.classList.remove('main-nav__block--open');
  });
});

// Открытие меню

mainNav.querySelector('.main-nav__button--open').addEventListener('click', () => {
  navBlock.classList.add('main-nav__block--open');
});

// Закрытие меню

mainNav.querySelector('.main-nav__button--close').addEventListener('click', () => {
  navBlock.classList.remove('main-nav__block--open');
});

// Заливка цветом шапки при скролле

if (window.matchMedia("(min-width: 375px) and (max-width: 767px)").matches) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 360) {
      mainNav.classList.add('main-nav--scroll');
    } else {
      mainNav.classList.remove('main-nav--scroll');
    }
  });
} else if (window.matchMedia("(min-width: 768px)").matches) {
  window.addEventListener('scroll', () => {
    if (window.scrollY >= 500) {
      mainNav.classList.add('main-nav--scroll');
    } else {
      mainNav.classList.remove('main-nav--scroll');
    }
  });
}
