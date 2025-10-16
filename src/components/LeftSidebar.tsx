import { useState } from "react";
import { Search, ChevronDown, ChevronRight, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Category } from "@/types/article";
import { cn } from "@/lib/utils";

interface LeftSidebarProps {
  categories: Category[];
  activeArticleId: string;
  onArticleClick: (articleId: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export const LeftSidebar = ({
  categories,
  activeArticleId,
  onArticleClick,
  isOpen,
  onToggle,
}: LeftSidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(categories.map((c) => c.id))
  );

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      articles: category.articles.filter((article) =>
        article.title.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    }))
    .filter((category) => category.articles.length > 0);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 lg:hidden bg-card hover:bg-hover-bg"
      >
        <Menu className="h-5 w-5" />
      </Button>

      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 h-screen bg-sidebar-bg border-r border-border flex flex-col transition-transform duration-300 z-40",
          "w-72",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="text-primary">●</span> HelpDesk
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-secondary border-border focus:border-primary"
            />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border bg-muted px-1.5 font-mono text-xs text-muted-foreground">
              Ctrl K
            </kbd>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto p-4">
          {filteredCategories.map((category) => (
            <div key={category.id} className="mb-4">
              <button
                onClick={() => toggleCategory(category.id)}
                className="flex items-center justify-between w-full text-sm font-semibold text-foreground hover:text-primary transition-colors mb-2"
              >
                <span>{category.name}</span>
                {expandedCategories.has(category.id) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>

              {expandedCategories.has(category.id) && (
                <div className="ml-2 space-y-1">
                  {category.articles.map((article) => (
                    <button
                      key={article.id}
                      onClick={() => {
                        onArticleClick(article.id);
                        if (window.innerWidth < 1024) {
                          onToggle();
                        }
                      }}
                      className={cn(
                        "block w-full text-left px-3 py-2 text-sm rounded-md transition-all",
                        activeArticleId === article.id
                          ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                          : "text-muted-foreground hover:text-foreground hover:bg-hover-bg"
                      )}
                    >
                      {article.title}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={onToggle}
        />
      )}
    </>
  );
};
