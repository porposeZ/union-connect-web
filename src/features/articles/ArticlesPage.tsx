"use client";
import { useState } from "react";

import type { Article } from "../../domain/models";

type ArticlesPageProps = {
  articles: Article[];
};

type ArticleStatusRussian = "актуальна" | "частично устарела" | "требует обновления";

const ArticleStatusMap: Record<Article["status"], ArticleStatusRussian> = {
  actual: "актуальна",
  partially_outdated: "частично устарела",
  needs_update: "требует обновления",
};
//TODO: Попрактиковать артиклстатусмап и отобразить статус статьи на русском языке
export function ArticlesPage({ articles }: ArticlesPageProps) {

  const [searchQuery, setSearchQuery] = useState("");




  return (
    
    <div>
      <input 
      value={searchQuery}
      type="text"
      placeholder="Поиск по заголовку..."
      onChange={(event) => {setSearchQuery(event.target.value)}}/>
      <h1>Список статей</h1>

      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>статус: {ArticleStatusMap[article.status]}</p>
        </div>
      ))}
    </div>
  );
}
