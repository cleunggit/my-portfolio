const btnHamburger = document.querySelector('#btnHamburger');
const menuItems = document.querySelectorAll('.header__menu');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElems = document.querySelectorAll('.has-fade');
const btn = document.getElementById('#btn');
const userName = document.getElementById('user_name');
const userEmail = document.getElementById('user_email');
const message = document.getElementById('message');
const form = document.getElementById('contact-form');

const serviceID = 'service_ojvlt4k';
const userID = 'user_6gHHjnyE2k6oWAkylWcfm';

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

// Contact form

window.onload = function() {
  form.addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      // this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm(serviceID, 'contact_form', this)
          .then(function() {
              console.log('SUCCESS!');
              alert('Sent!')
              form.reset();
          }, function(error) {
              console.log('FAILED...', error);
              // alert(JSON.stringify(error))
          });
  });
}

addListener();