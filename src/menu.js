function loadMenu() {
  const mainEl = document.querySelector('main');
  mainEl.innerHTML = '';
  const menuEl = document.createElement('div');

  menuEl.innerHTML = `
    <div class="intro">
      <img class="intro-img" src="images/plates.webp" alt="">
      <div class="quote-container">
        <div class="quote">“If you've done six impossible things this morning, why not round it off with breakfast at Milliways, the Restaurant at the End of the Universe?”</div>
      </div>
    </div>

    <div class="hero">
      <div class="hero-text">
        <p>All you have to do is deposit one penny in a saving accont in your own era, and when you arrive at the End of Time the operation of compound interest means that the babulous cost of your meal has been paid for.</p>
        <p>This, many claim, is not merely impossible but clearly insane, which is why the advertising executives of the star system of Bastablon came up with this slogan: "If you've done six impossible things this morning, why not round it off with breakfast at Milliways, the Restaurant at the End of the Universe?"</p>
        <img class="hero-img" src="images/cooking.png" alt="">
        <p></p>
      </div>
    </div>`;

  mainEl.appendChild(menuEl);
}

export default loadMenu;
