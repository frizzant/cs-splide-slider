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

registerBlockType('cs/flickity-slider-inner', {
	/**
	 * These are the attributes for this block.
	 */
	title: __('Slide', 'cs-slider'),
	category: 'design',
	icon: 'slides',
	description: __('Displays the Cover Block as a slide', 'cs-slider'),
	supports: {
		align: true,
	},
	parent: ['cs/flickity-slider'],
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
		const ALLOWED_BLOCKS = ['core/cover'];
		/** Add .carousel-cell class to the inner blocks for flickity carousel styling **/
		const innerBlockPresets = {'align': 'full'};
		const TEMPLATE = [['core/cover', innerBlockPresets]];

		return (
			<div className='carousel-cell'>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={TEMPLATE}
					renderAppender={false}
				/>
			</div>
		);
	},
	/**
	 * @see ./save.js
	 */
	save: () => {
		return (
			<div className="carousel-cell">
				<InnerBlocks.Content/>
			</div>
		);
	},
});
