// const { default: loadHeader } = require('./header');

import loadHeader from './header';
import loadHome from './home';
import loadMenu from './menu';
import loadReservation from './reservation';
import './header.css';

const contentEl = document.createElement('div');
contentEl.setAttribute('id', 'content');
document.body.appendChild(contentEl);
loadHeader();

const mainEl = document.createElement('main');
contentEl.appendChild(mainEl);

loadHome();

console.log('This is really working!');

const homeTab = document.querySelector('#home-tab')
const menuTab = document.querySelector('#menu-tab')
const reserveTab = document.querySelector('#reserve-tab')

homeTab.addEventListener('click', () => {
    loadHome();
})
menuTab.addEventListener('click', () => {
    loadMenu();
})
reserveTab.addEventListener('click', () => {
    loadReservation();
})
