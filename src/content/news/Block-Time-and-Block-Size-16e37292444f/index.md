---
date: 2022-08-30T12:53:03.942000Z
description: A Technical Promenade, part 1
spotlight: false
featuredImage: image_2e664b2caf.png
title: Block Time and Block Size
---

#### A Technical Promenade, part 1

> This is the first of a multiple-times-per-month series of articles on key concepts for understanding Alephium in particular and blockchains in general if you’re pondering on which chain to build your dApps, if you’re a curious crypto-traveler or a fellow decentralization enthusiast, welcome! We will start with simple concepts like block time and size, then travel through transactions-per-second, wander around time-to-finality, and venture into sharding land and so many other fascinating crypto territories…

Today, we’re starting this path at the beginning, with fundamental concepts like block time and block size. And as you’ll see, there’s nothing basic about these…

A lot of chains make very different choices on these parameters, and that has deep implications down the line. Whether these are security tradeoffs or usability issues, it’s important to start at the beginning, so here we go…

#### TL;DR

**Block time** in a blockchain is what it takes for a block to be checked by the miners (or validators on PoS blockchains). In Alephium, this is set to 6̶4̶ ̶s̶e̶c̶o̶n̶d̶s̶ \* **16 seconds.**

_\* With the introduction of the_ <a href="https://medium.com/@alephium/rh%C3%B4ne-network-upgrade-activated-cbeb298585fe" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/rh%C3%B4ne-network-upgrade-activated-cbeb298585fe" target="_blank">Rhône Network Upgrade</a>, _the block time was reduced to 16 seconds. That was possible with the adoption of the Ghost algorithm, and it is translated into an enhanced user experience._

**Block size** can be measured in two ways: It refers to the total **amount of data** in the block, or the **maximal computational power (gas)** each block can handle.

### What is Block Time ?

<figure id="adae" class="graf graf--figure graf-after--h3">
<img src="image_77bad79c4b.jpeg" class="graf-image" data-image-id="1*MjiLucU5DpdMa7VBzr76LQ.jpeg" data-width="2500" data-height="1916" />
<figcaption>One way to look at the Mempool: <strong>The Disintegration of the Persistence of Memory</strong> <em>by Dali</em></figcaption>
</figure>

When a user does a transaction from his wallet, it is first broadcasted to the network, where a full node picks it up, checks for validity, and adds it into the mempool, where it is still unconfirmed. And then, two things can happen: either it expires without being confirmed because most blockchains have an expiry time for transactions to be picked up and confirmed, or it gets picked up by a block producer to be confirmed.

Transactions are gathered inside a block and checked by the miners (or validators on PoS blockchains). The time this takes is called **Block Time**. On Bitcoin, the Average Block Time is 10 minutes, but the actual block time can vary due to sudden variations in the available hash rate (if many miners join or leave the network). Therefore, <a href="https://www.blockchain.com/charts/difficulty" class="markup--anchor markup--p-anchor" data-href="https://www.blockchain.com/charts/difficulty" rel="noopener" target="_blank">mining difficulty adjusts to compensate for the variation in hash rate</a>, aiming to maintain an expected block time of 10’. But it can take a while because the difficulty is only adjusted roughly every two weeks… This explains why when the Chinese government banned Bitcoin mining last year, the average block time exploded to <a href="https://cryptoslate.com/bitcoin-block-times-hit-lowest-point-in-10-years-after-china-mining-ban/" class="markup--anchor markup--p-anchor" data-href="https://cryptoslate.com/bitcoin-block-times-hit-lowest-point-in-10-years-after-china-mining-ban/" rel="noopener" target="_blank">more than 23 minutes on June 27th, 2021!</a>

In Zcash, block time is 75 seconds, and difficulty is adjusted after every block to account for available hashing power and keep blocks churning at a regular pace. Alephium works the same way in that regard, with difficulty adjusting every block, and has and has an **expected block time of 16 seconds.**

In PoS, Block Time is defined much more directly and has nothing to do with difficulty. For example, in <a href="https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/" class="markup--anchor markup--p-anchor" data-href="https://ethereum.org/en/developers/docs/consensus-mechanisms/pos/" rel="noopener" target="_blank">Ethereum PoS</a> (post-merge), “slots” are 12 seconds time intervals in epochs composed of 32 slots: _“in every slot, a committee of validators is randomly chosen, whose votes are used to determine the validity of the block being proposed.”_ And that’s it!

### What is Block Size?

<figure id="da97" class="graf graf--figure graf-after--h3">
<img src="image_63eb791c84.png" class="graf-image" data-image-id="1*UVPCzJGd7GPVEqTE_fSkWA.png" data-width="1210" data-height="1372" />
<figcaption>A visual representation of a block by César Baldaccini, <strong><em>Compression of silver-plated metal cutlery sculpture</em></strong></figcaption>
</figure>

**Block size** is measured in different ways. For some coins, it’s defined by the number of transactions it can hold expressed in MegaBytes (Bitcoin is 1MB, Zcash is 2MB…). That means that the total **amount of data** in the block cannot exceed a specific limit. The bigger the block, the more transactions…

This is not as trivial as one may think, as it has deep political and network decentralization implications and has been the cause of the gigantic <a href="https://blog.bitmex.com/the-blocksize-war-chapter-1-first-strike/" class="markup--anchor markup--p-anchor" data-href="https://blog.bitmex.com/the-blocksize-war-chapter-1-first-strike/" rel="noopener" target="_blank">Bitcoin Blocksize War</a>!

For other coins (ETH, for example), it’s calculated differently: Block size refers to the **maximal computational power (gas)** each block can handle. Complex transactions require more gas, and simpler token transfers require less. Gas is expressed (and paid) in the native currency of the network. The limit represents a maximum in terms of computational power and not in terms of a strictly measured “data amount.” Alephium follows a similar model, where the block size is indeed a gas limit for the whole block’s transactions together.

And then you have a lot of other ways of doing things… For example, Monero has a dynamic block size, Cardano regularly increases its block size as “updates” to the network (<a href="https://twitter.com/InputOutputHK/status/1518596128056520707" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/InputOutputHK/status/1518596128056520707" rel="noopener" target="_blank">currently at 88Kb</a>), <a href="https://masked.medium.com/the-coda-protocol-bbcb4b212b13" class="markup--anchor markup--p-anchor" data-href="https://masked.medium.com/the-coda-protocol-bbcb4b212b13" rel="noopener" target="_blank">Mina has 1kb “blocks</a>,” etc.

### That’s it for today… Where to next?

In part 2, coming later this month, since we now understand the frequency of blocks and the number of transactions they can contain, we are ready to calculate transaction velocity!

Our next article will cover <a href="https://medium.com/@alephium/transactions-per-second-tps-f13217a49e39" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/transactions-per-second-tps-f13217a49e39" target="_blank">TPS (Transactions Per Second).</a> Stay tuned on our <a href="https://twitter.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium" rel="noopener" target="_blank">Twitter</a>, <a href="https://discord.gg/h7cXXy4FEY" class="markup--anchor markup--p-anchor" data-href="https://discord.gg/h7cXXy4FEY" rel="noopener" target="_blank">Discord</a>, <a href="https://t.me/Alephium_Announcement" class="markup--anchor markup--p-anchor" data-href="https://t.me/Alephium_Announcement" rel="noopener" target="_blank">Telegram</a>, or <a href="https://www.reddit.com/r/Alephium/" class="markup--anchor markup--p-anchor" data-href="https://www.reddit.com/r/Alephium/" rel="noopener" target="_blank">Reddit</a> to see it fresh off the press!
