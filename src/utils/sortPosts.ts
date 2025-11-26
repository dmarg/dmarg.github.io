import type { CollectionEntry } from 'astro:content';

export type AnyPost = CollectionEntry<'blog'> | CollectionEntry<'projects'>;

export function sortPostsByDate(posts: AnyPost[]): AnyPost[] {
  return [...posts].sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

export function getRelatedPosts(
  currentPost: AnyPost,
  allPosts: AnyPost[],
  limit: number = 5
): AnyPost[] {
  const currentTags = currentPost.data.tags;

  const relatedPosts = allPosts
    .filter(post => post.slug !== currentPost.slug)
    .map(post => ({
      post,
      sharedTags: post.data.tags.filter(tag => currentTags.includes(tag)).length,
    }))
    .filter(({ sharedTags }) => sharedTags > 0)
    .sort((a, b) => b.sharedTags - a.sharedTags)
    .slice(0, limit)
    .map(({ post }) => post);

  return relatedPosts;
}

export function getAllTags(posts: AnyPost[]): string[] {
  const tags = new Set<string>();
  posts.forEach(post => {
    post.data.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}
