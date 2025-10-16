import { Article, Category } from "@/types/article";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface RightSidebarProps {
  article: Article;
  categories: Category[];
  onArticleClick: (articleId: string) => void;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

export const RightSidebar = ({
  article,
  categories,
  onArticleClick,
}: RightSidebarProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const extractedHeadings: Heading[] = [];
    const lines = article.content.split("\n");
    
    lines.forEach((line, index) => {
      const h1Match = line.match(/^# (.+)$/);
      const h2Match = line.match(/^## (.+)$/);
      const h3Match = line.match(/^### (.+)$/);
      
      if (h1Match) {
        extractedHeadings.push({
          id: `heading-${index}`,
          text: h1Match[1],
          level: 1,
        });
      } else if (h2Match) {
        extractedHeadings.push({
          id: `heading-${index}`,
          text: h2Match[1],
          level: 2,
        });
      } else if (h3Match) {
        extractedHeadings.push({
          id: `heading-${index}`,
          text: h3Match[1],
          level: 3,
        });
      }
    });

    setHeadings(extractedHeadings);
  }, [article]);

  const relatedArticles = categories
    .flatMap((cat) => cat.articles)
    .filter((art) => article.relatedArticles?.includes(art.id));

  return (
    <aside className="hidden xl:block w-64 h-screen sticky top-0 border-l border-border overflow-y-auto">
      <div className="p-6">
        <div className="mb-8">
          <h3 className="text-sm font-semibold mb-4 text-foreground flex items-center gap-2">
            <span className="text-primary">≡</span> On this page
          </h3>
          <nav className="space-y-2">
            {headings.map((heading) => (
              <button
                key={heading.id}
                onClick={() => {
                  // Scroll functionality could be added here
                  setActiveId(heading.id);
                }}
                className={cn(
                  "block text-sm text-left transition-colors w-full",
                  heading.level === 1 && "font-medium",
                  heading.level === 2 && "pl-3",
                  heading.level === 3 && "pl-6",
                  activeId === heading.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {heading.text}
              </button>
            ))}
          </nav>
        </div>

        {relatedArticles.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold mb-4 text-foreground">
              Related Articles
            </h3>
            <div className="space-y-2">
              {relatedArticles.map((related) => (
                <button
                  key={related.id}
                  onClick={() => onArticleClick(related.id)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-colors text-left w-full p-2 rounded hover:bg-hover-bg"
                >
                  {related.title}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
