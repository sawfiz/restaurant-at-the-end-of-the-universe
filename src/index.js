// const { default: loadHeader } = require('./header');

// const contentEl = document.createElement('div');
// contentEl.setAsstribute('id', 'content');

import loadHeader from './header';
import loadHome from './home';
import './header.css';

loadHeader();
loadHome();

console.log('This is really working!');
