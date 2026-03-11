# Yellow Predict — Polygon-first Prediction Market

A polished, dark premium MVP for a yes/no prediction market launching on Polygon mainnet first, with a later migration path into Yellow-powered settlement.

## What is included

- Next.js 14 app router frontend
- RainbowKit + wagmi Polygon wallet setup
- Dark black/yellow premium landing page
- Markets page, portfolio page and admin page
- Solidity MVP contracts:
  - `contracts/MarketFactory.sol`
  - `contracts/PredictionMarket.sol`
- Environment template for Vercel deployment

## Mainnet-first approach

This starter is shaped for Polygon mainnet, using USDC as the collateral asset for the MVP.

## Before deploying

1. Copy `.env.example` to `.env.local`
2. Set your WalletConnect Project ID
3. Set the treasury and factory addresses after deployment
4. Install dependencies

```bash
npm install
npm run dev
```

## Recommended next steps

1. Deploy `MarketFactory.sol` with Polygon USDC as collateral
2. Connect frontend trade buttons to contract write calls
3. Add viem contract hooks for market reads
4. Add indexer/subgraph for live positions and history
5. Start with admin/manual resolution
6. Add oracle-based resolution later

## Polygon mainnet addresses to wire

- Polygon chain id: `137`
- Polygon native token: `MATIC` / `POL` depending on wallet display
- Polygon USDC address: verify current official address before production use

## Honesty note

This package is a clean deployable frontend starter plus Solidity MVP contract base. It is not a finished exchange engine yet. The trade ticket UI is present, and the contract foundation is present, but contract write integration, indexing, access control hardening, oracle resolution and production security review still need to be completed before real funds should touch it.
