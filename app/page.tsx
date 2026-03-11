import Link from 'next/link';
import { ArrowRight, ShieldCheck, TimerReset, Wallet2, Waves } from 'lucide-react';
import { MarketCard } from '@/components/market-card';
import { SectionTitle } from '@/components/section-title';
import { markets } from '@/lib/markets';

const features = [
  { title: 'Polygon mainnet first', copy: 'Launch with familiar EVM rails and real USDC flows from day one.', icon: Wallet2 },
  { title: 'Simple yes / no markets', copy: 'Tight market structure keeps the UX clean and the smart contracts easier to ship.', icon: TimerReset },
  { title: 'Oracle-ready architecture', copy: 'Start with admin resolution, then plug into decentralized resolution later.', icon: ShieldCheck },
  { title: 'Yellow-ready roadmap', copy: 'Move toward faster trading and settlement once usage patterns are proven.', icon: Waves }
];

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-24 pt-10">
      <section className="relative overflow-hidden rounded-[2rem] border border-yellow/20 bg-grid-fade bg-[size:auto,42px_42px,42px_42px] bg-[position:center,center,center] px-7 py-10 shadow-glow md:px-12 md:py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow/10 via-transparent to-transparent" />
        <div className="relative grid gap-12 md:grid-cols-[1.2fr_.8fr] md:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow/20 bg-yellow/10 px-4 py-2 text-xs uppercase tracking-[0.25em] text-yellow/90">
              Polygon mainnet • Unique • Simple
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
              A prediction market built to feel <span className="text-yellow">premium</span>, fast and inevitable.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">
              Yellow Predict is a sleek Polygon-first prediction market for crypto-native questions, real capital formation and a future path into Yellow-powered settlement.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/markets" className="inline-flex items-center gap-2 rounded-full bg-yellow px-6 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px]">
                Explore live markets <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/admin" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-yellow/30 hover:text-yellow">
                Open admin flow
              </Link>
            </div>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-black/40 p-6 backdrop-blur">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="mb-2 text-xs uppercase tracking-[0.22em] text-white/45">Signature market</div>
              <div className="text-2xl font-semibold text-white">BTC &gt; $150k by Dec 31, 2026</div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-yellow p-4 text-black">
                  <div className="text-xs uppercase tracking-[0.18em]">Yes</div>
                  <div className="mt-1 text-3xl font-semibold">63¢</div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
                  <div className="text-xs uppercase tracking-[0.18em] text-white/55">No</div>
                  <div className="mt-1 text-3xl font-semibold">37¢</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-white/65">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-white/40">24h volume</div><div className="mt-2 text-xl text-white">$182.4k</div></div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-white/40">Liquidity</div><div className="mt-2 text-xl text-white">$58k</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-24">
        <SectionTitle
          eyebrow="Live now"
          title="Markets with a sharp, crypto-native edge"
          copy="Focused categories, strong signal, polished interface. Start narrow, own the niche and scale the rails later."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {markets.map((market) => <MarketCard key={market.id} market={market} />)}
        </div>
      </section>

      <section className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div key={feature.title} className="rounded-[1.75rem] border border-white/10 bg-panel p-6 card-noise">
              <div className="mb-4 inline-flex rounded-2xl border border-yellow/20 bg-yellow/10 p-3 text-yellow"><Icon className="h-5 w-5" /></div>
              <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/62">{feature.copy}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
}
