---
title: "Danube Upgrade: Everything You Need to Know + FAQ"
description: Learn everything you need to know about the Danube Upgrade on
  Alephium, including comprehensive FAQ and details about the major network
  upgrade activated on July 15, 2025.
seoDescription: Alephium Danube Upgrade FAQ - everything you need to know about
  major network upgrade. Comprehensive guide to July 15, 2025 activation.
date: 2025-07-16T12:00:00.000Z
spotlight: false
featuredImage: danube3.webp
---
> Updated on October 1, 2025, to better reflect the state of the technology.

After a year of building, we are proud to announce that the Danube network upgrade was activated on July 15, 2025, at 12:00 GMT+02:00.

Building on the momentum of previous upgrades like Leman and Rhone, Danube introduces major performance and usability improvements while preserving our core principles of decentralization, security, and energy efficiency. From faster block times and invisible sharding to seedless wallet onboarding and advanced smart contract tooling, Danube represents a significant leap forward in Web3 accessibility.

Whether you’re a developer, a miner, or just a curious community member, this FAQ will help you understand what Danube brings and what it unlocks for the future of the ecosystem.

## Quick Overview

**What is the Danube Upgrade?**

Danube is Alephium’s third major network upgrade, focused on:

* Faster block times
* Simplified user interactions
* Developer-centric improvements
* Long-term scalability and performance

**When did the Danube go live on the mainnet?**

The Danube upgrade activation went live on Tuesday, July 15, 2025, at 12:00 GMT+02:00.

**Why “Danube”?**

Following Alephium’s naming convention, all network upgrades are named after bodies of water. Danube follows Leman and Rhone.

## Upgrade Instructions for Node Operators

All node operators should have updated to v4.0.0 **before July 15th** to ensure uninterrupted participation in the network. If you haven’t already done so, please do it as soon as possible.

* **Node version required:** [Download the latest node](https://github.com/alephium/alephium/releases/latest)
* **Upgrade instructions:** [Danube Upgrade Docs](https://docs.alephium.org/integration/danube-upgrade/)

## What Comes With Danube

### 1. 8-Second Block Time

Block time has been halved from 16 seconds to 8, drastically improving responsiveness and UX.

### 2. Groupless Addresses

Alephium’s sharded architecture used to require users to interact with dApps from a specific group. With groupless addresses, this complexity is completely abstracted away, delivering a single-chain experience.

### 3. Passkey Support

Danube adds native support for passkeys, a modern, secure, and passwordless way to interact with blockchain apps, especially useful for embedded wallets and web apps.

### 4. Chained Contract Calls

Developers can now chain multiple contract calls at the TxScript level and use transaction callers’ asset outputs, enabling new patterns like liquidity migration or atomic token swaps.

### 5. Built-in Unit Testing

Ralph now supports unit tests natively, making it easier to test contract logic during development.

### 6. Improved DevX Features

* Auto-funding of dust amounts and deposits
* Better caller identification
* New address types, including fixed-length groupless multisigs
* Immediate reuse of newly issued assets

### 7. New Sync Protocol (v2)

A completely revamped syncing system delivers 3x faster node sync times, with lower CPU and bandwidth usage. Perfect for node operators and devs.

## Wallet & UX Improvements

### Groupless Wallets

Wallets using groupless addresses can now interact with any dApp without worrying about the underlying shard structure. For new users, this removes a major onboarding hurdle.

### Passkey Integration

Passkeys allow users to create wallets with just a fingerprint or device-based credential. While Alephium Wallet won’t support this at the mainnet launch, SDKs are available and integration is expected soon.

## Tokenomics Changes

### Tail Emission Model

Danube removes the fixed supply cap and introduces a tail emission, aligning Alephium with models used by Monero and Ethereum.

**Why?**

* Resolves perception issues caused by the large gap between circulating and max supply
* Improves miner incentives post-84 years
* Maintains the existing emission schedule for the first 80 years (no short- or medium-term impact)

## DevX Deep Dive

Danube’s improvements are largely driven by developer feedback. Here are some highlights:

### Chain Contract Calls (TxScript level)

* Allows multi-step logic (e.g., swap A→B then B→C) in one transaction
* Assets can be reused within TX scripts, but not in contract bodies, preserving UTXO security guarantees
* Enables safe composability while remaining resistant to flash loans and reentrancy exploits

### Chain Transactions (API level)

* Enables multi-transaction flows, e.g., move funds → interact with dApp
* Used under the hood for groupless address operations
* Wallets display each step clearly; failed TXs do not roll back prior steps

### Developer Ergonomics

* Cleaner syntax for dust and deposit management
* New I256 bitwise operations

## Ecosystem Impact

Danube marks a turning point in what can be built on the Proof of Work chain. With chained contract calls, groupless addresses, and passkey support, we now provide a developer foundation for dApps that feel like Web2 without sacrificing decentralization. These upgrades don’t just tweak UX, they remove complexity entirely.

Developers can now build:

* Multi-step token swaps and liquidity flows using chained contract calls
* Wallet experiences without seed phrases, thanks to passkey support
* Seamless DeFi interfaces, thanks to the invisible sharding provided by groupless addresses
* Richer smart contracts using simplified logic, cleaner scripting, and immediate usage of the newly created assets

While these improvements do not imply that these services exist today, the architecture now fully supports them.

This upgrade also brings significant improvements for infrastructure providers:

* Faster syncs and reduced resource usage via Sync Protocol v2
* Abstracted sharding makes multi-group indexing and UX way simpler
* Tail emission ensures long-term viability for miners and validators

As a result, Danube positions Alephium as a credible Layer 1 alternative, not just to Proof of Stake chains, but also to L2s and rollups. This is also reflected in the fact that over 130 projects are contacted to upgrade their nodes for Danube, up from 50 at the time of the Rhone upgrade, showcasing strong ecosystem growth.

## Community Questions

### 1. What new types of dApps are now possible thanks to chained transactions?

Chained contract calls in TX scripts enable complex flows like multi-step swaps and liquidity migration. These were previously impossible due to strict UTXO rules.

### 2. Can multiple contracts be called in one chained transaction? What about flash loans?

Yes, multiple contracts can be called. However, only outputs from the transaction caller can be reused, and only at the TX script level. Contract-level calls enforce UTXO restrictions, keeping the system resistant to flash loans and free from reentrancy attacks.

### 3. Can I swap token A to B and back to A in a chained TX?

No. A chained transaction can reuse the caller’s outputs, but not outputs from contracts or intermediate states. Full flash-loan-like behavior is prevented.

### 4. Will I256 bitwise ops improve math-heavy app performance?

Yes. Built-in bitwise operators avoid complex Ralph-level simulation and reduce gas usage. This is ideal for NFTs, DeFi, and Merkle proofs.

**And what about dust handling?** Dust, contract deposits, and map entries now have default behaviors. Developers no longer need to manually account for them. Wallets will auto-adjust pre-approvals and retries as needed.

### 5. Can passkey wallets also use a seed phrase as backup?

Not by default. But you can simulate this with multi-sig wallets that use a passkey and a traditional key.

### 6. Which dev tasks are easier after Danube?

* Funding contracts (auto-dust)
* Migrating liquidity (chained calls)
* Writing cleaner Ralph code
* Testing with built-in unit tests
* Integrating a passkey or social login

### 7. Which features didn’t make it into Danube?

* Contract-based token standard
* Fast state sync
* Additional RPC endpoints

These are planned for the next upgrade.

### 8. Will users sign for 1 ALPH + dust or get 1 ALPH — dust?

The dust is added to the signed amount. If 1 ALPH is intended for a contract, the wallet ensures you sign for 1 ALPH + required dust.

### 9. Does auto-dust handling break legacy contracts?

No. The system is backward-compatible. If dust is manually specified, it is respected. Otherwise, it’s auto-handled by the transaction builder.

### 10. Do wallets show chained transaction steps clearly? What if one fails?

Yes. Extension wallets show all steps clearly. Each step is signed as a group. There is no rollback; if step 2 fails, step 1 still executes.

**Is there a risk of race conditions?** Alephium avoids race conditions related to mutable outputs, unlike Cardano’s extended UTXO model. However, like Ethereum, race conditions can still occur at the state level due to shared data dependencies..

### 11. Are passkeys a new way to sign transactions?

Yes. They enable passwordless WebAuthn-style signing. Supported by common browser key managers (Apple, Android, Windows).

**Will Alephium wallets offer the same UX as Apple Wallets?** That depends on the wallet. SDKs and demos are ready. Web-based embedded wallets with passkeys are now possible.

### 12. How will tail emission affect miner rewards long term?

After 80+ years, emissions won’t stop abruptly. A small ongoing emission ensures sustainable miner incentives. It does not impact rewards emissions before the first 80+ years have passed.

### 13. Is chained TX a game-changer for DeFi protocols?

Absolutely. It enables atomic multi-step flows that simplify both UX and contract logic. Previously, devs had to rely on multiple manual transactions.

### 14. What is the safe minimum block time with the current implementation?

8 seconds is the recommended minimum with acceptable uncle rates. Lower times are technically possible, but would require more aggressive protocol changes.

### 15. Any UTXO model changes in Danube?

The core model remains, but usability is improved:

* Automatic dust handling
* Groupless multisigs
* Cleaner contract patterns
* Better output tracking

### 16. How does Sync Protocol V2 improve things for node operators?

* Syncs are 3x faster
* Less CPU and I/O load
* Fewer peer disconnects
* Foundation for fast sync modes coming soon

## What’s Next After Danube?

Some features were postponed to the next network upgrade to keep Danube from growing too large:

* **Contract token standard**
* **Further block time reduction**
* **Fast state sync**
* **More dev-focused SDKs & demos**

The dev team will also shift more focus toward ecosystem support and tooling, given the maturity of Alephium’s protocol base. The Danube upgrade lays the foundation for deeper interoperability and strong dApps in future cycles.

## Final Thoughts

The Danube upgrade marks a pivotal moment in Alephium’s evolution, from an experimental proof-of-work chain into a scalable, developer-friendly smart contract platform ready for mainstream DeFi adoption.

Whether you’re building dApps, running nodes, or just exploring the space, this upgrade brings smoother workflows, faster interactions, and fewer trade-offs. Visit [alephium.org](/) to learn more about Alephium and join us in building the Web3 you were promised!

## Have questions?

*Join the discussion on Discord or follow[ @alephium](https://twitter.com/alephium) for real-time updates.*

*Let’s build the Web3 you were promised.*
