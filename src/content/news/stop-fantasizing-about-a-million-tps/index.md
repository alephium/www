---
title: Stop Fantasizing About a Million TPS
description: Carla, Alephium's Head of Ecosystem, argues chasing 1M TPS is
  useless hype. True blockchain scaling balances throughput with security and
  decentralization.
seoDescription: Carla, Alephium's Head of Ecosystem, argues chasing 1M TPS is
  useless hype. True blockchain scaling balances throughput with security and
  decentralization.
date: 2025-10-10T19:00:00.000Z
spotlight: true
featuredImage: article-tps.png
relatedPosts:
  - do-we-really-need-more-centralized-l1s/index
  - the-nakamoto-coefficient-a-horoscope-metric-for-blockchains/index
---
Op-ed by **[Carla](www.x.com/carlitacrypto_)**, Head of Ecosystem, Alephium

**Hello and welcome! This is the first column article from Carla, our new Head of Ecosystem. She’ll be using her vast experience in the blockchain industry to explore important topics and discussions.**

*Note: The views and opinions expressed in this column are those of the author and may not reflect the official stance of Alephium.*

- - -

*TL;DR: Higher TPS (transactions per second) doesn’t automatically mean a better blockchain. True scalability is a balance of throughput **and** security **and** decentralization. Instead of chasing absurd TPS claims for bragging rights, we should build for real-world use today and grow capacity as needed.*

Lately, I’ve noticed an obsession in crypto with reaching ever-higher TPS numbers. Every new project seems to tout some eye-popping figure. 20,000 TPS, 65,000 TPS, even **1,000,000 TPS**. 

It’s as if *bigger number = better blockchain*, full stop. But as a French person who values practicality (and maybe a bit of healthy skepticism), I have to ask: **do we really need a million TPS right now?** Probably not. Today I’ll explain why.

## The TPS Race: Bigger, Faster… Better?

There’s a huge misconception about TPS. Many people still think “TPS = blockchain speed.” That’s simply wrong. TPS measures the **capacity** of a network (how many transactions it can handle per second), not how fast it feels for users. 

As long as the network isn’t saturated, whether it’s 1,000, 20,000 or 1M TPS doesn’t change the user experience. What really matters is **confirmation time and finality**.

Bitcoin and Ethereum felt slow not just because of low TPS, but because they hit their capacity limit, causing congestion and delays. If a network isn’t even close to full, which is true for 99% of blockchains today, adding millions of TPS doesn’t make it feel faster. It’s a **marketing mirage**.

TPS has become the crypto equivalent of **horsepower in cars or megapixels in cameras**: an easy spec to brag about. Projects compete to wow with the biggest number. 

Alephium is often cited around **20,000+ TPS** with sharding, Solana has boasted **65,000+ TPS**, and others claim even more. Sure, throughput matters if a network is congested. But chasing TPS for the sake of headlines leads to **spec sheet obsession** and sometimes misleading claims.

Crypto researcher[ Justin Bons](https://x.com/Justin_Bons/status/1755996514303242478) has called out *“fake TPS metrics”* from major platforms like Solana and Cardano. Solana’s famous 65,000 TPS is far above what it achieves in practice; the estimated real user transactions are tens of hundreds, not tens of thousands ([source](https://chainspect.app/chain/solana?range-cm=month)). 

Cardano’s often-quoted “477 TPS theoretical max” drops to ~18 TPS once you factor current block size and timing; at some points, real usage has been **<1-2 TPS** ([source](https://cexplorer.io/tps)). Counting multiple outputs per transaction as “transactions” or ignoring network bottlenecks makes the number look better than reality.

Beyond the marketing games, remember why blockchains wanted high TPS in the first place: to handle **real demand**. Realistically speaking, **most networks aren’t even close to full.**

* Ethereum processes \~1.3–1.5M transactions/day (\~15 TPS) ([source](https://etherscan.io/chart/tx)).
* Solana handles under 4,000 user TPS on average ([source](https://explorer.solana.com/)).
* Cardano < 1-2 TPS ([source](https://cexplorer.io/tps)).

So, why fantasize about 1M TPS? It’s like bragging about your sportscar’s top speed when you spend all day stuck in traffic.

**Do We Even Need a Million TPS Today?**

Let’s add perspective: **VisaNet, the global payments network operated by Visa, can handle up to ~65,000 transaction messages per second, worldwide** ([Visa Fact Sheet](https://www.visa.co.uk/dam/VCOM/download/corporate/media/visanet-technology/aboutvisafactsheet.pdf)). Real usage is far lower. Visa processed ~233.8 billion transactions in 2024 ([Annual Report](https://annualreport.visa.com/financials/default.aspx)), averaging ~7,400 TPS, with everyday estimates ranging **1,700–8,500 TPS**.

So, while Visa’s **capacity** is impressive, its *sustained* throughput is modest. If billions of people someday use crypto daily, we might eventually need hundreds of thousands of TPS, but **not today**. Building a chain for 1M TPS now is like laying a ten-lane highway for a small town. Expensive and mostly empty.

Worse, overbuilding can **invite attacks**. Huge unused capacity becomes an easy target for spam and stress tests. Solana’s 2021/2022 outages happened when bot traffic flooded the network. Speed means nothing if the network **crashes under load**.

The good news: **capacity isn’t static.** Networks can scale gradually.

* Ethereum grows with rollups and will add sharding when needed.
* Other chains can increase block space or shard count step by step.

It’s smarter to **match supply to real demand**, keep headroom, and scale as adoption grows, rather than overbuilding for a future that just isn’t here yet.

**Speed *at What Cost?* (Security and Decentralization)**

High TPS numbers often come with trade-offs.

* **Centralization:** Many “fast” chains rely on fewer, more powerful nodes. EOS famously still has just 21 block producers. Solana’s hardware requirements mean ~900-1000 validators vs. more than one million on Ethereum. Fewer nodes = easier to censor or attack.
* **Security & Stability:** Bigger blocks and shorter confirmation times make networks harder to validate. Solana’s outages show what happens when high throughput meets real-world load.
* **Meaningless Metrics:** Inflated lab numbers create hype but mislead users and devs. I know this firsthand, after years of running a [YouTube channel](https://www.youtube.com/c/Carlitacrypto), I’ve repeated flashy TPS claims only to learn later how disconnected they were from reality. It can even **discourage builders** who feel pressured to chase unrealistic benchmarks instead of solving user problems.

A truly scalable chain balances **speed, security, and decentralization**. Otherwise, you end up fast but fragile or with “high throughput” that is controlled by a few insiders. Better to grow steadily and securely than to sprint and stumble.

**Build for Today, Prepare for Tomorrow**

Instead of dreaming about 1M TPS, let’s build **sustainable scalability**. That means capacity for *today’s* demand, and the ability to **expand when real usage appears**.

Ethereum illustrates this best. It didn’t just crank block sizes to match Solana. That would have hurt decentralization. Instead, it took a layered approach, secure L1, rollups for volume, sharding later. Slow? Maybe. But it protected **security and decentralization**. That’s more important.

At **Alephium**, we follow a similar philosophy. Our sharded Proof-of-Work design (BlockFlow) already reaches **20,000+ TPS,** but the key is we aim to do it **without sacrificing decentralization or security.** 

If demand grows, the network can add shards and scale out. We chose PoW with our energy-efficient twist (PoLW) and a UTXO model because they’re **battle-tested**. It’s not about chasing a headline; it’s about building a network that can **endure and grow safely**.

**Scaling When It Counts (Not for Clout)**

TPS alone doesn’t equal success. Real adoption will come from **reliability, security, and developer experience**, not just raw speed.

Next time someone shouts “We can do a million TPS!”, ask:

* **Who needs it today?**
* **At what cost?** (security, decentralization?)
* **Can you verify it yourself?** (or does it require datacenter-level hardware?)

Scalability is a **journey, not a number**. Build roads as the city grows; don’t pour concrete in the desert hoping people show up.

Chasing a million TPS might look chic, but voilà, in practice it’s useless without demand.
