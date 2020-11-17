/**
 * Remove squared button style
 *
 * @since Mild Simple 1.0
 */
/* global wp */
wp.domReady( function() {
	wp.blocks.unregisterBlockStyle( 'core/button', 'squared' );
} );
