import { error } from '@sveltejs/kit';
import db from '../../../modules/server';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
	const posts = (await db()).respBox;
	let blogStatus = false;
	let postContent;

	for (const post of posts) {
		if (String(params) === post.slug) {
			blogStatus = true;
			postContent = post;
			break;
		} else {
			blogStatus = false;
		}
	}

	console.log(blogStatus);

	if (!blogStatus) {
		throw error(404, {
			message: 'Not found'
		});
	}

	return postContent;
}