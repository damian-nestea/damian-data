import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const posts = getAllPosts();
  console.log(posts);

  return (
    <section>
      <h2 className=" text-2xl font-semibold text-center mb-4">
        Bem-vindo ao meu blog!
      </h2>
      <p className=" text-gray-700 text-center mb-8">
        Espaço para compartilhar minhas anotações e aprendizados sobre ciência
        de dados, programação e outros assuntos que gosto!
      </p>
      <h3 className=" text-xl font-bold text-center my-4">Últimos Posts</h3>
      {posts.map((post) => (
        <article className=" mb-6" key={post.slug}>
          <h4 className="text-md font-semibold text-blue-900 hover:underline">
            <Link href={`/posts/${post.slug}`}>{post.title}</Link>
          </h4>
          <p className="text-gray-500 text-sm">{post.date}</p>
          <div className="mt-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-gray-200 rounded px-2 py-1 mr-2"
              >
                #{tag}
              </span>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
