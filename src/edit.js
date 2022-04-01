/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import {__} from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-block-editor/#useBlockProps
 */
import {useBlockProps, InnerBlocks} from '@wordpress/block-editor';
import {Button} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */

/**
 * Custom Appender meant to be used when there is only one type of block that can be inserted to an InnerBlocks instance.
 *
 * @param buttonText
 * @param onClick
 * @param clientId
 * @param allowedBlock
 * @param innerBlocks
 * @param {Object} props
 */

const SingleBlockTypeAppender = (
	{
		buttonText = __('Add Item'),
		onClick,
		clientId,
		allowedBlock,
		innerBlocks,
		...props
	}) => {
	return (
		<Button onClick={onClick} {...props} >
			{buttonText}
		</Button>
	);
};

export default function Edit({attributes, setAttributes}) {
	const {} = attributes;

	const blockProps = useBlockProps();
	const ALLOWED_BLOCKS = ['core/cover'];
	/** Add .carousel-cell class to the inner blocks for flickity carousel styling **/
	const innerBlockPresets = {'className': 'carousel-cell', 'align': 'full'};
	const TEMPLATE = [['core/cover', innerBlockPresets], ['core/cover', innerBlockPresets], ['core/cover', innerBlockPresets]];

	return (
		<div {...blockProps}>
			<div className='main-carousel'>
				<InnerBlocks
					allowedBlocks={ALLOWED_BLOCKS}
					template={TEMPLATE}
					orientation='horizontal'
					renderAppender={
						() =>
							<SingleBlockTypeAppender
								isDefault
								isLarge
								buttonText="Add Block"
								allowedBlock={ALLOWED_BLOCKS}
								clientId={this.props.clientId}
							/>
					}
				/>
			</div>
		</div>
	);
}
