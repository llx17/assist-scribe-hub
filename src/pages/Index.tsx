import { useState, useEffect } from "react";
import { LeftSidebar } from "@/components/LeftSidebar";
import { ArticleContent } from "@/components/ArticleContent";
import { RightSidebar } from "@/components/RightSidebar";
import { categories as fallbackCategories } from "@/data/articles";
import { useCategories } from "@/hooks/useHelpCenter";
import { Article } from "@/types/article";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeArticleId, setActiveArticleId] = useState("meet-helpdesk");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  const { data: apiCategories, isLoading, isError, refetch } = useCategories();
  
  // Use API data if available, otherwise fallback to static data
  const categories = apiCategories || fallbackCategories;

  const allArticles = categories.flatMap((cat) => cat.articles);
  const activeArticle = allArticles.find(
    (article) => article.id === activeArticleId
  ) as Article;

  // Set first article as active if current active doesn't exist
  useEffect(() => {
    if (allArticles.length > 0 && !activeArticle) {
      setActiveArticleId(allArticles[0].id);
    }
  }, [allArticles, activeArticle]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen w-full bg-background">
        <aside className="w-72 border-r border-border p-6 space-y-4">
          <Skeleton className="h-8 w-3/4" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-6 w-2/3" />
          <Skeleton className="h-6 w-3/4" />
          <Skeleton className="h-6 w-1/2" />
        </aside>
        <main className="flex-1 p-8 space-y-4">
          <Skeleton className="h-12 w-1/2" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </main>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-screen w-full bg-background items-center justify-center p-6">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error loading help center</AlertTitle>
          <AlertDescription className="mt-2">
            Failed to load articles from the backend. Using fallback data.
            <Button 
              variant="outline" 
              size="sm" 
              onClick={() => refetch()} 
              className="mt-3 w-full"
            >
              Retry
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

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
