import { __ } from '@wordpress/i18n';
import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody, SelectControl, TextControl } from
		'@wordpress/components';
import { useSelect } from '@wordpress/data';
const Edit = ({ attributes, setAttributes }) => {
	const {orderBy, order, noOfDisplay} = attributes;
	const posts = useSelect((select) => {
	return select('core').getEntityRecords('postType', 'post', {
	per_page: noOfDisplay,
			order,
			orderby: orderBy,
	});
	}, [orderBy, order, noOfDisplay]);
			return (
					<>
<InspectorControls>
	<PanelBody title=
			{__('Settings', 'top-5-wp-blogs')}>
		<SelectControl
			label={__('Order By', 'top-5-wp-blogs')}
			value={orderBy}
			options={[
			{ label: __('Ascending', 'top-5-wp-blogs'),
					value: 'ASC' },
			{ label: __('Descending', 'top-5-wp-blogs'),
					value: 'DESC' },
			]}
			onChange={(value) => setAttributes({ orderBy: value
					})}
			/>
		<SelectControl
			label={__('Order', 'top-5-wp-blogs')}
			value={order}
			options={[
			{ label: __('Name', 'top-5-wp-blogs'), value:
					'name' },
			{ label: __('Publish Date', 'top-5-wp-blogs'),
					value: 'publish_date' },
			]}
			onChange={(value) => setAttributes({ order: value
					})}
			/>
		<TextControl
			label={__('Number of Blogs to Display', 'top-5-wpblogs')}
			type="number"
			value={noOfDisplay}
			onChange={(value) => setAttributes({
				noOfDisplay:
						parseInt(value, 10) })}
			/>
	</PanelBody>
</InspectorControls>
<div className="top-5-wp-blogs-grid">
	
				{posts && posts.length > 0 ? (
						posts.map((post) => (
												<div key={post.id} className="top-5-wp-blogs-item">
											<img
												src={post.featured_media ?
															post.featured_media.source_url : ''}
												alt={post.title.rendered}
												style={{width: '300px', height: '240px'}}
												/>
											<h2>
												<a
													href={post.link}>{post.title.rendered}</a>
											</h2>
											<p dangerouslySetInnerHTML={{__html:
																	post.excerpt.rendered}} />
										</div>
									))
						) : (
						<p>{__('No posts found.', 'top-5-wp-blogs')}</p>
						)
}
				
</div>
</>
);
};
export default Edit;