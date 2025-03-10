---
title: 'Alephium Twitter Space — PoW and Decentralization, part I'
date: '2023-02-08'
description: 'Alephium hosted a Twitter Space on 24/01/2023 with Jordan from Nervos Network, and Cheng Wang & Hongchao Liu from Alephium to talk about…'
---

### Alephium Twitter Space — PoW and Decentralization, part I

![](https://cdn-images-1.medium.com/max/800/1*2Du6Ew_wbpAOXUa99yp88g.jpeg)

Alephium hosted a Twitter Space on 24/01/2023 with <a href="https://twitter.com/jordan_mack" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/jordan_mack" rel="noopener" target="_blank">Jordan</a> from <a href="http://www.nervos.com" class="markup--anchor markup--p-anchor" data-href="http://www.nervos.com" rel="noopener" target="_blank">Nervos Network</a>, and <a href="https://twitter.com/wachmc" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/wachmc" rel="noopener" target="_blank">Cheng Wang</a> & <a href="https://twitter.com/hongchao" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/hongchao" rel="noopener" target="_blank">Hongchao Liu</a> from <a href="http://www.alephium.org" class="markup--anchor markup--p-anchor" data-href="http://www.alephium.org" rel="noopener" target="_blank">Alephium</a> to talk about Proof of Work (PoW) and Decentralization. It was a great conversation, and a series of articles will transcript the main topics discussed, and you can access the whole conversation <a href="https://www.youtube.com/watch?v=FLmxAHolDMc" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=FLmxAHolDMc" rel="noopener" target="_blank">here</a>.

In this part one, the focus will be on an introduction to Nervos Network and Alephium, and details on both projects' **Proof of Work (PoW) implementation.**

### About Nervos and Alephium

Question: **Jordan, can you introduce Nervos? What is it, where it comes from, and from when?**

**Jordan:** Nervos is a platform born out of a necessity for new solutions for many of the problems on Smart Contract blockchains today. It emphasizes long-term sustainable decentralization and security and uses a multi-layer design to attain scalability. Flexibility is another cornerstone of the platform, which allows smart contracts to execute on a RISC-V-based virtual machine, which emulates RISC-V real-world hardware. This means the smart contracts are executed on bare metal at the lowest possible level, giving the developer the maximum flexibility possible.

And the reason it\`s doing that is that this enables it to adopt new features faster because there are fewer limitations to the platform. I believe that the platform’s development started in 2018, the mainnet was launched in 2019, and is approaching the first halving this year, as it halves every four years, just like Bitcoin does.

Question: **Cheng, can you introduce Alephium and its genesis? Since when has it been around, what is it, and what does it do best?**

**Cheng:** The project started to tackle the scaling problem in blockchains. I followed the Ethereum Foundation’s work on sharding and scalability, but I wasn’t satisfied with their complex approach. Instead, I was drawn to Bitcoin’s simple and elegant design philosophy.

After further research, we developed a new algorithm called Blockflow. It’s based on proof of work and UTXO and aims to scale Bitcoin while maintaining its security and decentralization. I’ve been working on Alephium full-time since 2018.

In 2019, the DeFi trend caught our attention, and we saw the potential for UTXO sharding in building secure decentralized applications. We then focused on the virtual machine and dApp features for Alephium.

We’ve finished the core technical designs, and our goal is to build a scalable and secure platform for the next generation of decentralized applications. This year, we plan to prove that we’ve achieved this goal.

Question**: We’ve read with great interest the latest dev update published by Jan Xie called Metabolism! Can you tell us a bit more about your team and the ecosystem? Where is Nervos now?**

**Jordan:** Nervos has five founders, all of which are blockchain veterans in the industry. The Chief Architect is Jan Xie, a former Ethereum core developer. While working at Ethereum, Jan realized that several problems he didn’t feel were fully solvable without radically breaking design changes. He ended up creating a brand-new blockchain, which became Nervos.

Nervos is designed to be decentralized from a technology and governance standpoint. Five or six separate companies are dedicated to building out Nervos’ technology, and many more teams are building on top of the platform, primarily through an accelerator called Build Club.

Currently, the network side has two layers: the CKB chain is layer one, and Godwoken is the EVM-compatible layer 2. We also have multiple bridges to Ethereum and many other chains. Godwoken has branded itself as a game plus blockchain, actively focusing on the gaming market. And CKB, the L1, is rolling out a bunch of new features and infrastructure this year, along with new tooling, documentation, and a whole bunch of new design solutions, which we hope will make it a lot easier for developers in the ecosystem.

The last product I should probably mention is Axon, a brand new side-chain framework coming out. It’s more for application-specific Blockchains, kind of like Cosmos. So if you’re familiar with that, it was recently deemed ready for production. And it’s being used by a couple of teams building on it right now, so we should see the first products this year.

Question: **Can you tell us more about the Leman Network Upgrade?**

**Hongchao:** I’m a core dev at Alephium, and my name is Hongchao. I am keenly interested in asymmetric technologies, especially blockchain, and their potential to empower ordinary people. This initially drew me to Alephium and has kept me engaged in the project ever since.

<a href="https://medium.com/@alephium/the-leman-upgrade-ama-most-relevant-topics-and-questions-1fbbc68d4237" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/the-leman-upgrade-ama-most-relevant-topics-and-questions-1fbbc68d4237" target="_blank">The Leman Upgrade</a> is a significant milestone in Alephium’s history and has been in the works for some time now. It brings numerous updates to the platform’s functionality, security, and performance. These updates aim to make smart contract development more efficient, secure, and user-friendly.

One of the key updates in the Leman Upgrade is the introduction of a new set of Virtual Machine (VM) instructions and building functions. These functions make smart contract development more efficient by providing dynamic array indexing, secure subcontract systems, and building functions to facilitate debugging and logging. These updates help to streamline the development process and make it easier for developers to build secure and reliable decentralized applications.

Another improvement is the new Asset Permission System. This system allows developers to control the use of assets in a contract before a function call. This enhances the security of smart contracts and helps prevent unintended actions.

The Leman Upgrade also includes a system to check external calls. This feature requires explicit authorization for anyone who wants to call a public method of a smart contract that can mutate the state of the contract. This helps to prevent security issues that are often associated with external calls.

In addition to these updates, the Leman Upgrade also improves the node APIs and SDK to make the development of smart contracts easier. This includes tools for coding unit tests, integration tests, deployment, and more. The development experience is similar to popular tools like Truffle and Hardhat, making it accessible and intuitive for developers.

The Leman Upgrade has paved the way for Alephium to build prototypes for decentralized projects, such as NFTs Marketplaces. These projects were way more difficult to build before it.

### Details of PoW implementation in Nervos & Alephium

Question: **It’s not “cool” or popular to be a PoW partisan these days. So there must be strong reasons for anyone to build (or contribute to building) a Proof-of-Work chain these days. Can you explain why you chose PoW when conceiving (or deciding to work for) your respective blockchains?**

**Jordan:** I agree with that sentiment these days: proof of work is not seen as the green option. If I’m being completely honest, there was a point where I was concerned about it, but I no longer believe that that’s the case. When you look at the reality of what’s going on and especially looking into the future, of where the technology is headed and what innovations are coming, ultimately, proof of work by utilizing energy in the most efficient way possible is, is the cheapest. And since it’s a competitive platform, it naturally gravitates towards green energy of all kinds. So I no longer see it as a problem. And the reasons why we would select proof of work for our chain are some of the most common reasons: it’s the most well-understood.

It’s a very simple-to-understand type of system where you can understand every detail about it. Whereas some other things, like proof of stake, are very complicated once you start looking at the implementation. And it’s also very much battle tested as, we’ve seen, it’s the only method that has a long history behind it since Bitcoin started with it in 2009. And our observations are that it is still the most decentralized for numerous reasons. And when you look at what’s going on with proof of stake today, there were predictions about its centralization. And especially with Ethereum, we, unfortunately, see those to be true. And I’m not necessarily bashing proof of stake here, it has certain merits. But when you’re trying to create an ecosystem that is truly decentralized, especially on layer one, proof of stake doesn’t seem like it’s necessarily the best option for that. And so, at Nervos, we have many different options and layers, and we continue to use proof of stake on the higher layers. But for layer one, we saw there was no alternative here. We needed the absolute best. And at this point in time in history, proof of work is still the best.

**Cheng**: I want to add a bit more technical perspective, expanding on the simplicity of Proof of Work as a consensus algorithm. As Jordan said, Proof of Work has a long and well-documented history, making it straightforward to understand and implement. In contrast, Proof of Stake requires more computing power and network resources to verify messages from multiple validators and on-chain resources to manage these validators. This can result in high costs, particularly when running a full node in a large-scale decentralized system.

Alephium is a sharded blockchain. The traditional approach to scaling blockchains, such as the one proposed by the Ethereum Foundation, is highly complex and involves a beacon chain to manage all the validators and shuffle them randomly among different shards. However, Alephium takes a different approach by introducing the Blockflow algorithm.

The Blockflow algorithm is based on the proof of work consensus mechanism and does not require a beacon chain. Instead, all the blockchains can operate in a stateless mode, meaning that each blockchain does not need to know the state of the others. This approach is a significant advantage over proof of staking because it eliminates the need for a centralized beacon chain and the associated complexity.The only to make that happen was to use proof of work.

Finally, I want to reiterate what Jordan mentioned earlier about proof of stake being relatively new and still having some unresolved issues. One of the main challenges is related to the network effects of staking. The idea behind proof of stake is that it incentivizes individuals to run full nodes, thus contributing to the network’s decentralization. However, in reality, many people delegate their stake to third-party providers, which could harm the network’s decentralization. This area requires more time and observation to understand its evolution and potential impact.

Question: **How is the PoW implementation of Nervos and Alephium different from Bitcoin’s? And what kind of** <a href="https://medium.com/@alephium/transactions-per-second-tps-f13217a49e39" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/transactions-per-second-tps-f13217a49e39" target="_blank"><strong>TPS (Transaction per Second)</strong></a> **and** <a href="https://medium.com/@alephium/block-time-and-block-size-16e37292444f" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/block-time-and-block-size-16e37292444f" target="_blank"><strong>Block Time</strong></a> **can be achieved with the current implementation?**

**Jordan:** Our implementation is called NC-Max. The NC part of that stands for Nakamoto Consensus. So it’s similar to Bitcoin’s Nakamoto consensus, but it’s been modified in certain ways to improve certain problems that Nakamoto Consensus has. The first one is that it actually uses a two-step process of proposing blocks, proposing transactions, and confirming transactions, which improves block propagation time and helps prevent selfish mining attacks.

The second thing that’s much different is that it uses a dynamic block time, which automatically adjusts to network conditions to give the shortest block time without compromising security. Because of the dynamic block time, it can change up and down, but it generally runs at under 10 seconds per block which gets us approximately 200 TPS, which is about 10 times what Ethereum has today.

And all of this is possible while running on a Raspberry Pi device, just like Bitcoin does. And that’s just L1, which doesn’t include the other layers. If you include other layers, it’s, of course, much higher. It’s a similar approach in some ways to multilayer, and sharding works similarly in that approach: that’s how you increase the amount of TPSs. But strictly speaking, it is approximately 200 TPS on just L1. And the block size is, I believe it’s 597,000 bites which it’s the estimated amount to pack in 1000 basic transactions per block. So anyway, it’s one of those every 10 seconds, it ends up equating to what I had said before, approximately 200 TPS.

**Cheng:** We use <a href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301" target="_blank"><strong>Proof of Less Work</strong></a> to mitigate the energy consumption of the classic proof of work. Does it still make sense to spend <a href="https://www.coindesk.com/tech/2021/04/22/everything-we-want-costs-energy-including-bitcoin/" class="markup--anchor markup--p-anchor" data-href="https://www.coindesk.com/tech/2021/04/22/everything-we-want-costs-energy-including-bitcoin/" rel="noopener" target="_blank">0.3% of the global electricity</a> on Bitcoin? Some of this consumption can be avoided by designing the protocol differently.

That’s what we do with Proof of Less Work. We shift part of the energy consumption from the physical world to the internal network by burning coins. It means miners need to both consume electricity and consume, or burn, coins to mine blocks. In this way, the cost and the security are the same, but the total energy consumed is greatly reduced.

Regarding TPS, because we are sharded blockchain, the final TPS depends on the number of shards in the network. Right now, with 16 shards and with very conservative parameters, we can easily get to 400 transactions per second. And, if there is a huge demand for transactions in the future, we can increase the number of shards. Our block time is currently set up in 64 seconds. So we try to find the balance between a long and short block time because if the block time is too short, the blockchain will have a high orphan block rate.

For example, in Ethereum, with a 15 seconds block time, the uncle rate is 10%ish. Because we wanted the protocol to be very lightweight and efficient, we chose a slightly higher block time and ended up with 64 seconds. For a proof of work blockchain, the security is about the confirmation time, not block time. So it depends on how many blocks there are in total and how much work the transaction has accumulated since the submission to the blockchain.

Question: **Neither Alephium nor Nervos is ASIC-resistant. Can you explain these choices of design?**

**Jordan:** We did not want to make something ASIC-resistant. I’ve done a lot of mining in the past and had mining rigs with GPUs and ASICs. And I can say that from a hobbyist standpoint, I’m a fan of GPU mining. I like it better. But there’s no good way to prevent the eventuality that ASICs come out and, generally, replace GPUs other than constantly rotating your algorithm. So, the important thing to look at is: Are ASICs actually bad? And from our standpoint, we think it might be a good thing because when you get specialized hardware built into your ecosystem, it’s a show of support in certain ways. After all, people are investing in hardware that can only be used on a single platform.

That goes hand in hand with using an uncommon or unique hashing algorithm. When you pair those two together, companies invest in your ecosystem to produce this hardware. And then your miners are also investing in your chain as well. So they’re much less likely to attack it because if they did, they would render their hardware obsolete, and it would take quite a bit of hardware to attack it. And from that standpoint, we see it as a safer option to allow ASICs to be on the platform and use a unique hashing algorithm.

**Cheng:** I agree with Jordan. And being ASICs friendly works well in practice, as proven by Bitcoin, so I have nothing more to add.

---

This closes this first part! In the next one, **_UTXO, Sharding & Scalability, and more…_** If you have questions or want to know more, please come to Alephium’s <a href="https://discord.gg/JErgRBfRSB" class="markup--anchor markup--p-anchor" data-href="https://discord.gg/JErgRBfRSB" rel="noopener" target="_blank">Discord</a>, <a href="https://t.me/alephiumgroup" class="markup--anchor markup--p-anchor" data-href="https://t.me/alephiumgroup" rel="noopener" target="_blank">Telegram</a>, or reach out on <a href="https://twitter.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium" rel="noopener" target="_blank">Twitter</a>!
