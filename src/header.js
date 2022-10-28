function loadHeader() {
    const contentEl = document.querySelector('#content');
    const headerEl = document.createElement('header');

    headerEl.innerHTML = '<h1 class="header-name">Milliways</h1><h2 class="header-name">The Restaurant at the End of the Universe</h1><ul class="nav"><li class="active-tab">Home</li><li>Menu</li><li>Reservation</li></ul>';

    contentEl.appendChild(headerEl);
};

export default loadHeader;