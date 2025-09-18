---
date: 2022-07-05T08:56:12.147000Z
description: A discussion with Cheng Wang, inventor of PoLW and founder of Alephium
spotlight: false
featuredImage: image_a8ea38700f.png
title: 'TECH TALK #1 — The Ultimate guide to Proof-of-Less-Work, the universe and
  everything…'
---
A discussion with Cheng Wang, inventor of PoLW and founder of Alephium

> This is the first of a series of interviews on the technical innovations brought to the world by Alephium. The discussion was conducted in February 2022, in a virtual format in presence of most of the Alephium team who contributed to the questions and ensuing exchange. The following has been edited for clarity, concision and optimized for readability. It’s been followed by an AMA you can find as a [video](https://youtu.be/Oi4AsqVY0YA) or in [text](/news/post/tech-talk-1-proof-of-less-work-ama-3d5afbf78c71)!

## **ORIGINS**

**Vladimir Moshnyager: Hi** [Cheng](https://twitter.com/wachmc)**, before diving deep in the Proof-of-Less-work consensus mechanism, which is the main topic of our discussion today, I’d like a bit of context, and start at the beginning. The start of your itinerary, and of the ideas which would end up in your creation: when did you get into crypto at all?**

**Cheng Wang:** The first time I heard about Bitcoin was around 2014 during my PhD at [EPFL](https://en.wikipedia.org/wiki/%C3%89cole_Polytechnique_F%C3%A9d%C3%A9rale_de_Lausanne) on consensus algorithm research. My advisor asked me if I heard about it, because he might have been interested in doing some research on it, but we ended up not doing it. It was very old school research where we stayed very theoretical and did not care much about potential industry applications.

Then I proposed [the first linear-time Byzantine agreement algorithm and posted it on the Internet](https://arxiv.org/abs/1507.06165).   
In 2015, Vitalik Buterin and Casey from the Ethereum Foundation read my paper. They found out I was also in Switzerland and invited me to go to Zug at the Ethereum Foundation to have a discussion with them. That’s when I dived deeper in Bitcoin and Ethereum to prepare for the meeting.

Back then I was more comfortable with Bitcoin’s simplicity, as expressed in its whitepaper. Ethereum seemed more complex with a much wider attack surface and I was worried people would try to abuse it.

**Did you mine anything before starting ALPH?**

I mined Ethereum for a bit, and afterwards I mined [Ergo](https://ergoplatform.org/en/). I just did this as an amateur with two of my GPUs.

**How did you get interested in consensus algorithms?**

It’s a total coincidence! I came to the EPFL without a topic in mind: I got accepted and had the freedom to choose what I wanted to work on. My background is in mathematics and I come from pure number theory. I wanted to work on cryptography, but there were already too many PhDs on that, so they asked me to choose something else.

I went through the list of professors and topics and saw that very theoretical research on consensus algorithms. I applied and got accepted.

I was a researcher there for almost three years and I wrote a paper on linear-time asynchronous Byzantine consensus algorithm. I’ve enjoyed doing that research a lot. It was a theoretical breakthrough on the subject, and I introduced several techniques that are used in follow-up works.

---

## **WHAT IS PoLW AND HOW DOES IT WORK**

**Let’s dive into Proof-of-Less-Work (which we’ll call PoLW from now on). How did you get to the idea of PoLW? When was it conceived and what it is?**

The original idea is actually not mine. I was following the work of researchers in the field of consensus algorithms and stumbled upon the work of a group of Israeli researchers. [They came up with interesting ideas](https://arxiv.org/pdf/1911.04124v1.pdf) on how to reduce the energy consumption of proof-of-work in Bitcoin without sacrificing the security of the network.

I designed something slightly different so that it is perfectly adapted to [Alephium](https://github.com/alephium/white-paper/blob/master/alephium.pdf): it is simpler because there is no difficulty adjustment based on periods, [we are adjusting difficulty for every block, like zCash does](https://github.com/zcash/zcash/issues/147). The initial goal was to optimize the Proof of Work by reducing the energy consumption without sacrificing security.

I didn’t have any profound ideas about the name, so I ended up calling it [Proof of Less Work](https://github.com/alephium/research/blob/master/polw.pdf), because it’s what it does, and the name seems more attractive to people than the tech that actually underpins it.

**Proof-of-Work is well known for being Bitcoin’s consensus algorithm, and even if it’s decried for its energy consumption, it’s well understood and considered fairly secure. What is the main difference between PoLW and “classical” Proof-of-Work (which we’ll call PoW from now on)?**

In classical proof of work, miners use [equipment like GPUs, FPGAs or ASICS](https://blog.samtec.com/post/is-the-cpu-gpu-fpga-or-asic-better/) and energy to solve hashing problems: mining cost is the combination of equipment cost and energy costs.

In PoLW, after a certain point, miners shift part of the external cost to internal network cost by [burning some coins](https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/coin-burn/) (and consuming proportionally less energy). In this case, mining costs are both external (energy, equipment) and internal (burning coins inside the network).

Since burning coins has a cost but does not burn energy, this is how we reduce the energy consumption without sacrificing security: in PoLW, the cost is the same as in PoW, but composed differently. To illustrate this point, imagine a world in which BTC and ALPH have the same value, and roughly the same network of miners, in this world:

-\> you get 1.25 BTC of mining reward by spending 1 BTC in (equipment + energy costs),

-\> you get 1.25 ALPH of mining reward by spending 0.15 ALPH in (equipment + energy costs) and burning 0.85 ALPH

In the second case, the cost is the same for the miner as in the first case, but the energy spent is vastly diminished. Of course the proportion of the external spend vs burning of coins will vary, and that will depend on the total hashrate of the miners on the network.

**How does the “burning” part of the operation work? Who owns the ALPH that’s going to be burnt ? Where does it go?**

The ALPH to be burnt will come from the miners wallets and will be part of the input of the coinbase transaction. This means that once PoLW is activated, you’ll need to have ALPH in order to be able to mine. Instead of needing just equipment and energy, you’ll need equipment, energy and coins.

That’s part of the reason why PoLW isn’t triggered from the beginning of the network: once it gets activated the network is not fully permissionless anymore, because you will need some coins prior to mining ALPH.

For now, we want to make it easier and fully permissionless for miners to get started, so it would be impractical to have it activated yet. Also, we need the network to be decentralized enough before the burning of coins starts.

**Thanks! You say that PoLW only gets activated “after” a certain point, what does that mean? When does PoLW gets activated? When does the burning of coins start?**

PoLW will activate when the total hashrate of Alephium reaches at least 1 Exahash per second (1 Eh/s — that is 1 quintillion calculations per second!). For the sake of comparison, as of today (25th of May 2022), it’s at 22 Terahash per second (1Th/s), or 0,0022% of the required hashrate for activation.

[The consensus code exists and is implemented already](https://github.com/alephium/alephium/blob/master/protocol/src/main/scala/org/alephium/protocol/mining/Emission.scala), but we’ll need to write additional code and communicate to help miners adapt and educate themselves on that change. There will be no need for a hardfork to activate it, since the 1 Exahash per second value is already hardcoded.

Until then it’s not necessary and we keep functioning as regular PoW. It will probably take more than a few years until we get there, but for sure it’ll depend on how our market cap and the coin develops! We focus on the building part!

**How much needs to be burned by the miners? Is it dependant of hashrate? Do the miners have a say in it?**

Once PoLW is triggered, the proportion of coin to be burned is fixed for a given hashrate. It is the same for all miners on the network.

Right now, the amount of ALPH to be burned is equal to 0.875 or (⅞) of the theoretical reward for the hashrate exceeding 1Eh/s.

The 1Eh/s PoLW activation threshold and the 0.875 (⅞) ratio are currently hardcoded & can be adapted in the future if we want to further reduce the energy consumption.

**How did you choose the 1 Eh/s value? How do we know that this amount of hashing is enough to secure the network, even years into the future? Can you give us an idea of how much hardware that represents?**

We chose that value first because it’s a high value, meaning we’d be a fairly mature chain with sufficient level of decentralization when we reach it. It’s also in the ballpark of tier-2 UTXO/PoW chains today (Bitcoin Cash, Zcash, etc…). Today, [Bitcoin](https://fortune.com/2022/02/25/bitcoin-mining-crackdown-environment-carbon-emissions/) and Ethereum bear the brunt of the complaints about ecological waste of energy, so we figured if we can get to the tier-2 level and then consume proportionally less energy we’d be where we want to be.

The network will still consume energy, but we believe the trade-off for what you get for that energy spent (robust, secure and decentralized infrastructure on which to build myriads of useful applications) [will be better understood](https://fortune.com/2021/06/18/a-new-report-highlights-the-incredibly-high-environmental-cost-of-teslas-bitcoin-investment/) and accepted than it is today with Bitcoin for example.

To give you an idea of the scale of that number, [if you assume more or less 1Gh/s per modern GPU](https://en.bitcoin.it/wiki/Non-specialized_hardware_comparison), it would require 1 million GPUs (which is in the order of magnitude of Ethereum today) to reach the 1 Eh/s limit at which point PoLW activates!

It’s also important to keep in mind that those numbers only matter for the short term. If we reach the Petahash level (which is 1/1000th of the 1Eh/s limit), that’ll most likely mean that most of mining on Alephium’s network is done by FPGA’s and ASICs, which means the network will be fairly well protected against attacks with GPU-hashrate.

**In the whitepaper it says that « Alephium only uses ⅛ of the energy compared to Bitcoin. ». The criticism against energy consumption of PoW and Bitcoin is oriented towards an order of magnitude of energy consumption (and the source of that energy), do you think that 1/8th is a really significant improvement? Enough to be a real selling point?**

This is new technology, so we chose a relatively conservative level of energy saving for now, (which will start kicking in at 1Eh/sec) which is still already very significant: 7/8th less energy consumption, or a reduction of almost 88% compared to regular PoW!

If it proves to be stable, and the community, mining pools and miners are educated and comfortable with it, then there’s no reason we can’t take it further, and use 1/16th or even 1/32 of the energy consumed by regular PoW, by changing the proportion of external/internal work required by the protocol.

But since we have in all things a conservative, no-hype, slow and deliberate approach because we build for the long term, we started where we feel the most comfortable!

**Since PoLW has an internal cost component, does it have anything to do with Proof-of-Stake ?**

No, it’s completely different. First, it’s different because you don’t « stake » coins to mine more coins (at the risk of getting slashed), you really burn existing coins, allowing you to mine new ones.

Then, the most important distinction is in the fact that in PoLW, miners are still required to pay external costs: the cost of the equipment and of the energy consumed to calculate hashes. This is important, because nobody can manipulate energy prices all over the world, so there is no way to manipulate the global hashrate and thus ensure an unfair advantage over the network.

In Proof of Stake, the cost is fully internal to the network, which is dangerous because [if you can control a lot of coins](https://cryptonews.com/news/major-bitcoin-crypto-companies-warn-of-extreme-risk-in-proof-of-stake-systems.htm), either directly or indirectly (via the use of derivatives of staked coins or wrapped tokens), then it’s potentially cheaper and less complicated to influence the ordering and validating of transactions and blocks, therefore weakening security of the network.

Proof of less Work, by combining the requirement of external work and adjusting it with « some » internal costs on top allows for the best of both worlds: staying secure and decentralized while spending less energy.

**About Proof-of-Stake (PoS), why did you choose to optimize on PoW rather than build a PoS network, like most new Layer1s (Solana, Avalanche, Cardano, etc…) who have emerged in this cycle?**

When we started working on Alephium, PoS was on an ascending trajectory, and all big new coins were mostly PoS, or aiming to become PoS. The wasted energy narrative about PoW was already there, but not yet as resounding as today.

At the end of the day, the choice of a consensus mechanism is (or can be) a principled decision: what does one want to achieve? We believe that Bitcoin’s focus on strong decentralization, proof of work and UTXO model has provided the best security for its network, allowing it to live up to its proclaimed values of disintermediation, permissionlessness and inclusiveness.

_In terms of technology_, PoW is simpler and better understood than PoS: it’s been field-tested by numerous projects over relatively long periods of time, and the crypto community is familiar with its security model. We know how to do it right, and its implementations are also more resistant to a lot of attacks.

_In terms of scale_, a lot of Proof of Stake projects function in fact more like delegated PoS, where few validators have outsize influence over the crafting & proposing of blocks. For now, real PoS has not scaled enough, with enough value and usage on-chain to be considered that it has withstood the test of time.   
Actually, the current switch of Ethereum from PoW to PoS will be the first real big test for PoS in production. And it took them years to get there, getting through complexities in the PoS design, in small and big things. [And there are already potential red flags.](https://www.coindesk.com/layer2/2022/04/20/is-ethereum-staking-pool-lidos-growth-an-omen-of-centralization/)

_In terms of security design and architecture_, on the non-tech side, PoS presents much more centralized risk at the pools level because of the network effects of liquidity staking. MEV([which is extracting a lot of value out of unsuspecting users](https://research.paradigm.xyz/MEV)) also presents higher risks in PoS setups because block proposers are pre-selected for each block epoch.

_In terms of distribution_, PoW seems to achieve a fairer distribution of coins than PoS. In Proof of Stake, you can only get coins by buying in the private or public sale and/or on the market. Running a validator can also cost a lot more money than a miner. In PoW, most of the coins are usually reserved for mining, leaving a bigger chance for small miners to make bank. Big funds tend to own a big part of the PoS coins, which is good for price, because they have less need to sell, but also tends to centralize the networks.

_In terms of attacks,_ PoS has an inherent advantage in having teams and people close to the team controlling often more than 50% of the tokens: they are more resistant to 51% attacks… until they aren’t!

---

## **ABOUT MINING REWARD, FINALITY, ASICS & OTHER DISTINGUISHED TOPICS**

**We’ve talked a lot about the consensus mechanism here, but can you explain how does the block rewards mechanism work? It’s not so easy to understand either, and Alephium’s solution seems quite original!**

When mining on Alephium, a miner (or a mining pool) would receive a reward for the service provided to the network. This reward is itself composed of 2 main components: transaction fees and mining rewards.

The transaction fees are fairly easy to understand: it’s half of the sum total of all transaction fees paid by people transacting in a certain block (the other half is burned).

The mining rewards are themselves divided in two: a time-based component and a hashrate component.

The time based component starts fairly high and diminishes linearly for 4 years, because we want to incentivize people to mine more in the beginning to kickstart the network: it helps secure it AND it increases the fair distribution of coins into more pockets, which is important for the decentralization of Alephium.

Similarly, the hashrate based reward will be used to incentivise miners to mine up to a certain point, increasing emissions. But then, reaching a bigger level of hashrate (by an order of magnitude), it’ll even start diminishing because that’s where PoLW is activated. You can find more detailed information about this mechanism [in our article here](/news/post/alephium-block-rewards-72d9fb9fde33).

**Why is Alephium burning half of the transaction fees?**

In a measure not so dissimilar to [EIP1559](https://eips.ethereum.org/EIPS/eip-1559) on Ethereum, we think that transaction fees should be at least [in part burned](https://github.com/alephium/alephium/blob/master/protocol/src/main/scala/org/alephium/protocol/model/Transaction.scala#L228-L237). We did this for the same reason as Ethereum: we want fairly stable transaction fees, and we like the deflationary impact this has on our (max) supply.

**Why did you choose the Blake3 algorithm?**

[Blake3 is recent](https://github.com/BLAKE3-team/BLAKE3), having been released in 2020, it has been developed by known and respected professionals in the cryptography ecosystem: Jack O’Connor, [Jean-Philippe Aumasson](https://www.aumasson.jp/), Samuel Neves, and [Zooko Wilcox-O’Hearn](https://en.wikipedia.org/wiki/Zooko_Wilcox-O%27Hearn). We know some of them and have an open line of communication with them which is helpful.

We wanted [a new hash algorithm](https://www.infoq.com/news/2020/01/blake3-fast-crypto-hash/) not used by any other PoW algorithm and spent quite some time thinking about this. There’s a risk with creating your own hash algorithm [as the IOTA team eventually found out](https://medium.com/@neha/cryptographic-vulnerabilities-in-iota-9a6a9ddc4367) in 2017. So we chose to go the easier way by using something already existent and proven: first because it is simpler to implement, second it makes it easier for devs to develop things on top of it, and third it’s going to be much easier to optimize.

Also it’s less likely some miners will find an undue advantage and enjoy much higher hashrates because they found an edge in the complexity: you provide a more level playing field for everyone.

**Is this algo minable with FPGAs and ASICs? Is Alephium ASIC resistant?**

Alephium is ASIC friendly. It’s a design choice we made. In the long term, [it’s almost impossible to avoid ASICS](https://medium.com/the-capital/the-big-controversy-what-is-asic-resistance-a8fcc2ffd580): if your blockchain is popular and people want to mine it, they will find a way to build an adequate ASIC.

So you have only two solutions: hardfork regularly to change the algorithm [as Monero is doing](https://kaykurokawa.medium.com/forking-for-asic-resistance-a-monero-case-study-ecdfb6c9fba2), or you choose a simple algorithm and accept the fact that at some point people will conceive an ASIC.

There’s an added benefit to make your chain ASIC friendly, it is that if you don’t, you’re stuck with GPU mining and people could theoretically rent a lot of GPU capacity and attack your chain. Whereas with ASIC (especially if you use an algorithm no one else uses), this would be out of reach.

**This is a bit of a different question, but since we’re here, I thought I’d ask. Why did you choose a 64 seconds block time? How long is time-to-finality in Alephium?**

This is a bit of a controversial topic. PoW on average has longer block times than PoS. In the short term, blocks that follow each other too quickly will put a lot of strain on the loads of the system and in the network, resulting in a higher orphan block rate and weaker security and increasing capital expenses requirements for validators. And in the very long term (magnitude of years, decades), it’s the syncing of the blockchain when you want to participate which could become a very hard problem.

Also, for MEV attacks, you don’t give people enough time to react to the transactions in the mempool because you’re creating new blocks too fast. We have chosen 64 seconds (another magic number!) which is already closer to Ethereum’s blocktime (15s) than Bitcoins (10 minutes), but it could go to 5 to 10 seconds and still be ok (were we to adopt a ghost-like algorithm like ETH). Sub-second finality seems complicated and probably not a good idea, at least as of now.

We chose a bit longer than Ethereum’s blocktime because we feel ETH produces a lot of uncles blocks (similar concept to orphan blocks in bitcoin) and this represents quite some overhead of storage and execution. So we sacrificed a bit of time to finality & transactions per second to ensure a more robust system for the long-term.

Finality in Alephium will depend as much from the value transacted as the hashrate mining the chains and the type of attack you want to defend from. This is similar in other blockchains: you’ll be more patient when buying a house than when paying for coffee!

**To compensate for this question of time-to-finality and to increase the number of transactions per second, it seems most blockchains will have sidechains, rollups or subnets. Is it possible to build Layer2s on top of Alephium?**

We do believe that over the long term, the blockchain space will be a mix of Level1 and Level2s and/or a mix of blockchains bridged in many ways. We are for sure seeing [a lot of Layer2 activity](https://l2beat.com/) these days!   
We love the [zk-rollups](https://www.alchemy.com/blog/zero-knowledge-rollups) experiments going on these days, and we think it’s amazing tech that is built there in terms of security and speed.   
It is also possible that Level2s take on a more specialized, application-specific role like you can see with [Aztec](https://aztec.network/) on Ethereum or [Kujira](https://teamkujira.medium.com/the-future-of-kujira-485d43c4729c) in the Cosmos Ecosystem.

It will of course be possible to build L2s on top of Alephium, nothing in our design prevents that. For some L2s, it might be a bit more complicated, because our L1 level is very lightweight, which means there are some very heavy cryptographic primitives that we have not included, at least as of yet.   
For example, some zk-proofs tools would be hard to implement on top of Alephium today, but if we see demand for these and the cryptography becomes efficient, we’ll add support for these at a later point in time, that shouldn’t be much of a problem.

Bitcoin’s lightning network is an interesting L2 seeing a lot of growth. It’s an interesting architecture preserving space on L1 and speed and cost on L2. Since Alephium is also based on the UTXO model, it should be possible to build something similar to the lightning protocol on top of it!

**Thanks a lot for that discussion, it’s been fascinating, enlightening and a lot to take in!**

If you want to know more about PoLW, head to the subsequent AMA! In [video](https://youtu.be/Oi4AsqVY0YA) or in [text](/news/post/tech-talk-1-proof-of-less-work-ama-3d5afbf78c71)!

**Read** [an introduction to sUTXO here](/news/post/an-introduction-to-the-stateful-utxo-model-8de3b0f76749) **and** [ALPHred the Virtual Machine here](/news/post/meet-alphred-a-virtual-machine-like-no-others-85ce86540025)**.**

_If you have more questions on the topic, please come in our_ [Discord](https://discord.gg/JErgRBfRSB)_, on_ [Telegram](https://t.me/alephiumgroup) _or ping us on_ [Twitter](https://twitter.com/alephium)_!_
