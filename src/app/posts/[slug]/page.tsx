import { notFound } from 'next/navigation';
import { getAllPosts } from '@/lib/posts';
import { markdownToHtml } from '@/lib/markdownToHtml';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const contentHtml = await markdownToHtml(post.content);

  return (
    <article className="prose prose-lg mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <time className="text-gray-500 text-sm block mb-6">
        {new Date(post.date).toLocaleDateString('pt-BR')}
      </time>
      <div className="markdown" dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  );
}