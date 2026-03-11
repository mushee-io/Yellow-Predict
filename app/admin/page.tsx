export default function AdminPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-4xl font-semibold text-white">Admin panel</h1>
      <p className="mt-4 max-w-3xl text-white/62">This is the clean operational layer for creating markets, setting end times and resolving outcomes before you plug in decentralized oracle resolution.</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-[1.75rem] border border-white/10 bg-panel p-6 card-noise">
          <div className="text-lg font-semibold text-white">Create market</div>
          <div className="mt-5 space-y-4 text-sm">
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Market question" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Resolution source" />
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Close timestamp" />
            <button className="rounded-full bg-yellow px-5 py-3 font-semibold text-black">Deploy from factory</button>
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-panel p-6 card-noise">
          <div className="text-lg font-semibold text-white">Resolve market</div>
          <div className="mt-5 space-y-4 text-sm">
            <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Market address" />
            <select className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none">
              <option>YES</option>
              <option>NO</option>
              <option>INVALID</option>
            </select>
            <textarea className="min-h-28 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" placeholder="Resolution note" />
            <button className="rounded-full border border-yellow/20 bg-yellow/10 px-5 py-3 font-semibold text-yellow">Resolve manually</button>
          </div>
        </div>
      </div>
    </main>
  );
}
