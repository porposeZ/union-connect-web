import { appealsMocks, appealMessageMocks } from "@/src/mocks/articles"
import { notFound } from "next/navigation";

function parseRuDateTime(value: string): number {
  const [datePart, timePart] = value.trim().split(" ");
  const [day, month, year] = datePart.split(".").map(Number);
  const [hour = 0, minute = 0] = timePart ? timePart.split(":").map(Number) : [];
  return new Date(year, month - 1, day, hour, minute).getTime();
}

export default async function AppealPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const {id} = await params;
    const appeal = appealsMocks.find((appeal) => appeal.id === id)
    if (!appeal) {
        return notFound();
    }
    const messages = appealMessageMocks.filter((m) => m.appealId === appeal.id);


    const sortedMessages = [...messages].sort(
        (a, b) => parseRuDateTime(a.createdAt) - parseRuDateTime(b.createdAt)    
    )

    return (
    <div className="min-h-screen bg-zinc-50 p-6 dark:bg-black">
        <h1 className="mb-4 text-xl font-semibold">Обращение #{appeal.number}</h1>
        <h1 className="">Тема: {appeal.theme} </h1>
        <button className="rounded-lg border bg-white p-4">Кнопка</button>
        <h2 className="mb-4 text-lg font-semibold">Сообщения:</h2>
        {sortedMessages.map((message) => (
            <div key={message.id} className="mb-4 rounded-lg border bg-white p-4">
                <div className="mb-2 text-sm text-gray-500">
                    От: {appeal.clientName} · {message.createdAt} · {message.authorType}
                    <div className="text-pink-800 mt-2">
                    <p>"{message.message}"</p>
                    </div>
                </div>
            </div>
        ))}
        </div>
)
}