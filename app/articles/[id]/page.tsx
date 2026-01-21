import { articlesMocks, articleVersionMocks } from "@/src/mocks/articles"
import { notFound } from "next/navigation";

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const article = articlesMocks.find((article) => article.id === id)
    if (!article) {
        return notFound();
    }

    const currentVersion = articleVersionMocks.find((v) => v.articleId === article.id && v.articleId)
    return (
        <div className="min-h-screen bg-zinc-50 p-6 dark:bg-black">
            <h1>Тема: {article.title}</h1>
            <p>Версия: {article.currentVersionId}</p>
            <p>Статус: {article.status}</p>

            <div className="mt-4 rounded-lg border bg-white p-4">
                <h2 className="mb-2 text-lg font-semibold">Содержание статьи:</h2>
                {currentVersion?.body ? (
                    <p>{currentVersion.body}</p>
                ) : (
                    <p>Нет текста для этой версии</p>
                )}
            </div>
        </div>
    );
}



