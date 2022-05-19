/**
 * Set up the Flickity dependencies and stles
 */
const Flickity = require('flickity');
require('flickity-imagesloaded');
import flickityOptions from './flickity-config.json';

document.addEventListener("DOMContentLoaded", function () {
	const flktySliders = document.querySelectorAll('.main-carousel');

	/**
	 * Initialize every Flickity slider
	 */
	[...flktySliders].map(item => item).forEach(flktySlider => {
		new Flickity(flktySlider, flickityOptions);
	});
});
