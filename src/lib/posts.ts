import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  title: string;
  date: string;
  tags: string[];
  content: string;
  slug: string;
};

const postsDirectory = path.join(process.cwd(), "src", "posts");

export function getAllPosts(): Post[] {
  // Verifica se o diretório existe
  if (!fs.existsSync(postsDirectory)) {
    console.error("Diretório de posts não encontrado:", postsDirectory);
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      title: data.title || "Sem título",
      date: data.date || new Date().toISOString(),
      tags: data.tags || [],
      content,
      slug,
    };
  });
}