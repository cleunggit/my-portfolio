const btnHamburger = document.querySelector('#btnHamburger');
const menuItems = document.querySelectorAll('.header__menu');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');

const closeHamburgerMenu = () => {
  if(header.classList.contains('open')){ // Close Hamburger Menu
    body.classList.remove('noscroll');
    header.classList.remove('open');    
    fadeElems.forEach(function(element){
      element.classList.remove('fade-in');
      element.classList.add('fade-out');
    });
  }
}

const openHamburgerMenu = () => {
  body.classList.add('noscroll');
  header.classList.add('open');
  fadeElems.forEach(function(element){
    element.classList.remove('fade-out');
    element.classList.add('fade-in');
  });
}

const addListener = () => {
  btnHamburger.addEventListener('click', () => {
    if (header.classList.contains('open')) { // Open Hamburger Menu
      closeHamburgerMenu();
    }
    else { // Open Hamburger Menu
      openHamburgerMenu();
    }  
  });

  menuItems.forEach( item => {
    item.addEventListener('click', () => {
      closeHamburgerMenu();
    })
  })
}

addListener();