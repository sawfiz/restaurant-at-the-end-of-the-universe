import './home.css';

function loadHome() {
  const mainEl = document.querySelector('main');
  mainEl.innerHTML = '';
  const homeEl = document.createElement('div');

  homeEl.innerHTML = `
    <div class="intro">
      <img class="intro-img" src="images/cover.jpeg" alt="">
      <div class="quote-container">
 
        <div class="quote">“Ladies and gentlemen, the Universe as we know it has now been in existence for over one hundred and seventy thousand million billion years and will be ending in a little over half an hour.  So, welcome one and all to Milliways, the Restaurant at the End of the Universe!”</div>

        <div class="quotee">—Max Quordlepleen\'s introduction at Milliways</div>
        </div>
      </div>

    <div class="hero">
      <div class="hero-text">

        <p>Milliways, a five-star restaurant, better known as the Restaurant at the End of the Universe, is one of the most extraordinary ventures in the entire history of catering.</p>
        <p>It is built on the fragmented remains of an eventually ruined planet which is (wioll haven be) enclosed in a vast time bubble and prjected forward in time to the precise moment of the End of the Universe.</p>
        <p>This is, many would say, impossible.</p>
        <p>In it, guests take (willan on-take) their places at table and eat (willan on-eat) sumptuous meals while watching (willing watchen) the whole of creation explode around them.</p>
        <p>This is, many would say, is equally impossible.</p>
        <p>At the Restarant you can meet and dine with (mayan meetan con with dinan on when) a fascinating cross-section of the entire population of space and time.</p>
        <p>This, it can be explained patiently, is also impossible.</p>
        <img class="hero-img" src="images/photo.jpg" alt="">
      </div>
    </div>`

  mainEl.appendChild(homeEl);
}

export default loadHome;
