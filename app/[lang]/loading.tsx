export default function Loading() {
  return (
    <div className="section-shell">
      <div className="site-container">
        <div className="surface-card animate-pulse p-8">
          <div className="h-4 w-24 rounded bg-zinc-800" />
          <div className="mt-4 h-10 w-2/3 rounded bg-zinc-900" />
          <div className="mt-4 h-6 w-full rounded bg-zinc-900" />
          <div className="mt-2 h-6 w-5/6 rounded bg-zinc-900" />
        </div>
      </div>
    </div>
  );
}
