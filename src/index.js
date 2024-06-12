import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import save from './save';
import './index.css';
registerBlockType('custom/top-5-wp-blogs', {
	title: __('Top 5 WordPress Blogs', 'top-5-wp-blogs'),
	icon: 'admin-post',
	category: 'widgets',
	attributes: {
		orderBy: {
			type: 'string',
			default: 'DESC',
		},
		order: {
			type: 'string',
			default: 'publish_date',
		},
		noOfDisplay: {
			type: 'number',
			default: 5,
		},
	},
	edit: Edit,
	save,
});