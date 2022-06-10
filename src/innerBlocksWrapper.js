/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import {__} from '@wordpress/i18n';
import {registerBlockType} from '@wordpress/blocks';
import {InnerBlocks} from '@wordpress/block-editor';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */

registerBlockType('cs/splide-slide-inner', {
	/**
	 * These are the attributes for this block.
	 */
	title: __('Slide Element', 'cs-slider'),
	category: 'design',
	icon: 'slides',
	description: __('Adds a slide element', 'cs-slider'),
	supports: {
		align: true,
	},
	parent: ['cs/splide-slider'],
	textdomain: 'cs-slider',
	attributes: {
		align: {
			type: 'string',
			default: 'full'
		}
	},
	/**
	 * @see ./edit.js
	 */
	edit: () => {
		const ALLOWED_BLOCKS = ['core/cover', 'core/embed'];
		/** Add .carousel-cell class to the inner blocks for flickity carousel styling **/
		const innerBlockPresets = {'align': 'full'};
		const TEMPLATE = [['core/cover', innerBlockPresets]];

		return (
			<li className='splide__slide'>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={TEMPLATE}
					renderAppender={false}
				/>
			</li>
		);
	},
	/**
	 * @see ./save.js
	 */
	save: () => {
		return (
			<li className='splide__slide'>
				<InnerBlocks.Content/>
			</li>
		);
	},
});
