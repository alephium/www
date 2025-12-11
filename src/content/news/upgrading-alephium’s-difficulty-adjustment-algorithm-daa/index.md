---
title: Upgrading Alephium’s Difficulty Adjustment Algorithm (DAA)
description: "Engineering for resilience: We're upgrading the DAA to ensure
  smoother, more stable mining. Node update required in early Jan. Details
  inside."
seoDescription: Details regarding the DAA upgrade (EMA-inspired) to cap
  penalties, reduce volatility, and future-proof Alephium's PoW consensus. Node
  update required.
date: 2025-12-11T18:30:00.000Z
spotlight: true
featuredImage: tech-6-.png
relatedPosts:
  - july-25-2025-mining-difficulty-penalty-incident-postmortem/index
  - danube-upgrade-one-step-closer-to-the-web3-we-were-promised/index
---
TL;DR We are targeting an activation date in **early January**. The full node will be published once feedback has been collected.

Once the link is live, you only need to update your node. No other changes will be required.

## What are we proposing to improve?

We are proposing an **update of the DAA algorithm**.

The Difficulty Adjustment Algorithm (DAA) is a core mechanism of any Proof-of-Work blockchain. It determines how mining difficulty evolves from block to block to maintain consistent block times, even as network hashrate fluctuates.

The **root of the change** is that **penalties in the current DAA are effectively unbounded** when hashrate distribution changes suddenly. This can lead to disproportionately large difficulty swings.

To address this, we are proposing to introduce a new update mechanism inspired by **Exponential Moving Average (EMA)**, which naturally damps extreme movements while preserving responsiveness to real changes in hashrate.

## Activation Plan

As this is a breaking consensus change, activating the new DAA requires a network upgrade.

A specific **activation timestamp** will be embedded in the updated full-node software. Once the chain reaches this timestamp, nodes will automatically switch to the new DAA.

All full nodes **must upgrade before the activation timestamp**, just as with previous network-wide upgrades.

## Overview of the New DAA Flow

* **Compute the next difficulty** for the target chain using DigiShield V3. Apply a penalty factor if the chain is moving fast relative to others.
* **Compute the average difficulty** across all chains.
* **Blend the chain’s next difficulty with the network average**: new_diff = beta \* average_diff + (1 - beta) \* next_diff * weight
* **Clip the final difficulty** following a similar rule to that in DigiShield V3.

### What this Approach Ensures

* Penalties remain predictable and capped.
* Difficulty adjusts more gradually.
* Individual chains recover faster from abnormal hashrate patterns.

## Simulation Results

We performed extensive simulations covering a range of hashrate dynamics, including:

* A chain suddenly losing a significant portion of its hashrate.
* A large mining pool focusing on a single chain and hopping between chains.

Across all scenarios, the new DAA exhibited **significantly smoother behavior**, with:

* More moderate penalty levels.
* Reduced difficulty volatility.
* Faster convergence back to stable, balanced difficulty across chains.

## **Context:** Why Improve the Current DAA?

Alephium currently uses a multi-chain adaptation of DigiShield V3, which is an algorithm known for balancing robustness and responsiveness and also used by networks like Zcash. 

Beyond standard difficulty adjustment, Alephium’s DAA has an additional responsibility: **encouraging miners to distribute their hashrate evenly across all chains**. This significantly increases the complexity of the design. We also aim for the DAA to remain highly performant so that difficulty adjustment is never a bottleneck for block production.

While the current design generally works as intended, it has one notable drawback: **it is overly sensitive to rapid hashrate shifts**. Under certain extreme scenarios, this sensitivity can lead to aggressive difficulty penalties and sudden difficulty swings across individual chains.

Alephium has encountered this twice:

* **July 25, 2025**: A major mining pool concentrated most of its hashrate on a single chain, then began hopping randomly across chains, triggering penalties of more than 20×.
* **November 5, 2025**: A single chain unexpectedly lost a large portion of its hashrate, again resulting in penalties of more than 10×.

In both incidents, the existing DAA eventually restored difficulty levels to normal within hours (automatically), but the process was harsher and less stable than desired.

These experiences motivated the core devs to design a more resilient and smoother DAA, one that remains robust during “unhappy cases” and still applies penalties when necessary, but avoids unbounded and destabilizing corrections.

**Before the node is live and the link is shared, don’t hesitate to share your feedback on [Telegram](https://t.me/alephiumgroup) or [Discord](https://alephium.org/discord).**
