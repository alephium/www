---
date: 2022-09-20T14:05:54.857000Z
description: A Technical Promenade, part 3
spotlight: false
featuredImage: image_1a832ca4ff.jpg
title: Time to Finality
---
A Technical Promenade, part 3

_This is part of a series of regular articles on key concepts for understanding [Alephium](/) in particular and blockchains in general. If you’re pondering on which chain to build your dApps, if you’re a curious crypto-traveler, or a fellow decentralization enthusiast, welcome!_

In our last [post,](/news/post/transactions-per-second-tps-f13217a49e39) we dove into the Transactions Per Second (TPS) definition & mathematics! Now we will explore the **Time To Finality (TTF)** metric. Despite not having a rocket science formula to calculate it, this is a key value for the financial transfer aspect of blockchain transactions.

### What is Time to Finality (TTF)?

![](image_1a832ca4ff.jpg)

Like Orpheus, leading Eurydice out of hell… it’s not done, until it’s done! Do not turn around too soon! Here a sublime painting from Jean-Baptiste Camille Corot (1796–1875), Orphée ramenant Eurydice des enfers, 1861

If you look at what we’ve been talking about so far, we’re slowly going down the rabbit hole of how blocks are added to other blocks at specific intervals of time (the block-chain) and how fast transactions are put into those blocks… But we haven’t discussed what happens to those transactions once they have been included in a block. Are they done? Can we forget and get to the next one right away? Can I spend what I received immediately, or do I have to wait? Can it be reversed?

_“In finance, the term “finality of payment” refers to the moment at which funds, recently transferred from one account to another, officially become the legal property of the receiving party.”_ according to [investopedia](https://www.investopedia.com/terms/f/finality-of-payment.asp). It’s a key concept for merchants, for example, so that they are sure that your payment cannot be reversed once they have sent you your order! It’s also a “relative” concept: you don’t need the same assurance of finality for a transaction of a few bucks that pays for coffee (you can just leave the coins on the table and go) as for a transaction of a few million to pay for your house (you need a notary & a bank to confirm the transaction has happened!), or for an IPO or a merger (you need a bazillion lawyers, many banks and other intermediaries!).

In crypto, finality is “[the assurance or guarantee that cryptocurrency transactions cannot be altered, reversed, or canceled after they are completed.](https://academy.binance.com/en/glossary/finality)”. So it’s not really enough that your transaction went through and is legitimate (for example, that it is not a [double spend](https://en.wikipedia.org/wiki/Double-spending)), it also has to become **immutable and final.** This is the reason most exchanges will wait for a few blocks before accepting your deposit. They want to be sure that the transaction is not going to be rolled back and that they effectively and definitely dispose of the funds before they allow you to trade.

This time between the moment your transaction is submitted to the network and the moment it’s considered final is called **time-to-finality** (which is really a fancy way of talking of _latency_), and it’s [a much more accurate representation of “speed” in a blockchain](https://fantom.foundation/blog/tps-or-ttf-understanding-blockchain-speed/#:~:text=Time%2Dto%2Dfinality%20%28TTF,analog%20to%20latency%20in%20networking.). Because what good is a blockchain that does millions of transactions per second but cannot get you finality fast enough?

There are two main categories of finality: probabilistic finality and deterministic finality.

Most blockchain systems offer **probabilistic transaction finality** — this means that the probability that a transaction is valid and cannot be reversed **increases** with the addition of more blocks on the chain, but it’s never absolutely final. The network agrees that the transaction is **final with enough time and blocks**. For example, Finality generally requires six confirmations on Bitcoin. That gives you a very strong probability (hence “probabilistic”) that your transaction is final. Most 1st generation blockchains only offer this kind of finality. The goal is to ensure that your transactions have effectively been included in the longest chain and [that the blockchain has not forked](https://dashcore.readme.io/docs/core-guide-block-chain-block-height-and-forking)!

Other blockchains use a **deterministic transaction finality** (sometimes called absolute finality) — this means that the transaction is considered final when it is added to the blockchain. This allows these protocols to display much faster time-to-finality and has to do with their consensus algorithm.

![](image_8c2f3341fc.jpg)

The Battle of Bulgarophygon where the Byzantine’s army was exterminated… did it not solve for the [Byzantine General Problem](https://en.wikipedia.org/wiki/Byzantine_fault) properly? Unknown artist

If you want an in-depth explanation of the technical differences between the two kinds of finality, head over [there](https://medium.com/mechanism-labs/finality-in-blockchain-consensus-d1f83c120a9a) or go right for the Mariana-trenches-depth of the various flavors of the [Byzantine General Problem](https://en.wikipedia.org/wiki/Byzantine_fault) [proposed](https://medium.com/@crytpol_25852/asynchronous-byzantine-fault-tolerance-a-time-independent-future-proof-byzantine-fault-f6f1a4d1f17a) [solutions](https://www.geeksforgeeks.org/practical-byzantine-fault-tolerancepbft/).

In summary, it is desirable not only that a transaction is sent as fast as possible but also that it is valid and reaches finality fast and securely. That’s why the **time to finality (TTF)** is also an interesting metric for network comparisons since it measures the time from transaction submission to confirmation with a guarantee of irreversibility.

### Next step: “How to increase the network throughput?”

A blockchain throughput has limits set by the metrics we discussed so far: the block’s size, frequency, the network ability to put the transactions in these said blocks, and so on… In the next article, we will discuss strategies to increase the throughput and explain in more detail one of them: Sharding!

Stay tuned on our [Twitter](https://twitter.com/alephium), [Discord](https://discord.gg/h7cXXy4FEY), [Telegram](https://t.me/Alephium_Announcement), or [Reddit](https://www.reddit.com/r/Alephium/) to see it fresh off the press!
