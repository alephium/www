---
title: 'How Alephium Scales'
date: ''
description: 'Blockflow Sharding Algorithm Detailed — an interview'
---

### How Alephium Scales

### Blockflow Sharding Algorithm Detailed — an interview

<figure id="dd84" class="graf graf--figure graf-after--h3">
<img src="https://cdn-images-1.medium.com/max/800/1*cJlX_v5h0fS17OAZEW37Lg.png" class="graf-image" data-image-id="1*cJlX_v5h0fS17OAZEW37Lg.png" data-width="1344" data-height="768" />
</figure>

Back from the drawer! This is the third of a series of interviews on the technical innovations brought to the world by Alephium (first 2 were <a href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301" target="_blank"><em>Proof-of-Less-Work</em></a> _&_ <a href="https://medium.com/@alephium/tech-talk-2-mysteries-of-stateful-utxo-the-ultimate-guide-to-alephiums-accounting-model-and-de2cf2063615" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/tech-talk-2-mysteries-of-stateful-utxo-the-ultimate-guide-to-alephiums-accounting-model-and-de2cf2063615" target="_blank"><em>StatefulUTXO</em></a>_). The discussion was conducted in may of 2023, virtually in the presence of most of the Alephium team, who contributed to the questions and ensuing exchange. The following has been edited for clarity and concision, and optimized for readability. It has already been preceded by an_ <a href="https://medium.com/@alephium/an-introduction-to-blockflow-alephiums-sharding-algorithm-bbbf318c3402" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/an-introduction-to-blockflow-alephiums-sharding-algorithm-bbbf318c3402" target="_blank"><em>Introduction to Blockflow</em></a> _and_ <a href="https://twitter.com/alephium/status/1541711510178758658" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium/status/1541711510178758658" rel="noopener" target="_blank"><em>many</em></a> <a href="https://twitter.com/alephium/status/1668272076992413697" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium/status/1668272076992413697" rel="noopener" target="_blank"><em>Twitter</em></a> <a href="https://twitter.com/alephium/status/1681307477961482241" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium/status/1681307477961482241" rel="noopener" target="_blank"><em>threads.</em></a>

TL;DR: Sharding Concepts / What is Blockflow? / Single-step cross-group transactions / Groups and Chains / Transaction fees & Block rewards / Security in a sharded blockchain

### Sharding Concepts

**Vladimir Moshnyager: Hi Cheng! Today’s discussion is about scaling a blockchain through sharding, so naturally, the first question is, what is Sharding?**

Cheng: <a href="https://medium.com/@alephium/sharding-d50968b8b229" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/sharding-d50968b8b229" target="_blank">Sharding</a>, in general, is a divide-and-conquer mechanism in computer science. In the context of databases for example, if you have a very large one, you cannot handle it with just one machine or one table. You want to partition it into multiple tables and potentially host it on multiple machines. This allows you to handle the data in parallel with more resources without requiring a high-end computer.

In a Blockchain, we face similar scaling problems, and sharding is a good solution. Sharding involves splitting the blockchain into multiple chains, enabling the processing of transactions and blocks in parallel across these sharding blockchains. The goal is to improve scalability in blockchain systems.

<figure id="2813" class="graf graf--figure graf--iframe graf-after--p">

</figure>

**Vladimir Moshnyager: Is it the algorithm itself that’s doing the sharding?**

Cheng: Sharding is more of a high-level concept or paradigm. It’s about partitioning data on a blockchain, but there isn’t a single “one-size-fits-all” algorithm for sharding. The approach to sharding can vary depending on the specific use case and application. Sometimes, it might not even be feasible to shard data.

In Web 2.0, there are various ways to implement sharding depending on the application, just as there are different algorithms for search engines like PageRank. Similarly, in blockchain, while the high-level idea of sharding seems straightforward, implementing it is complex. You need to ensure the ledger’s security when storing transactions in different chains, which can be challenging.

**Vladimir Moshnyager: Why did you decide to choose sharding as a scaling mechanism for Alephium, given that there are other ways to scale, like Layer 2s or off chain scaling?**

Cheng: There are multiple reasons to pursue sharding as a scaling mechanism for Alephium. It’s been a mix of technical considerations and timing. In 2018, <a href="https://github.com/ethereum/sharding/blob/develop/docs/doc.md" class="markup--anchor markup--p-anchor" data-href="https://github.com/ethereum/sharding/blob/develop/docs/doc.md" rel="noopener" target="_blank">the Ethereum Foundation began exploring sharding</a>, generating a lot of hype around it. While I looked into these early efforts, I was not satisfied with their inherent complexity and saw many potential issues in this early approach. This led me to start thinking deeper about sharding. Soon, these ideas had matured into a prototype. The Ethereum Foundation’s efforts and the significance of scalability as a challenge (and the famous <a href="https://www.ledger.com/academy/what-is-the-blockchain-trilemma" class="markup--anchor markup--p-anchor" data-href="https://www.ledger.com/academy/what-is-the-blockchain-trilemma" rel="noopener" target="_blank">blockchain trilemma</a>) motivated me further.

Scalability has always been a core problem in distributed systems, which aligns with my background and interests. So, in 2018, we founded the Alephium project and committed to working on sharding.

**Vladimir Moshnyager: What other sharding algorithms or projects have you been watching, and what interesting developments have you seen?**

Cheng: There have been numerous experiments and projects related to sharding in the blockchain space. Notably, Ethereum 2.0, which has faced delays, and other projects like NEAR blockchain, have <a href="https://near.org/papers/nightshade" class="markup--anchor markup--p-anchor" data-href="https://near.org/papers/nightshade" rel="noopener" target="_blank">proposed sharding solutions</a>. NEAR has made progress in delivering sharding based on proof of stake.

Kaspa has made some great theoretical improvements, improving over other DAG-based blockchains like <a href="https://confluxnetwork.org/en" class="markup--anchor markup--p-anchor" data-href="https://confluxnetwork.org/en" rel="noopener" target="_blank">Conflux</a>. DAG-based blockchains face their own set of challenges (the overhead of such approaches can be high), and personally, I’m more inclined towards sharding solutions.

However, the landscape is complex, with different approaches and implementations. It’s challenging to keep up due to the ever-changing roadmaps and complexities of sharding! Polkadot & its parachains, Ziliqa which doesn’t support state sharding, Kadena & its braided structure called “chainweb”, etc…

**Vladimir Moshnyager: In hindsight, knowing the challenges and time required, would you still have embarked on this sharding crusade?**

Cheng: Yes!

However, it’s a daunting task to create a whole ecosystem from scratch. The complexity can be unpredictable, and overcoming it often takes longer than expected. But we are optimistic engineers and hard-working builders, and we thrive on challenging projects, even when the road ahead is uncertain.

### What Is Blockflow?

**Vladimir Moshnyager: Thanks for the intro, but now we want to understand. So, what specific problem does BlockFlow solve?**

Cheng: BlockFlow tackles the scalability problem using sharding.

As we said, scalability is complex and can involve scaling up or scaling out. Scaling up involves increasing a blockchain’s throughput while scaling out involves running multiple blockchains in parallel for higher throughput. BlockFlow primarily focuses on the latter, allowing multiple blockchains to work in parallel and achieve higher throughput. This, in turn, reduces gas fees for users due to increased capacity.

**Vladimir Moshnyager: Great explanation. Can you explain what BlockFlow is and how it works in more detail?**

Cheng: Certainly, I’d describe it this way: think of a single blockchain, the classic one with only one chain of blocks. Now, imagine you want to scale it using sharding, creating multiple blockchains. But then, you need to safely transfer funds between these blockchains and validate the correctness of these cross-chain transactions. This is the challenge. We have devised a new way to solve this using a DAG (Directed Acyclic Graph) data structure.

<figure id="3cb9" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*v8qnPLi8R3nu6yiS" class="graf-image" data-image-id="0*v8qnPLi8R3nu6yiS" data-width="828" data-height="648" />
</figure>

Typically, when people shard a blockchain, they introduce a linear system. They take one chain and divide it into N blockchains. Alephium’s approach is more like a 2D perspective. We view blocks as containers for transactions between different groups, splitting transactions based on source and target groups. This two-dimensional perspective allows for efficient sharding. The advantage is that transaction dependencies are naturally embedded into the block structure, reducing the problem of proving these dependencies’ correctness in consensus rules.

It’s a blend of proof of work and DAG with a particular partitioning approach, enabling single-step cross-chain transactions, which is unique.

**Vladimir Moshnyager: I see. What trade-offs have you made with BlockFlow’s solution?**

Cheng: There are trade-offs, indeed. The most significant one is the increased validation workload. In BlockFlow, validation becomes heavier because transaction dependencies need to be validated. Due to these dependencies, the block headers also contain more data than Bitcoin or Ethereum. So, you need to store and validate more blocks, which can be resource-intensive.

Comparatively, if you want to scale the blockchain to a certain level, you’ll have more data than Bitcoin or Ethereum. So, we need more data, more CPU resources, and more validation work. It’s inevitable when aiming for higher scalability. However, these days, most people still run full nodes on a single laptop.

**Vladimir Moshnyager: I understand. It seems like a balance between scalability and resource demands. You mentioned earlier that BlockFlow focuses on sharding at the Layer 1 level. Could Layer 2 solutions extend scaling even further?**

Cheng: Yes, exactly. Think of it like Web 2.0. We intend to combine sharding (on layer 1) and scaling out (layer 2s). The base layer is great for handling settlement transactions, token transfers, and ensuring a high level of decentralization, but for more application-specific functionality, Layer 2 solutions make sense.

However, the actual use cases and their evolution can vary, so it’s hard to predict the future accurately. In any case, our focus is on building the infrastructure, and how people use it will emerge over time. The key is that Layer 1 should prioritize decentralization, while Layer 2 can explore various possibilities with different trade-offs.

**Vladimir Moshnyager: Could you provide a more detailed explanation of how BlockFlow works? We have four groups of four chains. There are dependencies from inside the groups and across groups. Can you elaborate on that?**

Cheng: Absolutely. When we want to create a new block on a chain, say, in Group 1, we first examine the current state of the whole Alephium blockchain. In BlockFlow, we have 16 chains and four groups (as of now). So, when creating a new block in Group 1, we will select a few dependencies.

These dependencies are blocks from different chains, and selecting them is part of the Blockflow algorithm. We choose one dependency from each group. For instance, for each Group N, we pick a specific chain known as the Intragroup Chain, which deals with transactions within that group. We select the latest blocks from each Intragroup Chain as the dependency.

In addition to the blocks from the intragroup chains, for the chain where we want to build the next block, we also choose the latest block from each chain connected to this group. Once we’ve made the right selections, we include the hashes of these blocks in the new block’s header. After we completed this process, we created a new block.

<figure id="9d15" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*2ItX4xZtGZm0yezP" class="graf-image" data-image-id="0*2ItX4xZtGZm0yezP" data-width="781" data-height="632" />
</figure>

This process takes place in parallel across all the different blockchains. Importantly, there’s no need to wait for other chains to progress. (You can see this explained in more detail <a href="https://medium.com/@alephium/an-introduction-to-blockflow-alephiums-sharding-algorithm-bbbf318c3402" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/an-introduction-to-blockflow-alephiums-sharding-algorithm-bbbf318c3402" target="_blank">here</a>, and use this <a href="https://visualizer.alph.land/" class="markup--anchor markup--p-anchor" data-href="https://visualizer.alph.land/" rel="noopener" target="_blank">tool to see it in real-time</a>).

**Vladimir Moshnyager: So, it’s a highly parallelized process that keeps the chains moving forward without waiting for one another. That sounds efficient! If I have an address on a specific chain within a group, can I send a transaction to someone on a different chain in a different group? How does that work?**

Cheng: Addresses are specific to groups, not chains. If you have an address in Group 1, you can indeed send a transaction to someone in Group 2, for example. There are no restrictions on inter-group transactions, and the system manages these links and dependencies automatically.

**Can you explain more about the distinction of the address being inside the group instead of inside the chain? And describe how a transaction happens?**

**Cheng:** We are working to render the underlying complexities invisible to the users to enhance the user experience (UX). They don’t need to delve into the details. We have implemented a group concept for addresses. Underneath this concept, you can visualize each group as supported by a Merkle tree structure. Currently, we have four <a href="https://medium.com/newcryptoblock/sparse-merkle-tree-introduction-a267f3a29223" class="markup--anchor markup--p-anchor" data-href="https://medium.com/newcryptoblock/sparse-merkle-tree-introduction-a267f3a29223" target="_blank">Sparse Merkle tries</a> groups in the system, each holding the data of different addresses. Essentially, the UTXOs of various addresses are stored in these Merkle trees.

These Merkle tries are exclusively designated for that specific group. This is why we say the addresses belong to that group; it indicates that the data and status of all addresses in that group are stored in a unified location, a feature distinctly different from blockchain blocks, which are essentially transaction records, devoid of any other data.

When transactions are incorporated into blocks, it alters the state of the blockchain. In our scenario, it changes the state of that particular group. Each group operates with four chains, all influencing a shared Merkle tree which belongs to that group.

For instance, if a transaction is initiated from Group 0 to Group 1, it changes the state of Group 0, leaving Group 1 unaffected for the time being. Even if another transaction occurs from Group 0 to Group 0, it still only affects Group 0. These transactions can also call Smart Contracts, altering the Smart Contract state of Group 0.

<figure id="8e48" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*5Fr47Vc_NRx8ochf" class="graf-image" data-image-id="0*5Fr47Vc_NRx8ochf" data-width="670" data-height="958" />
</figure>

So, when will Group 1’s state change, given that it will receive coins? This change happens when a new block is created in a shard connected with Group 1, as it is consistently utilizing Group 0 as a reference for dependencies, verifying the inclusion of the new transaction as a dependency for Group 1.

To better illustrate it, if a new block in Group 1 identifies a committed transaction in Group 0 transferring coins to Group 1, it triggers a change in the local state of Group 1. This involves updating the Merkle tree to note the receipt of coins from Group 0, enabling their utilization in Group 1. That’s basically how transactions happen under the hood.

### Single-step cross-group transactions

**Vladimir Moshnyager: Cheng, can you explain what a single-step cross-group transaction is?**

Cheng: Let me give some more context on that by comparing it with the “usual” approach. When you want to make a cross-group transaction, usually, you have to do multiple transactions. For example, you make a transaction, and then you commit this to your local chain, and then you’re going to hope that this transaction or the block is committed to the main blockchain.

Then the main blockchain would forward some information to the target blockchain, and then you can use the coin in the target blockchain. It’s quite a complicated design! It is not user-friendly, and it will create some troubles for developers as well because whenever you do such transactions, you need to keep waiting for a series of events to happen. Then it also adds a lot of complexity down the line, for example, for wallets designers: they would need to monitor a lot of things, and if there are failures, they need to figure out and tell their users about what happened… these things are non-trivial!

This is why having a single step is very important!

In computer science, we call these atomic transactions. Atomicity is key for users and developers: you do the action, you call it, and it will either succeed or fail. There won’t be some intermediate, complicated state. It’s the same in the case of blockflow: you make cross-group transactions from one group to another group. The users don’t need to care about the groups.

**Vladimir Moshnyager: That is something where Alephium is unique, no other sharded blockchain is able to do that.**

Cheng: Alephium is the only one, as far as I am aware. Simplicity is very important. The more complicated the protocol, the more issues you’ll have. It becomes harder to build, harder to ensure it’s robust, and probably has higher delays as well. Single-step cross-group transactions are easy to use, clear-cut, and simple to understand.

> No Shrödinger cat transaction here, it either happens, or not!

### Groups and Chains

**Vladimir Moshnyager: How does the algorithm check the dependencies between these different chains?**

Cheng: That’s the issue of double spending, similar to what would happen in a single blockchain. When miners receive a new block, they will have a view of the whole BlockFlow based on dependencies. As of today, each block has seven dependencies. You can get the latest block of all the chains from these seven dependencies. Then, you can check if there are any conflicts in those transactions.

It’s more resource-intensive than checking a single blockchain, but it’s the same mechanism: you first use all of the dependencies to verify the latest block of all different chains, and then check if there are some conflicts in them.

Two miners may mine the same block simultaneously but with different and even conflicting transactions. At that point, when they are computing the dependencies, they’re going to check the conflicts: if there are, they won’t include both competing transactions, they will just include one of them or none of them. The selection is proof of work-based. The one with the highest length usually gets selected first.

**Vladimir Moshnyager: We have four groups and four chains, and we could go much higher. We could go up to how many, 128?**

Cheng: Yes, 32 groups and 1024 chains.

**Vladimir Moshnyager: How do you see the path to increase the number of groups? Could that be a community decision, and it would just be a parameter change somewhere? How do you tune up the BlockFlow?**

Cheng: I think the change should be based on the practical use case, which would require a network upgrade. If the network is very congested, we should ask ourselves whether we should go for an L2 solution or scale the L1.

In this case, there will be some conversations happening, and then it depends on who will implement it. Most likely, when there’s a need (and we’re not there yet!) I think it will be driven by the community, not by the core team.

### Transaction fees & Block rewards

**Vladimir Moshnyager: Since the transaction fees are entirely burnt, there’s no risk that the miners oppose one way or another or start a political campaign to oppose the scaling of the blockchain, as we have seen before in Bitcoin, right?**

Cheng: That’s actually a good point. In Alephium, the miners don’t rely on the transaction fee for mining proceeds, so they have no motivation to prevent that from happening.

**When the emission schedule was projected, it was estimated to last around 80 years. What did you assume when scaling the number of shards?**

Cheng: Right now, we have 4 groups and 16 chains. If we scale it to, for example, 8 groups and 64 chains, we divide the block reward by four times. In that way, the total emission is not going to change.

In terms of mining rewards, the number of chains itself plays a role but is not a “global parameter.” Global parameters are hash rates and block timestamps, as described in the <a href="https://medium.com/@alephium/alephium-block-rewards-72d9fb9fde33" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/alephium-block-rewards-72d9fb9fde33" target="_blank">mining rewards article</a>.

Then, the block reward has to be divided by the number of chains. Otherwise, if we have 16 chains, the emission will be 16 times higher, which is not what we want. We will make sure that the global emission schedule doesn’t change.

**Vladimir Moshnyager: When will we Change from 4 to 16 groups? That means that the hash rate has to be distributed instantly from one block to the next; otherwise, we lose security for a moment. Is this something that seems easily feasible?**

Cheng: This will be relatively easy, similar to what happened for the Genesis launch.

You just put a constant there, as you can easily estimate the network hash rate for several days and get an average. Then, you ensure those new blockchains will start with that estimated average hash rate divided by the number of chains.

### Security in a sharded blockchain

**Vladimir Moshnyager: If we expand the number of chains to 1024, what happens if an attacker attacks one chain very heavily? He would basically only have to compete against less than 1% of the hash rate to, for example, slow one chain. Then what happens to the network?**

Cheng: It’s similar to the traditional 51% attack on a single blockchain. If your hash rate is lower than 51% of the whole network, you cannot rewrite it. Most likely, your blocks will be discarded. It’s the same principle but applied to the entire network.

**Vladimir Moshnyager: Can they disrupt one chain enough to disrupt the whole network?**

Cheng: If they keep mining or sending a lot of transactions on one specific chain, it can affect the usability of that chain, but it won’t break the entire network. Other chains will continue to function well, and it might introduce more orphan blocks to that specific chain, but the overall network’s security won’t be compromised significantly. Essentially, it would make that specific chain much faster.

In practice, such attacks are unlikely, especially as the ecosystem grows. Specialized hardware and incentives for miners to support the network make it less likely that they would attack it.

**Vladimir Moshnyager: We want to scale TPS significantly beyond Ethereum and other platforms. What are the interesting leads for optimization in the future for BlockFlow?**

Cheng: Currently, BlockFlow is in good shape. We are making an adjustment in the <a href="https://medium.com/@alephium/block-time-and-block-size-16e37292444f" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/block-time-and-block-size-16e37292444f" target="_blank">block time</a>, reducing it from <a href="https://twitter.com/alephium/status/1738220571832594612" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium/status/1738220571832594612" rel="noopener" target="_blank">64 seconds to 16 seconds</a> with the <a href="https://twitter.com/alephium/status/1745820715054698901" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium/status/1745820715054698901" rel="noopener" target="_blank">Rhône Network Upgrade</a>, but there are other parameters to change, such as the number of chains, the number of groups, and potentially reevaluating the fee market as our ecosystem evolves.

**Vladimir Moshnyager: Is there an easy way to visually represent the blocks and their dependencies in BlockFlow?**

Cheng: Visualization is challenging, especially with 2D data. While we had a basic prototype for visualizing BlockFlow, it wasn’t efficient for production use. <a href="https://www.youtube.com/watch?v=lasTOXkMr1k" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=lasTOXkMr1k" rel="noopener" target="_blank">Visualizing BlockFlow’s 3D structure</a> is complex and resource-intensive, but the community developed <a href="https://visualizer.alph.land/" class="markup--anchor markup--p-anchor" data-href="https://visualizer.alph.land/" rel="noopener" target="_blank">a great tool to see it</a> as a <a href="https://medium.com/@alephium/hackathon-1-pioneers-submissions-76b869089ace" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/hackathon-1-pioneers-submissions-76b869089ace" target="_blank">submission on our first hackathon</a>.

---

This is the end of this long-form interview about Blockflow!

Are you interested and would like to know more? Find the <a href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/tech-talk-1-the-ultimate-guide-to-proof-of-less-work-the-universe-and-everything-ba70644ab301" target="_blank">Proof-of-Less-Work</a> & <a href="https://medium.com/@alephium/tech-talk-2-mysteries-of-stateful-utxo-the-ultimate-guide-to-alephiums-accounting-model-and-de2cf2063615" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/tech-talk-2-mysteries-of-stateful-utxo-the-ultimate-guide-to-alephiums-accounting-model-and-de2cf2063615" target="_blank">StatefulUTXO</a> long interviews! Want <a href="https://docs.alephium.org/Content/#tech-series" class="markup--anchor markup--p-anchor" data-href="https://docs.alephium.org/Content/#tech-series" rel="noopener" target="_blank">more</a>?

Please come to Alephium’s <a href="https://alephium.org/discord/" class="markup--anchor markup--p-anchor" data-href="https://alephium.org/discord/" rel="noopener" target="_blank">Discord</a>, <a href="https://t.me/alephiumgroup" class="markup--anchor markup--p-anchor" data-href="https://t.me/alephiumgroup" rel="noopener" target="_blank">Telegram</a>, or reach out on <a href="https://twitter.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium" rel="noopener" target="_blank">Twitter</a>!

[View original.](https://medium.com/p/698a2a86e45b)
