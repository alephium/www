---
date: 2022-08-30T12:53:03.942000Z
description: A Technical Promenade, part 1
spotlight: false
featuredImage: image_2e664b2caf.png
title: Block Time and Block Size
---
A Technical Promenade, part 1

> This is the first of a multiple-times-per-month series of articles on key concepts for understanding Alephium in particular and blockchains in general if you’re pondering on which chain to build your dApps, if you’re a curious crypto-traveler or a fellow decentralization enthusiast, welcome! We will start with simple concepts like block time and size, then travel through transactions-per-second, wander around time-to-finality, and venture into sharding land and so many other fascinating crypto territories…

Today, we’re starting this path at the beginning, with fundamental concepts like block time and block size. And as you’ll see, there’s nothing basic about these…

A lot of chains make very different choices on these parameters, and that has deep implications down the line. Whether these are security tradeoffs or usability issues, it’s important to start at the beginning, so here we go…

#### TL;DR

**Block time** in a blockchain is what it takes for a block to be checked by the miners (or validators on PoS blockchains). In Alephium, this is set to 6̶4̶ ̶s̶e̶c̶o̶n̶d̶s̶ \* **16 seconds.**

_\* With the introduction of the_ [Rhône Network Upgrade](/news/post/rh-ne-network-upgrade-activated-cbeb298585fe), _the block time was reduced to 16 seconds. That was possible with the adoption of the Ghost algorithm, and it is translated into an enhanced user experience._

**Block size** can be measured in two ways: It refers to the total **amount of data** in the block, or the **maximal computational power (gas)** each block can handle.

### What is Block Time ?

![](image_77bad79c4b.jpeg)

One way to look at the Mempool: The Disintegration of the Persistence of Memory by Dali

When a user does a transaction from his wallet, it is first broadcasted to the network, where a full node picks it up, checks for validity, and adds it into the mempool, where it is still unconfirmed. And then, two things can happen: either it expires without being confirmed because most blockchains have an expiry time for transactions to be picked up and confirmed, or it gets picked up by a block producer to be confirmed.

Transactions are gathered inside a block and checked by the miners (or validators on PoS blockchains). The time this takes is called **Block Time**. On Bitcoin, the Average Block Time is 10 minutes, but the actual block time can vary due to sudden variations in the available hash rate (if many miners join or leave the network). Therefore, [mining difficulty adjusts to compensate for the variation in hash rate](https://www.blockchain.com/charts/difficulty), aiming to maintain an expected block time of 10’. But it can take a while because the difficulty is only adjusted roughly every two weeks… This explains why when the Chinese government banned Bitcoin mining last year, the average block time exploded to [more than 23 minutes on June 27th, 2021!](https://cryptoslate.com/bitcoin-block-times-hit-lowest-point-in-10-years-after-china-mining-ban/)

In Zcash, block time is 75 seconds, and difficulty is adjusted after every block to account for available hashing power and keep blocks churning at a regular pace. Alephium works the same way in that regard, with difficulty adjusting every block, and has and has an **expected block time of 16 seconds.**

In PoS, Block Time is defined much more directly and has nothing to do with difficulty. For example, in [Ethereum PoS](https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/) (post-merge), “slots” are 12 seconds time intervals in epochs composed of 32 slots: _“in every slot, a committee of validators is randomly chosen, whose votes are used to determine the validity of the block being proposed.”_ And that’s it!

### What is Block Size?

![](image_63eb791c84.png)

A visual representation of a block by César Baldaccini, Compression of silver-plated metal cutlery sculpture

**Block size** is measured in different ways. For some coins, it’s defined by the number of transactions it can hold expressed in MegaBytes (Bitcoin is 1MB, Zcash is 2MB…). That means that the total **amount of data** in the block cannot exceed a specific limit. The bigger the block, the more transactions…

This is not as trivial as one may think, as it has deep political and network decentralization implications and has been the cause of the gigantic [Bitcoin Blocksize War](https://blog.bitmex.com/the-blocksize-war-chapter-1-first-strike/)!

For other coins (ETH, for example), it’s calculated differently: Block size refers to the **maximal computational power (gas)** each block can handle. Complex transactions require more gas, and simpler token transfers require less. Gas is expressed (and paid) in the native currency of the network. The limit represents a maximum in terms of computational power and not in terms of a strictly measured “data amount.” Alephium follows a similar model, where the block size is indeed a gas limit for the whole block’s transactions together.

And then you have a lot of other ways of doing things… For example, Monero has a dynamic block size, Cardano regularly increases its block size as “updates” to the network ([currently at 88Kb](https://twitter.com/InputOutputHK/status/1518596128056520707)), [Mina has 1kb “blocks](https://masked.medium.com/the-coda-protocol-bbcb4b212b13),” etc.

### That’s it for today… Where to next?

In part 2, coming later this month, since we now understand the frequency of blocks and the number of transactions they can contain, we are ready to calculate transaction velocity!

Our next article will cover [TPS (Transactions Per Second).](/news/post/transactions-per-second-tps-f13217a49e39) Stay tuned on our [Twitter](https://twitter.com/alephium), [Discord](https://discord.gg/h7cXXy4FEY), [Telegram](https://t.me/Alephium_Announcement), or [Reddit](https://www.reddit.com/r/Alephium/) to see it fresh off the press!
