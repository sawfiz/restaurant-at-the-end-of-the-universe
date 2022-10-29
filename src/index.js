// const { default: loadHeader } = require('./header');

import loadHeader from './header';
import loadHome from './home';
import loadMenu from './menu';
import loadReservation from './reservation';


const contentEl = document.createElement('div');
contentEl.setAttribute('id', 'content');
document.body.appendChild(contentEl);

loadHeader();
const homeTab = document.querySelector('#home-tab');
const menuTab = document.querySelector('#menu-tab');
const reserveTab = document.querySelector('#reserve-tab');

const mainEl = document.createElement('main');
contentEl.appendChild(mainEl);

loadHome();
homeTab.classList.add('active');

const footerEl = document.createElement('footer');
footerEl.textContent = 'Copyright © sawfiz@github';
contentEl.appendChild(footerEl);

console.log('This is really working!');

homeTab.addEventListener('click', () => {
  homeTab.classList.add('active');
  menuTab.classList.remove('active');
  reserveTab.classList.remove('active');
  loadHome();
});
menuTab.addEventListener('click', () => {
  homeTab.classList.remove('active');
  menuTab.classList.add('active');
  reserveTab.classList.remove('active');
  loadMenu();
});
reserveTab.addEventListener('click', () => {
  homeTab.classList.remove('active');
  menuTab.classList.remove('active');
  reserveTab.classList.add('active');
  loadReservation();
});
