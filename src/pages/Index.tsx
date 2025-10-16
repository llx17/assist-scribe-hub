import { useState } from "react";
import { LeftSidebar } from "@/components/LeftSidebar";
import { ArticleContent } from "@/components/ArticleContent";
import { RightSidebar } from "@/components/RightSidebar";
import { categories } from "@/data/articles";
import { Article } from "@/types/article";

const Index = () => {
  const [activeArticleId, setActiveArticleId] = useState("meet-helpdesk");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const allArticles = categories.flatMap((cat) => cat.articles);
  const activeArticle = allArticles.find(
    (article) => article.id === activeArticleId
  ) as Article;

  return (
    <div className="flex min-h-screen w-full bg-background">
      <LeftSidebar
        categories={categories}
        activeArticleId={activeArticleId}
        onArticleClick={setActiveArticleId}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />

      <main className="flex-1 flex min-w-0">
        {activeArticle && <ArticleContent article={activeArticle} />}
      </main>

      <RightSidebar
        article={activeArticle}
        categories={categories}
        onArticleClick={setActiveArticleId}
      />
    </div>
  );
};

export default Index;
