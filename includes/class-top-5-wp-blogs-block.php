<?php

//Block direct access
if (!defined('ABSPATH')) {
	wp_die('Direct access not allowed!');
}


class Top_5_WP_Blogs_Block {

	public static function init() {
		// Register block editor assets.
		add_action('enqueue_block_editor_assets', array(__CLASS__,
			'enqueue_block_editor_assets'));
		
		// Register the block.
		register_block_type(TOP_5_WP_BLOGS_BLOCK_DIR);
	}

	public static function enqueue_block_editor_assets() {
		wp_enqueue_script(
				'top-5-wp-blogs-block-editor',
				TOP_5_WP_BLOGS_BLOCK_URL . 'build/index.js',
				array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor', 'wpcomponents', 'wp-data'),
				TOP_5_WP_BLOGS_BLOCK_VERSION,
				true
		);
		wp_enqueue_style(
				'top-5-wp-blogs-block-editor',
				TOP_5_WP_BLOGS_BLOCK_URL . 'build/index.css',
				array('wp-edit-blocks'),
				TOP_5_WP_BLOGS_BLOCK_VERSION
		);
	}

}
