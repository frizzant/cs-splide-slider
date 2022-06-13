=== CS Splide Slider Block ===
Contributors:      Erin McGowan | Frizzant
Tags:              block
Tested up to:      5.9
Stable tag:        0.1.0
License:           GPLv3
License URI:       https://www.gnu.org/licenses/gpl-3.0.en.html

Displays Content in a Slider

== Description ==

Gutenberg block for displaying content in a slider with the amazing SplideJS Slider. By default it includes a non locked 'core/cover' block.
SplideJS Docs: https://splidejs.com/

== Installation ==

This section describes how to install the plugin and get it working.

e.g.

1. Upload the plugin files to the `/wp-content/plugins/cs-slider` directory (after build).
1. Activate the plugin through the 'Plugins' screen in WordPress


== Frequently Asked Questions ==


= How do I change SplideJS slider settings? =
The file './src/options.json' contains an object that is passed to the 'frontend.js' script. You can simply add your options there, then rebuild the project with 'npm build'.

= What is the innerBlockWrapper.js for? =
This file is used to wrap the inner blocks in the slider. Due to the nature of gutenberg it is not directly possible to allow block-variations with specific attributes to be added.
This is a workaround to get blocks with presets to work.


== Screenshots ==

1. This screen shot description corresponds to screenshot-1.(png|jpg|jpeg|gif). Note that the screenshot is taken from
the /assets directory or the directory that contains the stable readme.txt (tags or trunk). Screenshots in the /assets
directory take precedence. For example, `/assets/screenshot-1.png` would win over `/tags/4.3/screenshot-1.png`
(or jpg, jpeg, gif).
2. This is the second screen shot

== Changelog ==

= 0.1.0 =
* Release
