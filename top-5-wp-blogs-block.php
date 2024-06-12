<?php
/*
Plugin Name: Top 5 WP Blogs Block
Description: A custom Gutenberg block to display the top 5 WordPress blogs.
Version: 1.0
Author: Akash Sharma
*/

//Block direct access
if (!defined('ABSPATH')) {
	wp_die('Direct access not allowed!');
}

// Defining constants.
define('TOP_5_WP_BLOGS_BLOCK_VERSION', '1.0');
define('TOP_5_WP_BLOGS_BLOCK_DIR', plugin_dir_path(__FILE__));
define('TOP_5_WP_BLOGS_BLOCK_URL', plugin_dir_url(__FILE__));

// Including plugin's necessary files.
require_once TOP_5_WP_BLOGS_BLOCK_DIR . 'includes/class-top-5-wp-blogsblock.php';

// Initialize the main class.
add_action('init', array('Top_5_WP_Blogs_Block', 'init'));