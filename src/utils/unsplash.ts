import { createApi } from 'unsplash-js';

export const unsplash = createApi({
	accessKey: import.meta.env.UNSPLASH_ACCESS_KEY || '',
});

export const getPhoto = async (photoId = '') => {
	return await unsplash.photos.get({ photoId }).then((result) => {
		if (result.errors) {
			return {
				error: result.errors[0],
			};
		} else {
			const { id, alt_description = '', urls, user, links } = result.response;
			return {
				id,
				alt: alt_description,
				url: urls?.regular,
				name: user?.name,
				link: links?.html,
			};
		}
	});
};
