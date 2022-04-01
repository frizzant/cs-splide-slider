const Flickity = require('flickity');
import flickityOptions from './flickity-config.json';

document.addEventListener("DOMContentLoaded", function () {
	const flkty = new Flickity( '.main-carousel', flickityOptions);
});
