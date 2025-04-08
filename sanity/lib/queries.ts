import { defineQuery } from "next-sanity";

export const STARTUPS_QUERY = defineQuery(`
	*[_type=="startup" && defined(slug.current)] {
		_id,
        _createdAt,
        views,
        description,
		author -> {
			_id, name, slug, image, bio
		},
		title,
        category,
        image
	}
`);
