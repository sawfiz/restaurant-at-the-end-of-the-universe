import './header.css';

function loadHeader() {
  const contentEl = document.querySelector('#content');
  const headerEl = document.createElement('header');

  headerEl.innerHTML = `
    <h1>Milliways</h1>
    <h2>The Restaurant at the End of the Universe</h2>
    <ul>
        <li id="home-tab" class="active">Home</li>
        <li id="menu-tab">Menu</li>
        <li id="reserve-tab">Reservation</li>
    </ul>`

  contentEl.appendChild(headerEl);
}

export default loadHeader;
