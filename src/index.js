// const { default: loadHeader } = require('./header');

import loadHeader from './header';
import loadHome from './home';
import './header.css';

const contentEl = document.createElement('div');
contentEl.setAttribute('id', 'content');
document.body.appendChild(contentEl);

loadHeader();
loadHome();

console.log('This is really working!');
