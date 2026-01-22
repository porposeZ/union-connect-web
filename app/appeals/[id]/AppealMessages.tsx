"use client"
import { useState } from "react";
import { Appeal, AppealMessage } from "@/src/domain/models";

type AppealMessagesProps = {
    appeal: Appeal;
    messages: AppealMessage[];
}

export default function AppealMessages({appeal, messages}: AppealMessagesProps) {
    const [showInternal, setShowInternal] = useState(false)
    const visibleMessages = showInternal
        ? messages
        : messages.filter((m) => !m.isInternal)

    


    return (
        <div className="min-h-screen bg-zinc-50 p-6 dark:bg-black">
            <h1 className="mb-4 text-xl font-semibold">Обращение #{appeal.number}</h1>
            <h1 className="">Тема: {appeal.theme} </h1>
            <button
                className="rounded-lg border bg-white p-4"
                onClick={() => setShowInternal((prev) => !prev)}
            >
                {showInternal ? "Скрыть внутренние" : "Показать внутренние"}
            </button>

            <h2 className="mb-4 text-lg font-semibold">Сообщения:</h2>
            {visibleMessages.map((message) => (
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
