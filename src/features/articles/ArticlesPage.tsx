"use client";
import { useState } from "react";
import Link from "next/link";
import type { Article } from "../../domain/models";

type ArticlesPageProps = {
  articles: Article[];
};

type ArticlesStatusRussian = "актуально" | "требуется обновление" | "устарело";

type StatusFilter = "all" | Article["status"];
// Record<Keys, ValueType> — служебный тип TS: объект, где ключи жёстко равны Keys, а значения имеют тип ValueType.
// То есть ArticlesStatusClassMap обязан иметь все статусы статьи в ключах и строки в значениях; если забудешь статус или опечатаешься — TS ругнётся.
const ArticlesStatusMap: Record<Article["status"], ArticlesStatusRussian> = {
  actual: "актуально",
  needs_update: "требуется обновление",
  partially_outdated: "устарело",
};

const ArticlesStatusClassMap: Record<Article["status"], string> = {
  actual: "bg-green-100 text-green-700 ring-1 ring-green-200",
  needs_update: "bg-amber-100 text-amber-700 ring-1 ring-amber-200",
  partially_outdated: "bg-slate-200 text-slate-700 ring-1 ring-slate-300",
};

export function ArticlesPage({ articles }: ArticlesPageProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredArticles = articles.filter((article) => {
    const passesStatus =
      statusFilter === "all" || article.status === statusFilter;

    const passesQuery =
      !normalizedQuery || article.title.toLowerCase().includes(normalizedQuery);

    return passesStatus && passesQuery;
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="flex min-w-12 justify-center columns-1 mr-3.5">
        <div className="flex flex-col gap-2.5">
          <select
            className="border border-blue-600"
            value={statusFilter}
            onChange={(event) => {
              setStatusFilter(event.target.value as StatusFilter);
            }}
          >
            <option value="all">Все статусы</option>
            <option value="actual" className="bg-green-400">
              Актуально
            </option>
            <option value="needs_update">Требуется обновление</option>
            <option value="partially_outdated">Устарело</option>
          </select>

          <input
            className="border border-black border-2"
            type="text"
            value={searchQuery}
            placeholder="Поиск по заголовку"
            onChange={(event) => {
              setSearchQuery(event.target.value);
            }}
          />
        </div>
      </div>

      <div className="flex flex-col ml-3.5">
        <h1>Список статей</h1>

        {filteredArticles.length === 0 ? (
          <p>Статьи не найдены</p>
        ) : (
          <ul>
            {filteredArticles.map((article) => (
              <Link href={`/articles/${article.id}`} key={article.id}>
              <li
                className="bg-white rounded-lg border border-gray-300 p-4 shadow-sm hover:bg-slate-50 transition"
                key={article.id}
              >
                <p className="ml-0.5 mb-3.5">{article.title}</p>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                    ArticlesStatusClassMap[article.status]
                  }`}
                >
                  {ArticlesStatusMap[article.status]}
                </span>
              </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
