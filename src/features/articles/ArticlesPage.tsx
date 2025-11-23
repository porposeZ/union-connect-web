"use client";

import type { Article } from "../../domain/models";

type ArticlesPageProps = {
  articles: Article[];
};

export function ArticlesPage({ articles }: ArticlesPageProps) {
  return (
    <div>
      <h1>Список статей</h1>

      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>status: {article.status}</p>
        </div>
      ))}
    </div>
  );
}
