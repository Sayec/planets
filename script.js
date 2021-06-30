import data from './data.js';

const menuButtons = document.querySelectorAll('nav ul li a');
const planets = document.querySelectorAll('section');
const buttons = document.querySelectorAll('section .button');
const planetsInformation = data();
const sectionText = document.querySelector('section .text-container p');
const toggleMenu = document.querySelector('a');
const nav = document.querySelector('nav ul');
let typeOfInformation = 'overview';
let index = 0;

toggleMenu.addEventListener('click', (e) => {
  e.preventDefault();
  nav.classList.toggle('visible');
  toggleMenu.classList.toggle('close');
});

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    console.log(e.target.className.split(' ')[1]);
    typeOfInformation = e.target.className.split(' ')[1];
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].classList.remove('active');
    }
    e.target.classList.add('active');
    switch (typeOfInformation) {
      case 'overview':
        sectionText.innerHTML = planetsInformation[index].overview;
        break;
      case 'structure':
        sectionText.innerHTML = planetsInformation[index].internalStructure;
        break;
    }
  });
});
menuButtons.forEach((button) => {
  button.addEventListener('click', function (e) {
    e.preventDefault();

    index = planetsInformation
      .map((e) => e.name)
      .indexOf(button.dataset.planetName);
    const sectionTitle = document.querySelector('section .text-container h1');

    const sectionImg = document.querySelector('section .photo-container img');
    const information = document.querySelectorAll('section .information p');

    sectionTitle.innerHTML = planetsInformation[index].namePL;
    switch (typeOfInformation) {
      case 'overview':
        sectionText.innerHTML = planetsInformation[index].overview;
        break;
      case 'structure':
        sectionText.innerHTML = planetsInformation[index].internalStructure;
        break;
    }
    sectionImg.src = planetsInformation[index].src;

    information[0].innerHTML =
      planetsInformation[index].information.distanceFromSun;
    information[1].innerHTML =
      planetsInformation[index].information.revolutionTime;
    information[2].innerHTML = planetsInformation[index].information.radius;
    information[3].innerHTML =
      planetsInformation[index].information.temperature;

    nav.classList.remove('visible');
    toggleMenu.classList.remove('close');
  });
});
