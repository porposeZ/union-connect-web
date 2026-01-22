import { appealsMocks, appealMessageMocks } from "@/src/mocks/articles"
import { notFound } from "next/navigation";
import AppealMessages from "./AppealMessages";

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
    const { id } = await params;
    const appeal = appealsMocks.find((appeal) => appeal.id === id)
    if (!appeal) {
        return notFound();
    }
    const messages = appealMessageMocks.filter((m) => m.appealId === appeal.id)
    .sort(
    (a, b) => parseRuDateTime(a.createdAt) - parseRuDateTime(b.createdAt)
    )
    
    return (
        <AppealMessages appeal={appeal} messages={messages}/>
    )
}
