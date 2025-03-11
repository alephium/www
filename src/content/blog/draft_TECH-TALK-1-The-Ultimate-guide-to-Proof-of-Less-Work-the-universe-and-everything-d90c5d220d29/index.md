---
description: A discussion with Cheng Wang, inventor of PoLW and founder of Alephium
draft: true
title: TECH TALK 1 — The Ultimate guide to Proof-of-Less-Work, the universe and everything…
---

### **TECH TALK 1 — The Ultimate guide to Proof-of-Less-Work, the universe and everything…**

A discussion with Cheng Wang, inventor of PoLW and founder of Alephium

((( VISUAL — TECH TALK WITH CHENG )))

This is the first of a series of articles on the technical innovations brought to the world by Alephium. The discussion was conducted in february 2022, in a virtual format in presence of most of the Alephium team who contributed to the questions and ensuing exchange. The following has been edited for clarity and optimized for readability.

**ORIGINS**

**Hi** <a href="https://twitter.com/wachmc" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/wachmc" rel="noopener" target="_blank"><strong>Cheng</strong></a>**, before diving deep in the Proof-of-Less-work consensus mechanism, which is the main topic of our discussion today, I’d like a bit of context, and start at the beginning. The start of your itinerary, and of the ideas which would end up in your creation: when did you get into crypto at all?**

The first time I heard about Bitcoin was around 2014 during my PhD at <a href="https://en.wikipedia.org/wiki/%C3%89cole_Polytechnique_F%C3%A9d%C3%A9rale_de_Lausanne" class="markup--anchor markup--p-anchor" data-href="https://en.wikipedia.org/wiki/%C3%89cole_Polytechnique_F%C3%A9d%C3%A9rale_de_Lausanne" rel="noopener" target="_blank">EPFL</a> on consensus algorithm research. My advisor asked me if I heard about it, because he might have been interested in doing some research on it, but we ended up not doing it. It was very old school research where we stay very theoretical and did not care much about industry potential applications.

Then I proposed <a href="https://infoscience.epfl.ch/record/210619?ln=en" class="markup--anchor markup--p-anchor" data-href="https://infoscience.epfl.ch/record/210619?ln=en" rel="noopener" target="_blank">the first linear-time attending agreement algorithm and posted it on the Internet</a>. In 2015, Vitalik Buterin and one of his researchers read my paper. They found out I was also in Switzerland and invited me to go to Zug at the Ethereum Foundation to have a discussion with them. That’s when I dived deeper in Bitcoin and Ethereum to prepare for the meeting.

Back then I preferred Bitcoin because it seemed much simpler, both the whitepaper and the whole idea. Ethereum seemed way more complicated with a much wider attack surface and I was worried people would abuse it.

**Did you mine anything before starting ALPH?**

I mined Ethereum for a bit, and afterwards I mined <a href="https://ergoplatform.org/en/" class="markup--anchor markup--p-anchor" data-href="https://ergoplatform.org/en/" rel="noopener" target="_blank">Ergo</a>. I just did this as an amateur with two of my GPUs.

**How did you get interested in consensus algorithms?**

It’s a total coincidence! I came to the EPFL without a topic in mind: I got accepted and had the freedom to choose what I wanted to work on. My background is in mathematics and I come from pure number theory. I wanted to work on cryptography, but there were already too many PhDs on that, so they asked me to choose something else. I went through the list of professors and topics and saw that very theoretical research on consensus algorithms. I applied and got accepted.

I stayed there for almost three years and during my research, I proposed the first linear-time asynchronous Byzantine consensus algorithm. I’m very proud of that work because it was the first in the world: I worked very hard on that paper when I got the idea and introduced some very innovative techniques to solve some of the problems. A lot of follow-up work ended up using the <a href="https://medium.com/@crytpol_25852/asynchronous-byzantine-fault-tolerance-a-time-independent-future-proof-byzantine-fault-f6f1a4d1f17a" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@crytpol_25852/asynchronous-byzantine-fault-tolerance-a-time-independent-future-proof-byzantine-fault-f6f1a4d1f17a" target="_blank">same techniques</a> I described for the first time in <a href="https://infoscience.epfl.ch/record/210619?ln=en" class="markup--anchor markup--p-anchor" data-href="https://infoscience.epfl.ch/record/210619?ln=en" rel="noopener" target="_blank">my paper.</a>

**WHAT IS PoLW AND HOW DOES IT WORK**

**Let’s dive into Proof-of-Less-Work (which we’ll call PoLW from now on). How did you get to the idea of PoLW? When was it conceived and what is is?**

The original idea is actually not mine. I was following the work of researchers in the field of consensus algorithms and stumbled upon the work of a group of Israeli researchers. <a href="https://arxiv.org/pdf/1911.04124v1.pdf" class="markup--anchor markup--p-anchor" data-href="https://arxiv.org/pdf/1911.04124v1.pdf" rel="noopener" target="_blank">They came up with interesting ideas</a> on how to reduce the energy consumption of proof-of-work in Bitcoin without sacrificing the security of the network.

I designed something slightly different so that it is perfectly adapted to <a href="https://github.com/alephium/white-paper/blob/master/alephium.pdf" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/white-paper/blob/master/alephium.pdf" rel="noopener" target="_blank">Alephium</a>: it is simpler because there is no difficulty adjustment based on periods, <a href="https://github.com/zcash/zcash/issues/147" class="markup--anchor markup--p-anchor" data-href="https://github.com/zcash/zcash/issues/147" rel="noopener" target="_blank">we are adjusting for every block, like zCash does</a>. The initial goal was to optimize the Proof of Work by reducing the energy consumption without sacrificing security.

I didn’t have any profound ideas about the name, so I ended up calling it <a href="https://github.com/alephium/research/blob/master/polw.pdf" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/research/blob/master/polw.pdf" rel="noopener" target="_blank">Proof of Less Work</a>, because it’s what it does, and the name seems more attractive to people than the tech that actually underpins it.

**Proof-of-Work is well known for being Bitcoin’s consensus algorithm, and even if it’s decried for its energy consumption, it’s well understood and considered fairly secure. What is the main difference between PoLW and “classical” Proof-of-Work (which we’ll call PoW from now on)?**

In classical proof of work, miners use <a href="https://blog.samtec.com/post/is-the-cpu-gpu-fpga-or-asic-better/" class="markup--anchor markup--p-anchor" data-href="https://blog.samtec.com/post/is-the-cpu-gpu-fpga-or-asic-better/" rel="noopener" target="_blank">equipment like GPUs, FPGAs or ASICS</a> and energy to solve hashing problems: mining cost is the combination of equipment cost and energy costs.

In PoLW, after a certain point, miners shift part of the external cost to internal network cost by <a href="https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/coin-burn/" class="markup--anchor markup--p-anchor" data-href="https://www.fool.com/investing/stock-market/market-sectors/financials/cryptocurrency-stocks/coin-burn/" rel="noopener" target="_blank">burning some coins</a> (and consuming proportionally less energy). In this case, mining costs are both external (energy, equipment) and internal (burning coins inside the network).

Since burning coins has a cost but does not burn energy, this is how we reduce the energy consumption without sacrificing security: in PoLW, the cost is the same as in PoW, but composed differently. To illustrate this point, imagine a world in which BTC and ALPH have the same value, and roughly the same network of miners, in this world:

((( ASK MIKA FOR A VISUAL OF THIS )))

-\> you get 1.25 BTC of mining reward by spending 1 BTC in (equipment + energy costs),

-\> you get 1.25 ALPH of mining reward by spending 0.15 ALPH in (equipment + energy costs) and burning 0.85 ALPH

In the second case, the cost is the same for the miner as in the first case, but the energy spent is vastly diminished. Of course the proportion of the external spend vs burning of coins will vary, and that will depend on the total hashrate of the miners on the network.

**How does the “burning” part of the operation work? Who owns the ALPH that’s going to be burnt ? Where does it go?**

((( ASK MIKA FOR A VISUAL OF THIS )))

The burned coins will become the input of the coinbase transaction. Meaning you need coins before you’re actually able to mine. So instead of needing just equipment and energy, you’ll need equipment, energy and coins.

That’s part of the reason why we haven’t implemented it from the beginning of the network: once it gets activated the network is not anymore fully permissionless, because you will need some coins prior to mining ALPH. But for now, we want to make it easier and fully permissionless for miners to get started, so it would be impractical to have it activated yet.

**Thanks! You say that PoLW only gets activated “after” a certain point, what does that mean? When does PoLW gets activated? When does the burning of coins start?**

For now, it’s not enabled on the network as it’s not needed yet. It’ll be a real adjustment for mining pools and miners when it activates. We’ll need to write smart code and communicate to help miners adapt and educate themselves to that change. In the early days, we function as regular Proof of Work.

The consensus code exists ((( NEED LINK GITHUB? ))) already, but we still have work to do on the miner side of the code. There will be no need for a hardfork to activate it, since we actually have a hardcoded value for when that happens. PoLW will activate when the total hashrate of Alephium reaches at least 1 Exahash per second (that is 1 quintillion calculations per second!)! For the sake of comparison, as of today (25th of May 2022), it’s at 22 Terahash per second, or 0,0022% of the required hashrate for activation.

Until then it’s not necessary and we keep functioning as regular PoW. It will probably take more than a few years until we get there, but for sure it’ll depend on how our market cap and the coin develops! We focus on the building part!

**How did you choose the 1 Eh/s value? How do we know that this amount of hashing is enough to secure the network, even years into the future? Can you give us an idea of how much hardware that represents?**

We chose that value first because it’s a high value, meaning we’d be a fairly mature chain when we reach it. It’s also in the ballpark of tier-2 UTXO/PoW chains today (Bitcoin Cash, Zcash, etc…). Today, <a href="https://fortune.com/2022/02/25/bitcoin-mining-crackdown-environment-carbon-emissions/" class="markup--anchor markup--p-anchor" data-href="https://fortune.com/2022/02/25/bitcoin-mining-crackdown-environment-carbon-emissions/" rel="noopener" target="_blank">Bitcoin</a> and Ethereum bear the brunt of the complaints about ecological waste of energy, so we figured if we can get to the tier-2 level and then consume proportionally less energy we’d be where we want to be.

The network will still consume energy, but we believe the trade-off of what you get for that energy spent (solid, secure and decentralized infrastructure on which to build myriads of useful applications) <a href="https://fortune.com/2021/06/18/a-new-report-highlights-the-incredibly-high-environmental-cost-of-teslas-bitcoin-investment/" class="markup--anchor markup--p-anchor" data-href="https://fortune.com/2021/06/18/a-new-report-highlights-the-incredibly-high-environmental-cost-of-teslas-bitcoin-investment/" rel="noopener" target="_blank">will be better understood</a> and accepted than it is today with Bitcoin for example.

To give you an idea of the scale of that number, <a href="https://en.bitcoin.it/wiki/Non-specialized_hardware_comparison" class="markup--anchor markup--p-anchor" data-href="https://en.bitcoin.it/wiki/Non-specialized_hardware_comparison" rel="noopener" target="_blank">if you assume more or less 1Gh/s per modern GPU</a>, it would require 1 million GPUs (which is in the order of magnitude of Ethereum today) to reach the 1 Eh/s limit at which point PoLW activates! It’s also important to keep in mind that those numbers only matter for the short term. If we reach the Petahash level (which is 1/1000th of the 1Eh limit), that’ll most likely mean that most of our mining is done by FPGA’s and ASICs, which means the network will be fairly well protected against attacks with GPU-hashrate rented from companies like NiceHash.

**In the whitepaper it says that « Alephium only uses ⅛ of the energy compared to Bitcoin. ». The criticism against energy consumption of PoW and Bitcoin is oriented towards an order of magnitude of energy consumption (and the source of that energy), do you think that 1/8th is a really significant improvement? Enough to be a real selling point?**

This is new technology, so we chose a relatively conservative level of energy saving for now, (which will start kicking in at 1Eh/sec) which is still already very significant: 7/8th less energy consumption, or a reduction of almost 88% compared to regular PoW!

If it proves to be stable, and the community, mining pools and miners are educated and comfortable with it, then there’s no reason we can’t take it further, and use 1/16th or even 1/32 of the energy consumed by regular PoW, by changing the proportion of external/internal work required by the protocol.

But since we have in all things a conservative, no-hype, slow and deliberate approach because we build for the long term, we started where we feel the most comfortable!

**Since PoLW has an internal cost component, does it have anything to do with Proof-of-Stake ?**

No, it’s completely different. First, it’s different because you don’t « stake » coins to mine more coins (at the risk of getting slashed), you really burn existing coins, allowing you to mine new ones.

Then, the most important distinction is in the fact that in PoLW, miners are still required to pay external costs: the cost of the equipment and of the energy consumed to calculate hashes. This is important, because nobody can manipulate energy prices all over the world, so there is no way to manipulate the global hashrate and thus ensure an unfair advantage over the network.

In Proof of Stake, the cost is fully internal to the network, which is dangerous because <a href="https://cryptonews.com/news/major-bitcoin-crypto-companies-warn-of-extreme-risk-in-proof-of-stake-systems.htm" class="markup--anchor markup--p-anchor" data-href="https://cryptonews.com/news/major-bitcoin-crypto-companies-warn-of-extreme-risk-in-proof-of-stake-systems.htm" rel="noopener" target="_blank">if you can control a lot of coins</a>, either directly or indirectly (via the use of derivatives of staked coins or wrapped tokens), then it’s potentially cheaper and less complicated to influence the ordering and validating of transactions and blocks, therefore weakening security of the network.

Proof of less Work, by combining the requirement of external work and adjusting it with « some » internal costs on top allows a bit for the best of both worlds: staying secure while spending less energy.

**About Proof-of-Stake (PoS), why did you choose to optimize on PoW rather than build a PoS network, like most new Layer1s (Solana, Avalanche, Cardano, etc…) who have emerged this cycle?**

When we started working on Alephium, PoS was on an ascending trajectory, and all big new coins were mostly PoS, or aiming to become PoS. The wasted energy narrative about PoW was already there, but not yet as resounding as today.

At the end of the day, the choice of a consensus mechanism is (or can be) a principled decision: what does one want to achieve? We believe that Bitcoin’s focus on strong decentralization, proof of work and UTXO model has provided the best security for its network, allowing it to live up to its proclaimed values of disintermediation, permissionlessness and inclusiveness.

_In terms of technology_, PoW is simpler and better understood than PoS: it’s been field-tested by numerous projects over relatively long periods of time, and the crypto community is familiar with its security model. We know how to do it right, and its implementations are also more resistant to a lot of attacks.

_In terms of scale_, a lot of Proof of Stake projects function in fact more like delegated PoS, where few validators have outsize influence over the validation of blocks. For now, real PoS has not scaled enough, with enough value and usage on-chain to be considered that it has withstood the test of time. Actually, the current switch of Ethereum from PoW to PoS will be the first real big test for PoS in production. And it took them years to get there, getting through complexities in the PoS design, in small and big things. <a href="https://www.coindesk.com/layer2/2022/04/20/is-ethereum-staking-pool-lidos-growth-an-omen-of-centralization/" class="markup--anchor markup--p-anchor" data-href="https://www.coindesk.com/layer2/2022/04/20/is-ethereum-staking-pool-lidos-growth-an-omen-of-centralization/" rel="noopener" target="_blank">And there are already potential red flags.</a>

_In terms of security design and architecture_, on the non-tech side, PoS presents some security concerns around the derivatives of staked coins that could get massively flash-loaned to attack more or less any protocol (we’ve seen a lot of this in DeFi summer 1), and <a href="https://research.paradigm.xyz/MEV" class="markup--anchor markup--p-anchor" data-href="https://research.paradigm.xyz/MEV" rel="noopener" target="_blank">MEV which is extracting a lot of value out of unsuspecting users</a> and by extension the ecosystem, or just <a href="https://www.coindesk.com/layer2/2022/04/05/ronin-attack-shows-cross-chain-crypto-is-a-bridge-too-far/" class="markup--anchor markup--p-anchor" data-href="https://www.coindesk.com/layer2/2022/04/05/ronin-attack-shows-cross-chain-crypto-is-a-bridge-too-far/" rel="noopener" target="_blank">hacks</a>!

_In terms of distribution_, PoW seems to achieve a fairer distribution of coins than PoS. In Proof of Stake, you can only get coins by buying in the private or public sale and/or on the market. Running a validator can also cost a lot more money than a miner. In PoW, most of the coins are usually reserved for mining, leaving a bigger chance for small miners to make bank. Big funds tend to own a big part of the PoS coins, which is good for price, because they have less need to sell, but also tends to centralize the networks.

_In terms of attacks,_ PoS has an inherent advantage in having teams and people close to the team controlling often more than 50% of the tokens: they are more resistant to 51% attacks… until they aren’t!

**ABOUT MINING REWARD, FINALITY, ASICS & OTHER DISTINGUISHED TOPICS**

**We’ve talked a lot about the consensus mechanism here, but can you explain how does the block rewards mechanism work? It’s not so easy to understand either, and Alephium’s solution seems quite original!**

When mining on Alephium, a miner (or a mining pool) would receive a reward for the service provided to the network. This reward is itself composed of 2 main components: Transaction fees and Mining rewards.

The transaction fees are fairly easy to understand: it’s half of the sum total of all transaction fees paid by people transacting in a certain block (the other half is burned).

The mining rewards are themselves divided in two: a time-based component and a hashrate component:

The time based component starts fairly high and diminishes linearly for 4 years, because we want to incentivize people to mine more in the beginning to kickstart the network: it helps secure it AND it increases the fair distribution of coins into more pockets, which is important for the decentralization of Alephium.

Similarly, the hashrate based reward will be used to incentivise miners to mine up to a certain point, increasing emissions. But then, reaching a bigger level of hashrate (by an order of magnitude), it’ll even start diminishing because that’s where PolW is activated. You can find more detailed information about this mechanism <a href="https://medium.com/@alephium/alephium-block-rewards-72d9fb9fde33" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/alephium-block-rewards-72d9fb9fde33" target="_blank">in our article here</a>.

**Why is Alephium burning half of the transaction fees?**

In a measure not so dissimilar to <a href="https://eips.ethereum.org/EIPS/eip-1559" class="markup--anchor markup--p-anchor" data-href="https://eips.ethereum.org/EIPS/eip-1559" rel="noopener" target="_blank">EIP1559</a> on Ethereum, we think that transaction fees should be at least <a href="https://github.com/alephium/alephium/blob/master/protocol/src/main/scala/org/alephium/protocol/model/Transaction.scala#L228-L237" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/alephium/blob/master/protocol/src/main/scala/org/alephium/protocol/model/Transaction.scala#L228-L237" rel="noopener" target="_blank">in part burned</a>. We did this for the same reason as Ethereum: we want fairly stable transaction fees, and we like the deflationary impact this has on our (max) supply.

**Why did you choose the Blake3 algorithm?**

<a href="https://github.com/BLAKE3-team/BLAKE3" class="markup--anchor markup--p-anchor" data-href="https://github.com/BLAKE3-team/BLAKE3" rel="noopener" target="_blank">Blake3 is recent</a>, having been released in 2020, it has been developed by known and respected professionals in the cryptography ecosystem: Jack O’Connor, <a href="https://www.aumasson.jp/" class="markup--anchor markup--p-anchor" data-href="https://www.aumasson.jp/" rel="noopener" target="_blank">Jean-Philippe Aumasson</a>, Samuel Neves, and <a href="https://en.wikipedia.org/wiki/Zooko_Wilcox-O%27Hearn" class="markup--anchor markup--p-anchor" data-href="https://en.wikipedia.org/wiki/Zooko_Wilcox-O%27Hearn" rel="noopener" target="_blank">Zooko Wilcox-O’Hearn</a>. We know some of them, so we have an open line of communication with them, and that’s helpful.

We wanted <a href="https://www.infoq.com/news/2020/01/blake3-fast-crypto-hash/" class="markup--anchor markup--p-anchor" data-href="https://www.infoq.com/news/2020/01/blake3-fast-crypto-hash/" rel="noopener" target="_blank">a new hash algorithm</a> not used by any other PoW algorithm and spent quite some time thinking about this. There’s a risk with creating your own hash algorithm <a href="https://medium.com/@neha/cryptographic-vulnerabilities-in-iota-9a6a9ddc4367" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@neha/cryptographic-vulnerabilities-in-iota-9a6a9ddc4367" target="_blank">as the IOTA team eventually found out</a> in 2017. So we chose to go the easier way by using something already existent and proven: first because it is simpler to implement, second it makes it easier for devs to develop things on top of it, and third it’s going to be much easier to optimize.

Also you won’t have some miners who find an undue advantage and enjoy much higher hashrates because they found an edge in the complexity: you provide a more level playing field for everyone.

**Is this algo minable with FPGAs and ASICs? Is Alephium ASIC resistant?**

Alephium is not ASIC resistant. It’s a design choice we made. In the long term, <a href="https://medium.com/the-capital/the-big-controversy-what-is-asic-resistance-a8fcc2ffd580" class="markup--anchor markup--p-anchor" data-href="https://medium.com/the-capital/the-big-controversy-what-is-asic-resistance-a8fcc2ffd580" target="_blank">it’s almost impossible to avoid ASICS</a>: if your blockchain is popular and people want to mine it, they will find a way to build an adequate ASIC.

So you have only two solutions: hardfork regularly to change the algorithm <a href="https://kaykurokawa.medium.com/forking-for-asic-resistance-a-monero-case-study-ecdfb6c9fba2" class="markup--anchor markup--p-anchor" data-href="https://kaykurokawa.medium.com/forking-for-asic-resistance-a-monero-case-study-ecdfb6c9fba2" rel="noopener" target="_blank">as Monero is doing</a>, or you choose a simple algorithm and accept the fact that at some point people will conceive an ASIC.

There’s an added benefit to make your chain ASIC friendly, is that if you don’t, you’re stuck with GPU mining and people could theoretically rent a lot of GPU capacity and attack your chain. Whereas with ASIC (especially if you use an algorithm no one else uses), this would be out of reach.

**This is a bit of a different question, but since we’re here, I thought I’d ask. Why did you choose a 64 seconds block time? How long is time-to-finality in Alephium?**

This is a bit of a controversial topic. PoW on average has longer block times than PoS. In the short term, blocks that follow each other too quickly will put a lot of strain on the loads of the system and in the network, increasing capital expenses requirements for validators. And in the very long term (magnitude of years, decades), it’s the syncing of the blockchain when you want to participate which could become a very hard problem.

Also, for MEV attacks, you don’t give people enough time to react to the transactions in the mempool because you’re creating new blocks too fast. We have chosen 64 seconds (another magic number!) which is already closer to Ethereum’s blocktime (15s) than Bitcoins (10 minutes), but it could go to 5 to 10 seconds and still be ok. Sub-second finality seems complicated and probably not a good idea, at least as of now.

We chose a bit longer than Ethereum’s blocktime because we feel ETH produces a lot of uncles blocks (similar concept to orphan blocks in bitcoin) and this represents quite some overhead of storage and execution. So we sacrificed a bit of time to finality & transactions per second to ensure a more robust system for the long-term.

Finality in Alephium will depend as much from the value transacted as the hashrate mining the chains and the type of attack you want to defend from. This is similar as in other blockchains: you’ll be more patient when buying a house than when paying for coffee!

**To compensate this question of time-to-finality and to increase the number of transactions per second, it seems most blockchains will have sidechains, rollups or subnets. Is it possible to build Layer2s on top of Alephium?**

We do believe that over the long term, the blockchain space will be a mix of Level1 and Level2s and/or a mix of blockchains bridged in many ways. We are for sure seeing <a href="https://l2beat.com/" class="markup--anchor markup--p-anchor" data-href="https://l2beat.com/" rel="noopener" target="_blank">a lot of Layer2 activity</a> these days! We love the <a href="https://www.alchemy.com/blog/zero-knowledge-rollups" class="markup--anchor markup--p-anchor" data-href="https://www.alchemy.com/blog/zero-knowledge-rollups" rel="noopener" target="_blank">zk-rollups</a> experiments going on these days, and we think it’s amazing tech that is built there in terms of security and speed. It is also possible that Level2s take on a more specialized, application-specific role like you can see with <a href="https://aztec.network/" class="markup--anchor markup--p-anchor" data-href="https://aztec.network/" rel="noopener" target="_blank">Aztec</a> on Ethereum or <a href="https://teamkujira.medium.com/the-future-of-kujira-485d43c4729c" class="markup--anchor markup--p-anchor" data-href="https://teamkujira.medium.com/the-future-of-kujira-485d43c4729c" rel="noopener" target="_blank">Kujira</a> in the Cosmos Ecosystem.

It will of course be possible to build L2s on top of Alephium, nothing in our design prevents that. For some L2s, it might be a bit more complicated, because our L1 level is very lightweight, which means there are some very heavy cryptographic primitives that we have not included, at least as of yet. For example, some zk-level2s tools would be hard to implement on top of Alephium today, but if we see demand for these and the cryptography becomes efficient, we’ll add support for these at a later point in time, that shouldn’t be much of a problem.

**Thanks a lot for that discussion, it’s been fascinating, enlightening and a lot to take in!**

[View original.](https://medium.com/p/d90c5d220d29)
