import { Market } from '@/lib/types';

export const markets: Market[] = [
  {
    id: '1',
    slug: 'btc-150k-2026',
    title: 'Will BTC close above $150k by Dec 31, 2026?',
    description: 'A flagship crypto macro market for power users pricing long-range conviction.',
    category: 'Crypto',
    endDate: '2026-12-31T23:59:00Z',
    yesPrice: 0.63,
    noPrice: 0.37,
    volume: '$182,400',
    liquidity: '$58,000',
    status: 'Live',
    resolutionSource: 'Coinbase BTC/USD daily close'
  },
  {
    id: '2',
    slug: 'yellow-mainnet-integration-q4',
    title: 'Will Yellow settlement be integrated before Q4 2026?',
    description: 'A market designed around roadmap delivery and ecosystem execution.',
    category: 'Ecosystem',
    endDate: '2026-09-30T23:59:00Z',
    yesPrice: 0.46,
    noPrice: 0.54,
    volume: '$74,900',
    liquidity: '$31,500',
    status: 'Live',
    resolutionSource: 'Public mainnet release / official integration announcement'
  },
  {
    id: '3',
    slug: 'polygon-usdc-5b-volume',
    title: 'Will Polygon USDC monthly settlement exceed $5B this year?',
    description: 'A network-activity market aimed at active ecosystem participants.',
    category: 'Macro',
    endDate: '2026-12-15T23:59:00Z',
    yesPrice: 0.57,
    noPrice: 0.43,
    volume: '$95,250',
    liquidity: '$41,200',
    status: 'Closing Soon',
    resolutionSource: 'Public onchain analytics dashboard'
  }
];
