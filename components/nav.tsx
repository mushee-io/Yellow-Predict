'use client';

import Link from 'next/link';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { BarChart3 } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/markets', label: 'Markets' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/admin', label: 'Admin' }
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-wide text-yellow">
          <span className="yellow-dot h-2.5 w-2.5 rounded-full bg-yellow" />
          <span className="text-lg text-white">Yellow Predict</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-white/75 transition hover:text-white">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-yellow/20 bg-yellow/10 px-3 py-2 text-xs text-yellow md:flex">
            <BarChart3 className="h-4 w-4" /> Polygon Mainnet
          </div>
          <ConnectButton />
        </div>
      </div>
    </header>
  );
}
