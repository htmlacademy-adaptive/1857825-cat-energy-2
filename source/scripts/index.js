/* в этот файл добавляет скрипты*/
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.main-header__menu-button');
  const nav = document.querySelector('.main-header__nav');

  // Удаляем класс --nojs если JS работает
  nav.classList.remove('main-header__nav--nojs');

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('main-header__nav--opened');
    menuButton.classList.toggle('main-header__menu-button--opened');
  });
});
