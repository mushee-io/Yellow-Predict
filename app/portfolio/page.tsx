const positions = [
  { market: 'BTC > $150k by Dec 31, 2026', side: 'YES', avgPrice: '58¢', size: '$1,100', pnl: '+$94' },
  { market: 'Yellow settlement integrated before Q4 2026', side: 'NO', avgPrice: '49¢', size: '$600', pnl: '-$22' }
];

export default function PortfolioPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-semibold text-white">Portfolio</h1>
      <p className="mt-4 text-white/62">Mock portfolio UI for the MVP. Replace with user positions pulled from subgraph, indexer or direct reads.</p>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-[1.75rem] border border-white/10 bg-panel p-6"><div className="text-sm text-white/45">Total exposure</div><div className="mt-3 text-3xl text-white">$1,700</div></div>
        <div className="rounded-[1.75rem] border border-white/10 bg-panel p-6"><div className="text-sm text-white/45">Open PnL</div><div className="mt-3 text-3xl text-yellow">+$72</div></div>
        <div className="rounded-[1.75rem] border border-white/10 bg-panel p-6"><div className="text-sm text-white/45">Claimable</div><div className="mt-3 text-3xl text-white">$0</div></div>
      </div>

      <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-panel">
        <table className="w-full text-left text-sm text-white/75">
          <thead className="bg-white/5 text-white/45">
            <tr>
              <th className="px-5 py-4">Market</th>
              <th className="px-5 py-4">Side</th>
              <th className="px-5 py-4">Avg price</th>
              <th className="px-5 py-4">Position</th>
              <th className="px-5 py-4">PnL</th>
            </tr>
          </thead>
          <tbody>
            {positions.map((position) => (
              <tr key={position.market} className="border-t border-white/10">
                <td className="px-5 py-4">{position.market}</td>
                <td className="px-5 py-4">{position.side}</td>
                <td className="px-5 py-4">{position.avgPrice}</td>
                <td className="px-5 py-4">{position.size}</td>
                <td className="px-5 py-4 text-yellow">{position.pnl}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
