import { getAllPosts } from '@/lib/posts';
import { markdownToHtml } from '@/lib/markdownToHtml';

export async function getPost(slug: string) {
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return null;

  const contentHtml = await markdownToHtml(post.content);
  return {
    ...post,
    contentHtml,
  };
}