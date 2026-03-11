export type MarketStatus = 'Live' | 'Closing Soon' | 'Resolved';

export type Market = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: 'Crypto' | 'Ecosystem' | 'Macro';
  endDate: string;
  yesPrice: number;
  noPrice: number;
  volume: string;
  liquidity: string;
  status: MarketStatus;
  resolutionSource: string;
};
