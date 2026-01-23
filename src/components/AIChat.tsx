export default function AIChat() {
  return (
    <aside className="h-full min-h-screen shrink-0 w-[clamp(280px,30vw,520px)] border-r border-slate-200 p-4">
      <div className="flex flex-col justify-between">

      <div className="text-xs uppercase tracking-wide text-slate-500">AI MODEL</div>

      <input
        type="text"
        className="mt-2 w-full rounded-lg border border-slate-200 p-4"
        placeholder="Введите текст"
        />
        </div>
    </aside>
  );
}
