var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var navWrapper = document.querySelector('.main-nav__wrapper');
navMain.classList.add('main-nav--closed');
navMain.classList.remove('main-nav--opened');
navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  navMain.classList.toggle('main-nav--closed');
  navMain.classList.toggle('main-nav--opened');
  navWrapper.classList.toggle('main-nav__wrapper--closed');
  navWrapper.classList.toggle('main-nav__wrapper--opened');
});
