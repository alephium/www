---
title: 'TECH TALK #2 — Explore the Mysteries of stateful UTXO: The Ultimate Guide to Alephium’s accounting…'
draft: true
description: 'A discussion with Cheng Wang, inventor of statefulUTXO and founder of Alephium'
---

###

**TECH TALK \#2 — Explore the Mysteries of stateful UTXO: The Ultimate Guide to Alephium’s accounting model**

_A discussion with Cheng Wang, inventor of statefulUTXO and founder of Alephium_

This is the second of a series of interviews on the technical innovations brought to the world by Alephium. The discussion was conducted in September 2022, in a virtual format in presence of most of the Alephium team who contributed to the questions and ensuing exchange. The following has been edited for clarity, concision and optimized for readability. It will be followed by an AMA and has already been preceded by an Introduction to sUTXO.

The Stateful UTXO is an evolution from the UTXO model and the Account model. It is a unique technology from the Alephium blockchain that takes the best characteristics of both models. In this interview-style article, we will explain in detail why it is essential and which problems it helps to solve.

### AN INTRODUCTION ON ACCOUNTING MODELS

1 - Vladimir Moshnyager: **What is the UTXO model? What are the advantages, downsides, and variations? Where does it come from, and which blockchain uses the UTXO model?**

**Cheng Wang:** UTXO (Unspent Transaction Output) model was created with Bitcoin. It didn’t exist before, and no one knows why Satoshi invented this UTXO model for Bitcoin. It is a model not so natural for accounting, especially when compared with the banking systems, as most of them use the accounting model for storing the information of users.

The UTXO model in Bitcoin is very similar to a physical cash transaction. In all transactions, there is the input, the token that will be transferred, and the output, the amount that will be sent to the recipient. The UTXO is what is left from the initial input and what was sent to the recipient, and the sender receives it as the “change” for the transaction. Next time the user makes a transaction, he will use this UTXO as input.

This model is good for accounting, but it has some limitations. So other developers created the account model to make it more expressive for applications.

2 - Vladimir Moshnyager: **What are the alternatives to the UTXO model? You say it was a bit limited, and there was some expressive property. Can you expand on that?**

**Cheng Wang:** The UTXO model is limited in multiple ways. The first one is: if you want to build dApps on top of it, it isn't easy because it's immutable. That means you don't have access to states when looking at the UTXO. In the account model, everything updates the state. All of the operations, all of the block transactions, can modify the state. This is important for applications. When Satoshi invented Bitcoin 10 years ago, it was not designed for the dApps use case. Then other developers came up with different models to get around this, like the extended UTXO (eUTXO) model and our stateful UTXO (sUTXO) model.

The eUTXO model has a problem with the concurrent (parallel) execution of smart transactions. This is a well-known issue in the Cardano community and is not easy to solve. Additionally, the UTXO model is not intuitive for programming, which makes it difficult for developers to build a blockchain using it. This can lead to a challenging user experience. We also had some issues in the past, and we came up with many checks to improve the user experience.

I got inspiration from the eUTXO model. It is pure and beautiful on paper, but there are practical issues. I read the documentation, but it was clear from the beginning that there would be issues if they wanted to build dApps on top of it. So that's why we wanted to make something different. Otherwise, I could put the eUTXO directly into the blockflow algorithm.

On the other hand, as seen in the Ethereum Virtual Machine (EVM) compatible blockchains, the account model allows for broad access to all information, which can compromise security in a financial platform. Too much access and too much freedom can be disastrous. This has resulted in simple bugs causing users to lose significant amounts of money. It is possible that these issues could have been avoided with a different design for the virtual machine or model.

3 - Vladimir Moshnyager: **Okay. These are the two big families.**

**Cheng Wang:** Yes. One is the immutable model (UTXO), and the other is the mutable (account) model if you try to classify the two kinds of models from the perspective of programming.

WHAT IS STATEFUL UTXO

4 - Vladimir Moshnyager: **Tell us a little about how, when, and why you got the idea of stateful UTXO. What's the context of this idea?**

**Cheng Wang:** It's been an evolution of an idea. Initially, I came up with the Blockflow algorithm, which can only be done with the UTXO model because I have to use the input-output paradigm to build the sharding structure.

With the account model, as it is mutable, it is impossible to parallelize the execution of the transactions. With the UTXO model, you can do it. It's immutable, so you can parallelize it on-chain.

The idea came out of my efforts to improve blockchain’s throughput through sharding. In 2017 and 2018, sharding was a big topic, and DeFi was not a thing yet. This also influenced me. I was focused on sharding. The UTXO model is a great fit to scale the blockchain because it is immutable. I came up with the algorithm, and I thought it was way simpler than the roadmap of Ethereum 2.0, so I started to get my hands on it to build it.

In late 2018, the DeFi (decentralized finance) movement began to grow. I became interested in it and was impressed by its potential. I decided to learn more about it because I am interested in the security issues of smart contracts. I discovered that the UTXO model is well-suited for improving the security of smart contracts. It can solve many security issues with virtual machines like the EVM and programming languages like Solidity.

9 - Vladimir Moshnyager: **Can you explain in one sentence the stateful UTXO model?**

**Cheng Wang:** Stateful UTXO combines the advantage of the UTXO and account models: it benefits from the security of UTXOs and the expressiveness of the accounts model.

10 - Vladimir Moshnyager: **How does it work, at a very high level?**

**Cheng Wang:** At a high level, the acco

unt model uses states to represent all information on the blockchain. However, this model has the issue of not being secure enough to handle financial assets. So, we can decompose the account model into two parts: the assets, modeled using the UTXO model, and the contract or state.

With this approach, we have a specific structure for digital assets that allow us to add several checks and guarantees in the VM to ensure that all asset operations are handled properly. This is in contrast to the EVM, where it is difficult to know if a change to a variable will also affect the balance of an account.

By decomposing the account model into the UTXO model and mutable states, we can improve the security and usability of the blockchain. One part deals with the digital assets, another part deals with the contract and logic.

In sUTXO, you not only have the UTXO, but you also have access to the contract states. For example, if you build dApps, you can use the state to check how many tokens are locked in the contract. And this information can be updated with smart contract code transactions.

The UTXO has minimal state information, only about the balance of the UTXO itself. It does not have access to the external execution environments. When running a smart contract, it needs to interact with other smart contracts to access more information. That's important for composability. With UTXO, you don't have this. With smart contracts, you can compose a lot of different contracts together in one transaction and do a lot of cool stuff.

16 - Vladimir Moshnyager: **What are the differences with the other UTXO models? With eUTXO (extended UTXO, used in Cardano & Ergo) and the Cell Model (used in Nervos)**

**Cheng Wang:** It's how the state is handled in the model. In the sUTXO model, the state is shared, and all the transactions can access the states. The eUTXO model is more like the classic UTXO model. The state is limited and is attached to the output. It means only the transaction itself can access the states inside the transaction. You cannot access the information from outside the transaction.

A blockchain has an execution environment. Whenever you want to execute a block, you are trying to change the state of the blockchain, and with the classical UTXO model, you update it by removing the inputs and then inserting the output into the system. The eUTXO model works the same way, but the only difference is that in the input, there is extra information, and a contract can use that information, but you don't have the whole blockchain state.

The sUTXO model is more like the account model. You have access to the whole blockchain state. The execution environment is wider. It is the whole blockchain world.

The cell model (used by Nervos) is close to the eUXTO model. Each cell is a box for accessing extra information. The main difference is that it seems more generic than the eUTXO model, but they are the same at a high level. It's a pure input and output model, so they don't have access to the whole blockchain. It only has limited access to information, and especially the write access is limited. The read access is very broad. It depends on the implementation, but the write access is very limited.

25 - Vladimir Moshnyager: **Can you explain the concurrency problem with eUTXO?**

**Cheng Wang:** The concurrency issue happens in the classical UTXO model: when you want to access the information of one UTXO, you have to spend it. That means it can only be used once. And after you use it, you cannot access it anymore.

As you need to update the information, the UTXO will be spent (generating a new one with the updated information), and you will not be able to access it anymore. That's the issue here.

You can only access it once: if different users want to access the data or the states simultaneously, then there will be a concurrency issue. Only one of them will succeed. The rest of them will just fail.

Ergo has found an interesting solution to that problem. It is possible to mitigate the concurrent execution of smart transactions by using an off-chain sequencer to collect and order the transactions before they are submitted to the smart contract. This ensures that the transactions are processed sequentially rather than in parallel.

However, this solution relies on external services to handle the ordering process, which can be a potential issue. It is important to consider this approach's potential risks and drawbacks when deciding whether to use an off-chain sequencer to address the concurrent execution of smart transactions.

This could be a single point of failure, and it can also have other issues like the fairness of the execution of the transactions, as the ordering is very important for a blockchain.

18 - Vladimir Moshnyager: **Do you have any hypothesis why there are not so many others attempts at doing UTXO stuff? There's eUTXO, the Cell one, sUTXO, and not many others. It seems like the whole space has moved to the account model. Do you have any hypothesis why it is so?**

**Cheng Wang:** If you don't need to shard the network or prioritize security, the account model is a great option. It's much simpler to build, and you can use the EVM design as a template. This allows you to build on top of the work of others without having to fork Bitcoin, which has an outdated codebase and is difficult to fork.

Bitcoin's code is complex and requires almost everything to be built from scratch, which is a difficult and time-consuming process. It took us many years to build it, and we're still in the early stages. Building the infrastructure takes time, and this is the main challenge here. It's almost as difficult as creating a brand-new operating system, as you must rebuild many components.

### About sharding

19 - Vladimir Moshnyager: **What do you mean by scalable UTXO, and in which way is it more scalable than the standard UTXO model?**

**Cheng Wang:** The architecture we use for the Blockflow is as follows: We have **G** groups, and then we have **G x G** blockchains. On top of that, we use UTXO to transact between the groups. This is what I meant by a scalable UTXO model: it is based on the UTXO model, but we scale it through sharding with the Blockflow algorithm.

### About tokens as first class citizen

20 - Vladimir Moshnyager: **The only state-equivalent on classic UTXO sets is the native token, but with Alephium, all tokens can run natively, in the UTXOs, without containers. That's why you're saying that those are first-class citizens? Can you explain more about how that works and what it allows for?**

**Cheng Wang:** This feature is not unique to us. Most of the modern blockchains have the capability to support tokens built into the system, but Bitcoin and Ethereum are not among them. Bitcoin does not have token support, while Ethereum has it through the ERC-20 standard, an external standard. Smart contracts are written following this standard to issue new tokens, but this approach has drawbacks and limitations.

The first issue is that it's difficult to design such standards, and there are many different standards for tokens, such as the ERC-20 and ERC-777. Whenever people find a feature they don't like, they propose something new, leading to ecosystem fragmentation. It took many years for the ecosystem to consolidate the standards.

The second issue is that the security of this approach is not as strong as it could be since **the standard is not the implementation**. The standard is just a few functions that must be implemented in the smart contract, and there's no guarantee that those functions will be implemented correctly, which can lead to hacks.

Token as a first-class citizen means the blockchain supports the token, and you can issue new tokens with the built-in functionality from the blockchain. This solves the standards issue. Everyone will use the same approach to issue a token. It will be highly tested in blockchain because it's a built-in feature.

Also, the blockchain can add more checks for token handling. For example, we have a permission check system for all transfers to guarantee that the virtual machine can ensure that all transfers are expected (or defined) by the smart contract.

21 - Vladimir Moshnyager: **Do we not lose a little bit of flexibility? For example, people are still inventing new standards for Ethereum. Standards that maybe they didn't think about before. For example, there's the 721 for NFTs, and then there's a new one, the 1155. If we want, can we also build a container system on Alephium?**

**Cheng Wang:** Alephium is a platform that allows the creation of new standards and tokens with additional features. However, the core functions of issuance, transfer, and deposit are built-in. While this helps to solve many issues, it is still possible for someone to create a buggy contract on top of the platform.

23 - Vladimir Moshnyager: **If the tokens are native in Alephium, does this mean I can pay GAS in any token?**

**Cheng Wang:** No. In our design, only the built-in token can be used to pay for transaction fees (gas). Using arbitrary tokens to pay for gas can be difficult because it requires an oracle to accurately determine the token's price before the transaction. Additionally, allowing arbitrary tokens to pay for gas can make the design and code more complex, which may not be worth the added complexity. Instead, using the built-in token, or blockchain token, to pay for gas fees ensures that there is demand for the token. This helps to create a sustainable model for the platform.

24 - Vladimir Moshnyager: **Cosmos studied the possibility of paying for the gas with UST at one time.**

**Cheng Wang:** Using stablecoins as a means of paying transaction fees on a blockchain platform has both pros and cons. One advantage is stability, but if a stablecoin were to lose its peg, it could impact the functionality of the blockchain. This may require updates to the blockchain to remove or add stablecoins as a valid form of payment, which can be complex and time-consuming.

### About Merkle tress, separation of Contract and Assets States

28 - Vladimir Moshnyager: **Alephium's UTXO is called _stateful_ UTXO. Can you just explain what “state” means in the blockchain context? Can you explain what the Alephium state looks like? What is in there, and how is it different from the others?**

**Cheng Wang:** You can see it as data. You can see it as information. As a programmer, I will say it's just global variables. And those variables are shared by all smart contracts. Initially, the smart contract has access to all these global variables, but we can add scopes and access controls.

Conceptually, it can be thought of as a key-value store, where you can store any type of data by assigning it a key. For example, you could store the price of Bitcoin or Ethereum, decentralized applications (dApps) addresses, or other information. This data is stored in a database and is known as the "state" of the blockchain.

Besides that, you have the state of the UTXO and the state of the smart contract code. Either way, you can see all of them as a key-value recording in the database, and the state is just a collection of these key-value pairs. Then they are stored in a <a href="https://ethereum.org/pt/developers/docs/data-structures-and-encoding/patricia-merkle-trie/" class="markup--anchor markup--p-anchor" data-href="https://ethereum.org/pt/developers/docs/data-structures-and-encoding/patricia-merkle-trie/" rel="noopener" target="_blank">Merkle Tree</a>.

30 - Vladimir Moshnyager: **Can you tell us more about the separation of contract logic and asset storage by decomposing contracts into a token path and the data paths?**

**Cheng Wang:** It's not a decomposition, it's just a way to describe the general idea. Technically, it's much more complicated than that, but we added the UTXO into the account model, and now the UTXO handles the tokens instead of the token issuance inside the mutable states. By adding something more specific to handle the tokens and taking away the weak parts from the account model, there is now a more secure model for the assets.

31 - Vladimir Moshnyager: **Technically, this operation, how is it managed? Where is the state actually stored, and how? Why have 3 different merkle trees?**

**Cheng Wang:** The details are stored in three Merkle Trees. One Merkle Tree is for the assets in the UTXO, and another Merkle Tree is for the contracts states, like the BTC price, Ethereum price, et cetera. The third one is for the contract logic. We could put this logic in the same Merkle tree as the contract states, but they are different data types. We can do specific optimizations if we separate them into different Merkle trees. For example, the smart contract code barely changes, so we can treat it as immutable and apply optimizations to them later.

You can put them in the same Merkle tree, but separating them has great advantages. There are also some IO (Read/write input) issues with one big Merkle Tree. The tree will be much bigger, and you'll access the database more times. Nowadays, one of the main bottlenecks of a blockchain is the IO.

33 - Vladimir Moshnyager: **Alephium is a sharded blockchain. How are the Merkle Tree stored? Are there 3 merkle trees per group, per shard?**

**Cheng Wang:** It's per group. Each group has separate states for the data. When the block is executed, it will access the group states and update them.

You can check the dependencies for every block and ensure there is no fork in them. With that, you can ensure that there's no double-spending, and that's enough.

35 - Vladimir Moshnyager: **My Uniswap, if it's on group one, shards two, it lives there? Someone in group 3, Shards 7 or 12 cannot access it directly?**

**Cheng Wang:** The states are segregated. From one group, you cannot access the other group. You would have synchronization issues if you could access it. Also, it would defeat the point of sharding because if you want to access it, you're going to store it. Here's the trade-off: If you segregate the data, you cannot access it anymore. You get the performance boost, but you lose something simultaneously.

There were some experiments in Ethereum for cross shard transactions. But they are usually not practical, as you need at least a two-phase commit protocol or even a three-phase commit protocol to support this. You first lock the states, then commit the transaction in one shard, and then you do what you want on another shard. Once the transaction is completed, you pull the state changes back to the original shard. That was the proposal by Vitalik, and I was not convinced, so I had some discussions with him on the forum in the past. It's just too complicated, and finding a good balance is important when building a system. I believe it's not ideal to try to support everything.

36 - Vladimir Moshnyager: **How do you solve this? I am a smart contract developer, how do I decide where I put it? What are the factors that I have to consider?**

**Cheng Wang:** There will be different designs. One design is to have all data related to a particular smart contract stored on a single group and require users to transfer their tokens to an address on that group to interact with the contract.

This is similar to how banks work today, where you may have accounts at multiple banks but must transfer your money to a specific bank to conduct business with that bank. In this design, users must first transfer their tokens from their address in another group to an address in the group that stores the smart contract, and then they can interact with the contract.

The second design would deploy the same contract to every group, but this has some limitations. For the Uniswap example, it means you would split your liquidity. That would mean that the capital might not be as efficient as in a single liquidity pool, but a market maker probably could close the gap and make sure the liquidity is as deep as possible, in this case, among different groups.

If the liquidity pool is deep enough, it will not be a problem, as you can split the liquidity into four groups. We also have applications that are not sensitive about liquidity and don't need a centralized liquidity pool. In that case, you can just deploy it to different groups, and everyone can access it.

38 - Vladimir Moshnyager: **Okay. In short, it's not a problem.**

**Cheng Wang:** When you evolve from a traditional database to a distributed database, you have to deal with how you move data between different instances. It is the same for blockchains. You are going to manage your assets in different groups.

### About size of the state & contracts, contract storage rent and upgradability

40 - Vladimir Moshnyager: **If developers want their code to be stored in the state, do they have to pay for it? How long does this storage last? Can they destroy it?**

**Cheng Wang:** Yes. Contract storage is a huge problem right now for Ethereum. For every transaction, you need to find the data on a database with 140 gigabytes. You need to access a few data from these huge states, execute the smart contract, and then modify the states. It's not efficient.

[View original.](https://medium.com/p/11e13d0b43d)
