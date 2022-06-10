<?php
/**
 * Plugin Name:       CS Splide Slider Block
 * Plugin URI:        www.calmarsolutions.ch | https://splidejs.com/
 * Description:       Displays Content in a Slider
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Erin McGowan | Frizzant
 * License:           GPLv3
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.en.html
 * Text Domain:       cs-slider
 *
 * @package           cs-slider
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */

function cs_slider_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'cs_slider_block_init' );
