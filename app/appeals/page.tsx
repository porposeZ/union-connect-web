"use client";
import Link from "next/link";
import { appealsMocks, appealMessageMocks } from "@/src/mocks/articles";
import { useState } from "react";
import { Appeal } from "@/src/domain/models";

function parseRuDateTime(value: string): number {
  const [datePart, timePart] = value.trim().split(" ");
  const [day, month, year] = datePart.split(".").map(Number);
  const [hour = 0, minute = 0] = timePart
    ? timePart.split(":").map(Number)
    : [];
  return new Date(year, month - 1, day, hour, minute).getTime();
}

export default function AppealsPage() {
  const appeals = [...appealsMocks].sort(
    (a, b) => parseRuDateTime(b.updatedAt) - parseRuDateTime(a.updatedAt),
  );

  const [filters, setFilters] = useState({
    status: "all" as "all" | Appeal["status"],
    priority: "all" as "all" | Appeal["priority"],
  });

  const visibleAppeals = appeals.filter((a) => 
    (filters.status === "all" || a.status === filters.status) 
  &&
    (filters.priority === "all" || a.priority === filters.priority)
  );

  return (
    <div className="min-h-screen bg-zinc-50 p-6 dark:bg-black">
      <h1 className="mb-4 text-xl font-semibold">Обращения</h1>
      <button
        className="rounded-lg border bg-white p-4"
        onClick={() => setFilters((f) => ({ ...f, status: "open" }))}
      >
        Открытые
      </button>
      <button
        className="rounded-lg border bg-white p-4"
        onClick={() => setFilters((f) => ({ ...f, priority: "high" }))}
      >
        Приоритету high (переделать в сортировку от наиболее до менее и наоборот)
      </button>
        <button
        className="rounded-lg border bg-white p-4"
        onClick={() => setFilters((f) => ({ ...f, priority: "all", status: "all" }))}
      >
        все
      </button>
      <ul className="space-y-3">
        {visibleAppeals.map((appeal) => {
          const messages = appealMessageMocks.filter(
            (m) => m.appealId === appeal.id,
          );

          return (
            <li key={appeal.id} className="rounded-lg border bg-white p-4">
              <Link href={`/appeals/${appeal.id}`} className="block space-y-1">
                <div className="flex items-center justify-between">
                  <span>
                    Клиент:{" "}
                    <span className="font-medium">{appeal.clientName}</span>
                  </span>
                  <span className="font-medium">
                    #{appeal.number} — {appeal.theme}
                  </span>
                  <span className="text-sm text-gray-500">
                    {appeal.updatedAt}
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Статус: {appeal.status} · Приоритет: {appeal.priority} ·
                  Сообщений: {messages.length}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
