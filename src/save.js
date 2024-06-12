import { __ } from '@wordpress/i18n';
const save = ({ attributes }) => {
	const {orderBy, order, noOfDisplay} = attributes;
	// Placeholder save function since this block relies on dynamic
	rendering via PHP.
			return (
					<div className="top-5-wp-blogs-grid">
						<p>{__('Top 5 WordPress Blogs (will be dynamically rendered)',
												'top-5-wp-blogs')}</p>
					</div>
					);
};
export default save;