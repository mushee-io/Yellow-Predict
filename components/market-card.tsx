import Link from 'next/link';
import { ArrowUpRight, Clock3 } from 'lucide-react';
import { Market } from '@/lib/types';

export function MarketCard({ market }: { market: Market }) {
  return (
    <Link
      href={`/markets#${market.slug}`}
      className="card-noise group rounded-3xl border border-white/10 bg-panel p-6 shadow-glow transition hover:-translate-y-1 hover:border-yellow/30"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="rounded-full border border-yellow/20 bg-yellow/10 px-3 py-1 text-xs text-yellow">
          {market.category}
        </span>
        <span className="text-xs text-white/55">{market.status}</span>
      </div>

      <h3 className="mb-3 text-xl font-semibold leading-tight text-white">{market.title}</h3>
      <p className="mb-6 text-sm leading-6 text-white/65">{market.description}</p>

      <div className="grid grid-cols-2 gap-3 text-sm">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-1 text-white/45">YES</div>
          <div className="text-2xl font-semibold text-yellow">{Math.round(market.yesPrice * 100)}¢</div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="mb-1 text-white/45">NO</div>
          <div className="text-2xl font-semibold text-white">{Math.round(market.noPrice * 100)}¢</div>
        </div>
      </div>

      <div className="mt-5 flex items-center justify-between text-xs text-white/50">
        <div className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> {new Date(market.endDate).toLocaleDateString()}</div>
        <div className="flex items-center gap-2">View market <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></div>
      </div>
    </Link>
  );
}
