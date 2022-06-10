/**
 * Set up the Flickity dependencies and stles
 */
import Splide from '@splidejs/splide';
import options from './options.json';

const viewportWidth = document.documentElement.clientWidth;
const destroyBlockStyle = (viewportWidth < 980);

document.addEventListener( 'DOMContentLoaded', function() {
	const splideSliders = document.querySelectorAll('.wp-block-cs-splide-slider');

	/**
	 * Initialize every Splide slider
	 */
	[...splideSliders].map(item => item).forEach(block => {
		const sliderElement = block.querySelector('.splide');
		let splide = new Splide( sliderElement, options );

		splide.mount();

		if ( destroyBlockStyle && block.classList.contains('is-style-mini-gallery') ) {
			splide.destroy();
		}
	});
} );

//980
