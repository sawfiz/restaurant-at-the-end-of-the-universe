function loadHome() {
  const mainEl = document.querySelector('main');
  mainEl.innerHTML = '';
  const homeEl = document.createElement('div');

  homeEl.innerHTML =
    '<div class="intro"><img class="intro-img" src="images/cover.jpeg" alt=""><div class="quote-container"><div class="quote">“Ladies and gentlemen, the Universe as we know it has now been in existence for over one hundred and seventy thousand million billion years and will be ending in a little over half an hour. So, welcome one and all to Milliways, the Restaurant at the End of the Universe!”</div><div class="quotee">—Max Quordlepleen\'s introduction at Milliways</div></div></div><div class="hero"><div class="hero-text"><p>Milliways, better known as the Restaurant at the End of the Universe, is a five-star restaurant situated at the end of time and matter. Its main attraction is allowing diners to view a Gnab Gib,before desserts are served.</p><p>The Restaurant has some of the most staggeringly extravagant decor ever seen, a variety of the strangest guests from throughout history, and serves a particularly fine Pan Galactic Gargle Blaster. Milliways is run by an incredible arrangement of life forms from everywhen, and is the one place anywhen that serves talking food.</p><img class="hero-img" src="images/photo.jpg" alt=""></div></div>';

  mainEl.appendChild(homeEl);
}

export default loadHome;
