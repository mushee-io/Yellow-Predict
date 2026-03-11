import { markets } from '@/lib/markets';

export default function MarketsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 max-w-2xl">
        <div className="text-sm uppercase tracking-[0.28em] text-yellow/80">Markets</div>
        <h1 className="mt-3 text-4xl font-semibold text-white">A simple yes / no market board on Polygon.</h1>
        <p className="mt-4 text-white/62">This page is wired as the MVP market grid. Hook it to your contracts or indexer once the factory is deployed.</p>
      </div>

      <div className="space-y-5">
        {markets.map((market) => (
          <section id={market.slug} key={market.id} className="grid gap-6 rounded-[2rem] border border-white/10 bg-panel p-7 card-noise md:grid-cols-[1.2fr_.8fr]">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-3 text-xs">
                <span className="rounded-full border border-yellow/20 bg-yellow/10 px-3 py-1 text-yellow">{market.category}</span>
                <span className="text-white/45">{market.status}</span>
              </div>
              <h2 className="text-2xl font-semibold text-white">{market.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/65">{market.description}</p>
              <div className="mt-5 grid gap-3 text-sm text-white/60 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-white/35">Volume</div><div className="mt-1 text-white">{market.volume}</div></div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-white/35">Liquidity</div><div className="mt-1 text-white">{market.liquidity}</div></div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-white/35">Resolution</div><div className="mt-1 text-white">{market.resolutionSource}</div></div>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-yellow/20 bg-black/40 p-5">
              <div className="mb-4 text-sm text-white/45">Trade ticket</div>
              <div className="grid grid-cols-2 gap-3">
                <button className="rounded-2xl bg-yellow px-4 py-5 text-left text-black transition hover:translate-y-[-1px]">
                  <div className="text-xs uppercase tracking-[0.18em]">Buy yes</div>
                  <div className="mt-2 text-3xl font-semibold">{Math.round(market.yesPrice * 100)}¢</div>
                </button>
                <button className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 text-left text-white transition hover:border-white/20">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/55">Buy no</div>
                  <div className="mt-2 text-3xl font-semibold">{Math.round(market.noPrice * 100)}¢</div>
                </button>
              </div>
              <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/62">
                Polygon USDC only for MVP. Manual/admin resolution first, oracle upgrade next.
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
