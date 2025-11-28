import { articlesMocks } from "@/src/mocks/articles"

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const {id} = await params;
    const article = articlesMocks.find((article) => article.id === id)
    if (!article) {
        return <div>Статья не найдена</div>;
    }






    
    return (
  <div>
    <h1>{article.title}</h1>
    <p>ID: {id}</p>
    <p>Статус: {article.status}</p>
  </div>
);
}



