import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { sortPostsByDate } from '../utils/sortPosts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const blog = await getCollection('blog');
  const sortedPosts = sortPostsByDate(blog) as any[];

  return rss({
    title: 'Daniel Margol',
    description: 'A blog about technology and related stuff.',
    site: context.site?.toString() || 'https://danielmargol.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
