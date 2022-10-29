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
    <div class="intro">
      <img class="intro-img" src="images/dish-of-the-day.webp" alt="">
      <div class="quote-container">
        <div class="quote">
        <p>I am the main Dish of the Day.  May I interest you in parts of my body? Something off the shoulder perhaps? Braised in a white wine sauce? Or the rump is very good.  I've been excercising it and eating planty of grain, so there's a lot of good meat there. Or a casserole of me perhaps?</p>
        <p>As soon as you decide, I'll just nip off and shoot myself.</p>
        <p>Don't worry, sir, I'll be very humane.
        </div>
      </div>
    </div>
    <div class="intro">
      <img class="intro-img" src="images/pan-galactic-gargle-blaster.jpg" alt="">
      <div class="quote-container">
        <div class="quote">
        <p>The Pan Galactic Gargle Blaster is an alcoholic beverage invented by ex-President of the Galaxy Zaphod Beeblebrox, considered by the Guide to be the "Best Drink in Existence." Its effects are similar to "having your brains smashed out by a slice of lemon wrapped round a large gold brick.</p>
        <p>Beeblebrox advised that you should "never drink more than two Pan Galactic Gargle Blasters unless you are a thirty ton mega elephant with bronchial pneumonia.</p></div>
      </div>
    </div>
    <div class="intro">
      <img class="intro-img" src="images/gnab-gib.jpg" alt="">
      <div class="quote-container">
        <div class="quote">
        <p>The Gnab Gib is the ultimate fate of the universe, consisting of a Big Bang in reverse (as does its name).</p>
        <p> This is a main attraction of the Restaurant as guests get an opportunity to view a Gnab Gib, before desserts are served.</p></div>
      </div>
    </div>

    <div class="hero">
      <div class="hero-text">
        <p><strong>Cost of the meal</strong></p>
        <p>All you have to do is deposit one penny in a saving accont in your own era, and when you arrive at the End of Time the operation of compound interest means that the babulous cost of your meal has been paid for.</p>
        <p>This, many claim, is not merely impossible but clearly insane, which is why the advertising executives of the star system of Bastablon came up with this slogan: "If you've done six impossible things this morning, why not round it off with breakfast at Milliways, the Restaurant at the End of the Universe?"</p>
        <img class="hero-img" src="images/cooking.png" alt="">
        <p></p>
      </div>
    </div>`;

  mainEl.appendChild(menuEl);
}

export default loadMenu;
