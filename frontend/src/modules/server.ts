import type { VanishedInterface } from '../interface/blogPost';

async function db() {
	const resp = await fetch('/list_post');

	const respBox: VanishedInterface[] = [];

	for (const post of await resp.json()) {
		if (post.isPublish) {
			const temp: VanishedInterface = {
				slug: post.id,
				title: post.title,
				tags: post.tags,
				date: post.date,
				author: post.author,
				content: post.content
			};

			respBox.push(temp);
		}
	}

	return { respBox };
}

export default db;
