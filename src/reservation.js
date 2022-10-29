function loadReservation() {
  const mainEl = document.querySelector('main');
  mainEl.innerHTML = '';

  const reservationEl = document.createElement('div');

  reservationEl.innerHTML = `
    <div class="intro">
      <img class="intro-img" src="images/dont-panic.webp" alt="">
      <div class="quote-container">
        <div class="quote">Dine with no prior reservation!</div>
      </div>
    </div>
    
    <div class="hero">
      <div class="hero-text">
        <p>You can arrive (mayan arrivan on-when) for any sitting you like without prior (late fore-when) reservation because you can book retrospectively, as it were when you return to your own time (you can have on-book haventa forewhen presooning returningwenta retrohome).</p>
        <p>This is, many would now insist absolutely impossible.</p>
        <p>You can visit as many times as you like (mayan on-visit reonvisting... and so on - for further tense correction consult Dr. Streetmentioner's book) and be sure of never meeting yourself, because of the embrassment this usually causes.</p>
        <p>This, even if the rest were true, which it isn't, is patently impossible, say the doubters.</p>
        <img class="hero-img" src="images/location.jpg" alt="">
        <p>Near-instant transportation to the restaurant can be achieved in certain rarefied circumstances, such as being next to an exploding hyperspatial field generator on the planet where Milliways will eventually be built several billion years after the explosion occurs. Or have access to a Infinite Improbability Drive, such as The Heart of Gold.</p>
      </div>
    </div>`;

  mainEl.appendChild(reservationEl);
}

export default loadReservation;
