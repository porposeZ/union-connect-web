"use client";
import { useState } from "react";

import type { Article } from "../../domain/models";

type ArticlesPageProps = {
  articles: Article[];
};

type ArticlesStatusRussian = "актуально" | "требуется обновление" | "устарело";

const ArticlesStatusMap: Record<Article["status"], ArticlesStatusRussian> = {
  actual: "актуально",
  needs_update: "требуется обновление",
  partially_outdated: "устарело",
};

//TODO: Попрактиковать артиклстатусмап и отобразить статус статьи на русском языке
export function ArticlesPage({ articles }: ArticlesPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
//TODO: попрактиковать фильтр
    const normalizedQuery = searchQuery.trim().toLowerCase()
    const filteredArticles = articles.filter((article => {
      
      if (!normalizedQuery) return true;

      const normalizedTitle = article.title.toLowerCase()
      return normalizedTitle.includes(normalizedQuery)

    }))
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        placeholder="Поиск по заголовку"
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
      />
      <h1>Список статей</h1>


        {filteredArticles.length === 0 ? (
          <p>Статьи не найдены</p>
        ) : (
          <ul>
            {filteredArticles.map((article) => (
              <li key={article.id}>
                {article.title} - {ArticlesStatusMap[article.status]}
              </li>
            ))}
          </ul>
        )}


    </div>
  );
}
