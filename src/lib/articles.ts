import matter from "gray-matter";

export interface Article {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  content: string;
}

export interface ArticleMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
}

// Import all markdown files from the content/articles directory
const articleModules = import.meta.glob("/src/content/articles/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

function parseArticle(rawContent: string, filePath: string): Article {
  const { data, content } = matter(rawContent);
  
  // Extract slug from filepath if not in frontmatter
  const slug = data.slug || filePath.split("/").pop()?.replace(".md", "") || "";
  
  return {
    slug,
    title: data.title || "Untitled",
    date: data.date || new Date().toISOString().split("T")[0],
    author: data.author || "Unknown",
    excerpt: data.excerpt || "",
    tags: data.tags || [],
    coverImage: data.coverImage,
    content,
  };
}

export function getAllArticles(): ArticleMeta[] {
  const articles: ArticleMeta[] = [];

  for (const [path, rawContent] of Object.entries(articleModules)) {
    const article = parseArticle(rawContent as string, path);
    const { content: _, ...meta } = article;
    articles.push(meta);
  }

  // Sort by date (newest first)
  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  for (const [path, rawContent] of Object.entries(articleModules)) {
    const article = parseArticle(rawContent as string, path);
    if (article.slug === slug) {
      return article;
    }
  }
  return undefined;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
