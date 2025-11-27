"use client";
import { useState } from "react";
import Link from "next/link";
import type { Article } from "../../domain/models";

type ArticlesPageProps = {
  articles: Article[];
};

type ArticlesStatusRussian = "актуально" | "требуется обновление" | "устарело";

type StatusFilter = "all" | Article["status"];

const ArticlesStatusMap: Record<Article["status"], ArticlesStatusRussian> = {
  actual: "актуально",
  needs_update: "требуется обновление",
  partially_outdated: "устарело",
};

export function ArticlesPage({ articles }: ArticlesPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredArticles = articles.filter((article) => {
    const passesStatus =
      statusFilter === "all" || article.status === statusFilter;

    const passesQuery =
      !normalizedQuery ||
      article.title.toLowerCase().includes(normalizedQuery);

    return passesStatus && passesQuery;
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="flex min-w-12 justify-center columns-1"> 

      <select className="border border-blue-600"
        value={statusFilter}
        onChange={(event) => {
          setStatusFilter(event.target.value as StatusFilter);
        }}
        >
        <option value="all">Все статусы</option>
        <option value="actual">Актуально</option>
        <option value="needs_update">Требуется обновление</option>
        <option value="partially_outdated">Устарело</option>
      </select>

      <input className="border border-black border-2"
        type="text"
        value={searchQuery}
        placeholder="Поиск по заголовку"
        onChange={(event) => {
          setSearchQuery(event.target.value);
        }}
      />
        </div>

      <h1>Список статей</h1>

      {filteredArticles.length === 0 ? (
        <p>Статьи не найдены</p>
      ) : (
        <ul>
          {filteredArticles.map((article) => (
            <li className="bg-white rounded-lg border border-gray-300 p-4 shadow-sm hover:bg-slate-50 transition" 
            key={article.id}>
              <Link href={`/articles/${article.id}`}>
              {article.title} 
              </Link>{" "}
              - {ArticlesStatusMap[article.status]}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
