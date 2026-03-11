'use client';

import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { polygon } from 'wagmi/chains';

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID || 'demo';

export const config = getDefaultConfig({
  appName: 'Yellow Predict',
  projectId,
  chains: [polygon],
  ssr: true
});
