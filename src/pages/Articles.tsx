import { motion } from "framer-motion";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllArticles, formatDate } from "@/lib/articles";

const Articles = () => {
  const articles = getAllArticles();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back link */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Articles</h1>
            <p className="text-muted-foreground text-lg">
              Thoughts on AI, technology, law, and building in Africa.
            </p>
          </motion.div>

          {/* Articles List */}
          <div className="space-y-8">
            {articles.length === 0 ? (
              <p className="text-muted-foreground text-center py-12">
                No articles yet. Check back soon!
              </p>
            ) : (
              articles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link to={`/articles/${article.slug}`}>
                    <div className="group p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors duration-300">
                      {/* Article Meta */}
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {formatDate(article.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User className="w-4 h-4" />
                          {article.author}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {article.excerpt}
                      </p>

                      {/* Tags */}
                      {article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                            >
                              <Tag className="w-3 h-3" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </Link>
                </motion.article>
              ))
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Articles;
