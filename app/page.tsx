import { ArticlesPage } from "@/src/features/articles/ArticlesPage";
import { articlesMock } from "@/src/mocks/articles";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
      <ArticlesPage articles={articlesMock} />
      </main>
    </div>
  );
}
