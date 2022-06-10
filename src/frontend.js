/**
 * Set up the Flickity dependencies and stles
 */
import Splide from '@splidejs/splide';

import flickityOptions from './config.json';

document.addEventListener( 'DOMContentLoaded', function() {
	const splideSliders = document.querySelectorAll('.splide');

	/**
	 * Initialize every Splide slider
	 */
	[...splideSliders].map(item => item).forEach(splideSlider => {
		let splide = new Splide( splideSlider );
		splide.mount();
	});
} );
