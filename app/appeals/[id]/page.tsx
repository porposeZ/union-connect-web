import { appealsMocks, appealMessageMocks } from "@/src/mocks/articles"
import { notFound } from "next/navigation";

export default function AppealPage({
    params,
}: {
    params: { id: string };
}) {
    const {id} = params;
    const appeal = appealsMocks.find((appeal) => appeal.id === id)
    if (!appeal) {
        return notFound();
    }
    const messages = appealMessageMocks.filter((m) => m.appealId === appeal.id);

    return (
    <div className="min-h-screen bg-zinc-50 p-6 dark:bg-black">
        <h1 className="mb-4 text-xl font-semibold">Обращение #{appeal.number}</h1>
        <h1 className="">Тема: {appeal.theme} </h1>
        <h2 className="mb-4 text-lg font-semibold">Сообщения:</h2>
        {messages.map((message) => (
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