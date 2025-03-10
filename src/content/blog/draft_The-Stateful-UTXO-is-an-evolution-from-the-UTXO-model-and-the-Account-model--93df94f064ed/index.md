---
title: 'The Stateful UTXO is an evolution from the UTXO model and the Account model.'
date: ''
description: 'Stateful UTXO Definition'
---

###

The Stateful UTXO is an evolution from the UTXO model and the Account model. It is a unique technology from the Alephium blockchain that takes the best characteristics of both models. In this interview-style article, we will explain in detail why it is essential and which problems it helps to solve.

### Stateful UTXO Definition

1 — Vladimir Moshnyager: **What is the UTXO model? What are the advantages, downsides, and variations? Where does it come from, and which blockchain uses the UTXO model?**

**Cheng Wang:** UTXO (Unspent Transaction Output) model was created with Bitcoin. It didn’t exist before, and no one knows why Satoshi invented this UTXO model for Bitcoin. It is a model not so natural for accounting, especially when compared with the banking systems, as most of them use the accounting model for storing the information of users.

The UTXO model in Bitcoin is very similar to a physical cash transaction. In all transactions, there is the input, the token that will be transferred, and the output, the amount that will be sent to the recipient. The UTXO is what is left from the initial input and what was sent to the recipient, and the sender receives it as the “change” for the transaction. Next time the user makes a transaction, he will use this UTXO as input.

This model is good for accounting, but it has some limitations. So other developers created the account model to make it more expressive for applications.

2 — Vladimir Moshnyager: **What are the alternatives to the UTXO model? You say it was a bit limited, and there was some expressive property. Can you expand on that?**

**Cheng Wang:** The UTXO model is limited in multiple ways. The first one is: if you want to build dApps on top of it, it isn’t easy because it’s immutable. That means you don’t have access to states when looking at the UTXO. In the account model, everything updates the state. All of the operations, all of the block transactions, can modify the state. This is important for applications. When Satoshi invented Bitcoin 10 years ago, it was not designed for this use case (dApps). Then other developers came up with different models to get around this, like the extended UTXO (eUTXO) model and our stateful UTXO (sUTXO) model.

The eUTXO model has a problem with the concurrent (parallel) execution of smart transactions. This is a well-known issue in the Cardano community and is not easy to solve. Additionally, the UTXO model is not intuitive for programming, which makes it difficult for developers to build a blockchain using it. This can lead to a challenging user experience. We also had some issues in the past, and we came up with many checks to improve the user experience.

On the other hand, as seen in the Ethereum Virtual Machine (EVM) compatible blockchains, the account model allows for broad access to all information, which can compromise security in a financial platform. Too much access and too much freedom can be disastrous. This has resulted in simple bugs causing users to lose significant amounts of money. It is possible that these issues could have been avoided with a different design for the virtual machine or model.

3 — Vladimir Moshnyager: **Okay. These are the two big families.**

**Cheng Wang:** Yes. One is the immutable model (UTXO), and the other is the mutable (account) model if you try to classify the two kinds of models from the perspective of programming.

4 — Vladimir Moshnyager: **When you look at what we’re saying to the world, we often say that stateful UTXO brings the best of both worlds. On the one hand, the immutability and security decentralization guarantees of one, and on the other one, the programmability expressiveness of the mutable one. That leads us to my next question. Tell us a little about how, when, and why you got the idea of stateful UTXO. What’s the context of this idea?**

**Cheng Wang:** It’s been an evolution of an idea. Initially, I came up with the Blockflow algorithm, which can only be done with the UTXO model because I have to use the input-output paradigm to build the sharding structure. With the account model, as it is mutable, it is impossible to parallelize the execution of the transactions. With the UTXO model, you can do it. It’s immutable, so you can parallelize it on-chain.

5 — Vladimir Moshnyager: **It came out of thinking of sharding?**

**Cheng Wang:** Yes, we use sharding to improve the throughput. In 2017 and 2018, sharding was a big topic, and DeFi was not a thing yet. This also influenced me. I was focused on sharding. The UTXO model is a great fit to scale the blockchain because it is immutable. I came up with the algorithm, and I thought it was way simpler than the roadmap of Ethereum 2.0, so I started to get my hands on it to build it.

In late 2018, the DeFi (decentralized finance) movement began to grow. I became interested in it and was impressed by its potential. I decided to learn more about it because I am interested in the security issues of smart contracts. I discovered that the UTXO model is well-suited for improving the security of smart contracts. It can solve many security issues with virtual machines like the EVM and programming languages like Solidity.

6 — Vladimir Moshnyager: **Are you aware or were you aware of other attempts of doing similar things, like using UTXO on one side and adding expressiveness on the other side?**

**Cheng Wang:** Not really. There are a lot of attempts with new programming languages, but not on the model level. There are a lot of blockchains on the UTXO model, like the eUTXO model. Usually, they want to make it to be very pure. They want to be the “Satoshi version” of the UTXO model. So, Cardano, Ergo, and Ozone have this, all very similar to the eUTXO model: everything is input and output, just like functional programming. If you provide the same input, you always get the same output.

I got inspiration from the eUTXO model. It is pure and beautiful on paper, but there are practical issues. I read the documentation, but it was clear from the beginning that there would be issues if they wanted to build dApps on top of it. So that’s why we wanted to make something different. Otherwise, I could put the eUTXO directly into the blockflow algorithm.

7 — Vladimir Moshnyager: **I’ve heard you say something is too pure of an idea multiple times. You are good at sometimes seeing too-good ideas and going for more practical rules. It’s really interesting.**

**Cheng Wang:** Sometimes, it’s good to keep things simple and stupid. It is important to find a balance between simplicity and complexity in system engineering. This can be compared to finding an equilibrium in game theory. Finding this balance, or equilibrium, can be challenging in computer science as it is often a difficult problem to solve. This is what makes system programming tricky.

Vladimir Moshnyager: **I read the other day that, theoretically, you could think that all systems are going to be a little bit overly complicated just so that people who are writing the code and maintaining it can keep the jobs to justify their own existence in a way. I thought that was an interesting idea.**

**Cheng Wang:** Yes, that seems right. Most of the systems get overcomplicated with time. It depends on how you design. A system that aims to do one specific task, such as a calculator, is less complex than a system that seeks to do many tasks, like an operating system. This is demonstrated in the difference between Bitcoin and Ethereum. Bitcoin was designed to be a decentralized ledger and has not added many additional features, making it relatively simple compared to Ethereum, which has a more complex feature set. However, the implementation of Bitcoin is still complex, even though the overall goal is relatively simple.

Bitcoin is a simple idea, but the implementation is complicated. I wonder if anyone understands all of the details of Bitcoin implementation.

Vladimir Moshnyager: **Can you explain in two sentences the stateful UTXO model?**

**Cheng Wang:** To try to combine the advantage of the UTXO model and the account model to benefit from the security of UTXO and the expressiveness of the accounts model.

Vladimir Moshnyager: **How does it work, like very high level?**

**Cheng Wang:** At a high level, the account model uses states to represent all information on the blockchain. However, this model has the issue of not being secure enough to handle financial assets. So, we can decompose the account model into two parts: the assets, modeled using the UTXO model, and the contract or state.

With this approach, we have a specific structure for digital assets that allow us to add several checks and guarantees in the VM to ensure that all asset operations are handled properly. This is in contrast to the EVM, where it is difficult to know if a change to a variable will also affect the balance of an account. By decomposing the account model into the UTXO model and mutable states, we can improve the security and usability of a blockchain.

Vladimir Moshnyager: **You said you cut it into two parts: the token and the contract. Is that right, contract, or what’s the right word**?

**Cheng Wang:** Token part, and probably the state’s part, the database part.

Vladimir Moshnyager: **One part is just tracking things, and the other is tracking logic, or not?**

**Cheng Wang:** I think you could say it that way. One part tries to deal with the digital assets, another part deals with the contract and logic.

Vladimir Moshnyager: **I think that it’s immensely helpful to build a mental idea before we dive a bit deeper. Now, to fine-tune our understanding: what’s the difference between the sUTXO and the classic UTXO model?**

**Cheng Wang:** In sUTXO, you not only have the UTXO, but you also have access to the contract states. For example, if you build dApps, you can use the states to check how many tokens are locked in the contract. And this information can be updated with smart contract code transactions.

Vladimir Moshnyager: **You have access to the state. That’s the difference with Bitcoin. But you said previously that the UTXO was stateless, right? Does that mean there’s no state? That’s what it means?**

**Cheng Wang:** The UTXO has minimal state information, only about the balance of the UTXO itself. It does not have access to the external execution environments. When running a smart contract, it needs to interact with other smart contracts to access more information. That’s important for composability. With UTXO, you don’t have this. With smart contracts, you can compose a lot of different contracts together in one transaction and do a lot of cool stuff.

Vladimir Moshnyager: **And the models don’t have exactly the same objective. Bitcoin wants to be a shared ledger like digital cash, and Ethereum wants something different. It wants to be more than that.**

**Cheng Wang:** Yes, I think it will be an efficient platform for all token-related things. The token is a core component of a blockchain, and just a ledger is not enough, as DeFi has proven. So even with very simple smart contracts, you can build very powerful applications like Uniswap.

Vladimir Moshnyager: **If we dive deeper into UTXO, what would be the difference between eUTXO and sUTXO?**

**Cheng Wang:** It’s how the state is handled in the model. In the sUTXO model, the state is shared, and all the transactions can access the states. The eUTXO model is more like the classic UTXO model. The state is limited and is attached to the output. It means only the transaction itself can access the states inside the transaction. You cannot access the information from outside the transaction.

A blockchain has an execution environment. Whenever you want to execute a block, you are trying to change the state of the blockchain, and with the classical UTXO model, you update it by removing the inputs and then inserting the output into the system. The eUTXO model works the same way, but the only difference is that in the input, there is extra information, and a contract can use that information, but you don’t have the whole blockchain state.

The sUTXO model is more like the account model. You have access to the whole blockchain state. The execution environment is wider. It is the whole blockchain world.

Vladimir Moshnyager: **What is the difference between sUTXO and the Cell model used in Nervos Network?**

**Cheng Wang:** It’s like the eUXTO model. Each cell is a box for accessing extra information. The main difference is that it seems more generic than the eUTXO model, but they are the same at a high level. It’s a pure input and output model, so they don’t have access to the whole blockchain. It only has limited access to information, and especially the write access is limited. The read access is very broad. It depends on the implementation, but the write access is very limited.

Vladimir Moshnyager: **Do you have any hypothesis why there are not so many others attempts at doing UTXO stuff? There’s eUTXO, the Cell one, sUTXO, and not many others. It seems like the whole space has moved to the account model. Do you have any hypothesis why it is so?**

**Cheng Wang:** If you don’t need to shard the network or prioritize security, the account model is a great option. It’s much simpler to build, and you can use the EVM design as a template. This allows you to build on the work of others without having to fork Bitcoin, which has an outdated codebase and is difficult to fork.

Bitcoin’s code is complex and requires almost everything to be built from scratch, which is a difficult and time-consuming process. It took us many years to build it, and we’re still in the early stages. Building the infrastructure takes time, and this is the main challenge here. It’s almost as difficult as creating a brand-new operating system, as you must rebuild many components.

### Token as a First-Class Citizen

Vladimir Moshnyager: **What do you mean by scalable UTXO, and in which way is it more scalable than the standard UTXO model?**

**Cheng Wang:** The architecture we use for the Blockflow is as follows: We have **G** groups, and then we have **G x G** blockchains. On top of that, we use UTXO to transact between the groups. This is what I meant by a scalable UTXO model: it is based on the UTXO model, but we scale it through sharding with the Blockflow algorithm.

Vladimir Moshnyager: **The only state shared on classic UTXO is the native token, but with Alephium, we get the same for all tokens. That’s why you’re saying that those are first-class citizens? Can you explain more about how that works and what it allows for?**

**Cheng Wang:** This feature is not unique to us. Most of the modern blockchains have the capability to support tokens built into the system, but Bitcoin and Ethereum are not among them. Bitcoin does not have token support, while Ethereum has it through the ERC-20 standard, an external standard. Smart contracts are written following this standard to issue new tokens, but this approach has drawbacks and limitations.

The first issue is that it’s difficult to design such standards, and there are many different standards for tokens, such as the ERC-20 and ERC-777. Whenever people find a feature they don’t like, they propose something new, leading to ecosystem fragmentation. It took many years for the ecosystem to consolidate the standards.

The second issue is that the security of this approach is not as strong as it could be since **the standard is not the implementation**. The standard is just a few functions that must be implemented in the smart contract, and there’s no guarantee that those functions will be implemented correctly, which can lead to hacks.

Token as a first-class citizen means the blockchain supports the token, and you can issue new tokens with the built-in functionality from the blockchain. This solves the standards issue. Everyone will use the same approach to issue a token. It will be highly tested in blockchain because it’s a built-in feature.

Also, the blockchain can add more checks for token handling. For example, we have a permission check system for all transfers to guarantee that the virtual machine can ensure that all transfers are expected (or defined) by the smart contract.

Vladimir Moshnyager: **Do we not lose a little bit of flexibility? For example, people are still inventing new standards for Ethereum. Standards that maybe they didn’t think about before. For example, there’s the 721 for NFTs, and then there’s a new one, the 1155. If we want, can we also build a container system on Alephium?**

**Cheng Wang:** Alephium is a platform that allows the creation of new standards and tokens with additional features. However, the core functions of issuance, transfer, and deposit are built-in. While this helps to solve many issues, it is still possible for someone to create a buggy contract on top of the platform.

Vladimir Moshnyager: **Can you tell us more about atomic transactions? If I understand correctly, atomic transactions are between tokens on different blockchains, and it’s a transaction that happens or does not happen in both chains. Are they possible on Alephium? What do they bring to the table? What do they allow?**

**Cheng Wang:** An atomic swap is possible for almost all blockchains as long as you have tokens. Whether it is a built-in token, or an ERC-20 token, as long as your tokens can be transferred, you can use atomic swap.

Vladimir Moshnyager: **If the tokens are native in Alephium, does this mean I can pay GAS in any token?**

**Cheng Wang:** No. In our design, only the built-in token can be used to pay for transaction fees (gas). Using arbitrary tokens to pay for gas can be difficult because it requires an oracle to accurately determine the token’s price before the transaction. Additionally, allowing arbitrary tokens to pay for gas can make the design and code more complex, which may not be worth the added complexity. Instead, using the built-in token, or blockchain token, to pay for gas fees ensures that there is demand for the token. This helps to create a sustainable model for the platform.

Vladimir Moshnyager: **Cosmos studied the possibility of paying for the gas with UST at one time.**

**Cheng Wang:** Using stablecoins as a means of paying transaction fees on a blockchain platform has both pros and cons. One advantage is stability, but if a stablecoin were to lose its peg, it could impact the functionality of the blockchain. This may require updates to the blockchain to remove or add stablecoins as a valid form of payment, which can be complex and time-consuming.

### Concurrency Issue on UTXO Model

Vladimir Moshnyager: **Can you explain the concurrency problem with eUTXO?**

**Cheng Wang:** The concurrency issue happens in the classical UTXO model: when you want to access the information of one UTXO, you have to spend it. That means it can only be used once. And after you use it, you cannot access it anymore. As you need to update the information, the UTXO will be spent (generating a new one with the updated information), and you will not be able to access it anymore. That’s the issue here. You can only access it once: if different users want to access the data or the states simultaneously, then there will be a concurrency issue. Only one of them will succeed. The rest of them will just fail.

Vladimir Moshnyager: **You mentioned that Ergo solved that problem with an off-chain solution, correct?**

**Cheng Wang:** Yes, I think so. It is possible to mitigate the concurrent execution of smart transactions by using an off-chain sequencer to collect and order the transactions before they are submitted to the smart contract. This ensures that the transactions are processed sequentially rather than in parallel. However, this solution relies on external services to handle the ordering process, which can be a potential issue. It is important to consider this approach’s potential risks and drawbacks when deciding whether to use an off-chain sequencer to address the concurrent execution of smart transactions.

Vladimir Moshnyager: **Yes, it’s a single point of failure, basically.**

**Cheng Wang:** Yes, it can be, and it can also have other issues like the fairness of the execution of the transactions, as the ordering is very important for a blockchain.

### The separation between Contract and Assets States

Vladimir Moshnyager: **Alephium’s UTXO is different because I can store ALPH UTXOs and other coins UTXOs. However, our UTXO is still called _stateful_ UTXO, which means I can store on top of those UTXOs even more information in a state. First, can you just explain what state means in the blockchain world specifically for those who are not completely familiar with this?**

**Cheng Wang:** You can see it as data. You can see it as information. As a programmer, I will say it’s just global variables. And those variables are shared by all smart contracts. Initially, the smart contract has access to all these global variables, but we can add scopes and access controls.

Vladimir Moshnyager: **Can you explain what the Alephium state looks like? What is in there, and how is it different from the others?**

**Cheng Wang:** Conceptually, it can be thought of as a key-value store, where you can store any type of data by assigning it a key. For example, you could store the price of Bitcoin or Ethereum, decentralized applications (dApps) addresses, or other information. This data is stored in a database and is known as the “state” of the blockchain.

Besides that, you have the state of the UTXO and the state of the smart contract code. Either way, you can see all of them as a key-value recording in the database, and the state is just a collection of these key-value pairs. Then they are stored in a <a href="https://ethereum.org/pt/developers/docs/data-structures-and-encoding/patricia-merkle-trie/" class="markup--anchor markup--p-anchor" data-href="https://ethereum.org/pt/developers/docs/data-structures-and-encoding/patricia-merkle-trie/" rel="noopener" target="_blank">Merkle Tree</a>.

Vladimir Moshnyager: **Can you tell us more about the separation of contract logic and asset storage by decomposing contracts into a token path and the data paths?**

**Cheng Wang:** It’s not a decomposition, it’s just a way to describe the general idea. Technically, it’s much more complicated than that, but we added the UTXO into the account model, and now the UTXO handles the tokens instead of the token issuance inside the mutable states. By adding something more specific to handle the tokens and taking away the weak parts from the account model, there is now a more secure model for the assets.

Vladimir Moshnyager: **Technically, this operation, how is it managed? Where is the state actually stored, and how?**

**Cheng Wang:** The details are stored in three Merkle Trees. One Merkle Tree is for the assets in the UTXO, and another Merkle Tree is for the contracts states, like the BTC price, Ethereum price, et cetera. The third one is for the contract logic. We could put this logic in the same Merkle tree as the contract states, but they are different data types. We can do specific optimizations if we separate them into different Merkle trees. For example, the smart contract code barely changes, so we can treat it as immutable and apply optimizations to them later.

Vladimir Moshnyager**: Is the reason we have three so we can optimize each separately?**

**Cheng Wang:** Yes. Of course, you can put them in the same Merkle tree, but separating them has great advantages. There are also some IO (Read/write input) issues with one big Merkle Tree. The tree will be much bigger, and you’ll access the database more times. Nowadays, one of the main bottlenecks of a blockchain is the IO.

Vladimir Moshnyager: **Alephium is a sharded blockchain. How does the Merkle Tree are stored? Are they cut in pieces in every group, every shard? Is it per shard, or is it per group?**

**Cheng Wang:** It’s per group. Each group has separate states for the data. When the block is executed, it will access the group states and update them.

Vladimir Moshnyager: **And the DAG dependencies connect the groups and the shards?**

**Cheng Wang:** You check the dependencies for every block and ensure there is no fork in them. With that, you can ensure that there’s no double-spending, and that’s enough.

Vladimir Moshnyager: **My Uniswap, if it’s on group one, shards two, it lives there? Someone in group 3, Shards 7 or 12 cannot access it directly?**

**Cheng Wang:** The states are segregated. From one group, you cannot access the other group. You would have synchronization issues if you could access it. Also, it would defeat the point of sharding because if you want to access it, you’re going to store it. Here’s the trade-off: If you segregate the data, you cannot access it anymore. You get the performance boost, but you lose something simultaneously.

Vladimir Moshnyager: **How do you solve this? I am a smart contract developer, how do I decide where I put it? What are the factors that I have to consider?**

**Cheng Wang:** There will be different designs. One design is to have all data related to a particular smart contract stored on a single group and require users to transfer their tokens to an address on that group to interact with the contract. This is similar to how banks work today, where you may have accounts at multiple banks but must transfer your money to a specific bank to conduct business with that bank. In this design, users must first transfer their tokens from their address in another group to an address in the group that stores the smart contract, and then they can interact with the contract.

The second design would deploy the same contract to every group, but this has some limitations. For the Uniswap example, it means you will split your liquidity.

Vladimir Moshnyager: **You fragment data.**

**Cheng Wang:** This means the liquidity, the capital, might not be as efficient as in a single liquidity pool, but a market maker probably can close the gap and make sure the liquidity is as deep as possible, in this case, among different groups. If the liquidity pool is deep enough, it will not be a problem, as you can split the liquidity into four groups. We also have applications that are not sensitive about liquidity and don’t need a centralized liquidity pool. In that case, you can just deploy it to different groups, and everyone can access it.

Vladimir Moshnyager: **Okay. In short, it’s not a problem.**

**Cheng Wang:** When you evolve from a traditional database to a distributed database, you have to deal with how you move data between different instances. It is the same for blockchains. You are going to manage your assets in different groups.

Vladimir Moshnyager: **Is there a theoretical wall that prevents contracts from accessing other group states? Is it possible to do it? Wouldn’t that mostly result in sync problems?**

**Cheng Wang:** There are proposals in Ethereum. But they are usually not practical, as you need at least a two-phase commit protocol or even a three-phase commit protocol to support this. You first lock the states, then commit the transaction in one shard, and then you do what you want on another shard. Once the transaction is completed, you pull the state changes back to the original shard. That was the proposal by Vitalik, and I was not convinced, so I had some discussions with him on the forum in the past. It’s just too complicated, and finding a good balance is important when building a system. I believe it’s not ideal to try to support everything.

### dApp Development and Storage

Vladimir Moshnyager: **What’s the implication for DEVs? If they want their code to be stored, do they have to pay for it? How long does this storage last? Can they destroy it?**

**Cheng Wang:** Yes. Contract storage is a huge problem right now for Ethereum. For every transaction, you need to find the data on a database with 140 gigabytes. You need to access a few data from these huge states, execute the smart contract, and then modify the states. It’s not efficient.

For a long time, there has been a search for some mechanism to encourage people to use the storage properly, and none on the Ethereum platform. If you store something on Ethereum, it will be there forever.

When designing Alephium, I just chose a very naïve way: whenever you deploy a smart contract, you have to deposit one Alephium into it. It’s simple. Once you deposit this one Alephium in the smart contract, it will be there forever unless you destroy the smart contract. Destroying means removing the data from the blockchain state, and this mechanism will be very helpful for reducing the size of the state. I don’t think Alpehium will have 140 gigabytes for many reasons, and the storage rent will be one of the keys.

Vladimir Moshnyager: **Does it mean you get the one Alph back when you destroy the contract?**

**Cheng Wang:** Yes, exactly. It’s not a fee, it is more like a deposit.

Vladimir Moshnyager: T**hat’s interesting. Does it have a time limit? If I make my smart contract and die, the smart contract stays?**

**Cheng Wang:** Exactly. Here is the problem. There are two approaches to designing storage rent: in one, you pay the fee just for one time, and in another, you need to pay the fee regularly. The second one is difficult to design and implement.

Vladimir Moshnyager: **What about a smart contract like a DeFi protocol where I have to put my money and trust a smart contract with it? Is there a risk? For example, I put 10 ALPH in this smart contract, and the contract owner destroys it. Do I keep my balance, or does it get destroyed with the smart contract and money?**

**Hongchao Liu:** It depends on how the contract’s written.

Vladimir Moshnyager: **Interesting. The rent problem is solved this way: I deposit one Alph with every contract and get the Alph back when I destroy the contract. It’s a good practice to destroy my contracts when they’re no longer used. Do you think one Aleph is enough for this?**

**Cheng Wang:** Actually, I was asking the same question. I was divided between 10 Alph and one Alph. I think this mechanism is open for change in the future if we can find a good proposal. This is a simple one, and it works.

### NFTs Implementation

Vladimir Moshnyager: **How would be the NFT mint process as a native token? How do you define how many NFTs will go in a series, et cetera?**

**Hongchao Liu:** The only difference between a fungible token emission and an NFT emission is the number of tokens you will issue. If you only issue one, then this token is unique. We can have a standard on top of the token itself, for example, to say: “For each of the NFT tokens, we should have a field that points to an image,” or, “there is some metadata that we can attach to the token”. That’s something built on top of the native support of the token.

Vladimir Moshnyager: **I have 10,000 bored apes to make a collection. Each of them is a unique token, but are they linked somehow?**

**Hongchao Liu:** In Ralph (Alephium programming language), we don’t have a data structure map. In Ethereum, it supports the NFTs connection by having a contract containing a map, and then you have each NFT as an element. In Alephium, we need to create a collection contract and link all the NFTs to this contract. Yes, on a high level, it’s the same, it’s a one-to-many relationship. It’s just the implementation detail.

Vladimir Moshnyager: **If I have an NFT collection with a certain logic, for example, certain utility, or codified royalty, when I’m going to transfer it from one address to another in a different group, it’s going to take with it the contract state and the contract logic to the new one?**

**Cheng Wang:** No. In this case, the design we made is that you can transfer only the token to all groups. That means if you have an NFT, you can transfer the token to another group, but for the smart contract data, you can’t transfer it.

Vladimir Moshnyager: **I don’t need to transfer it, it’s going to stay where it was?**

**Cheng Wang:** Yes, that’s the practical approach. Of course, in some cases, it is good to transfer the information, but in this example, you can only transfer the token. The information is easily accessible: you have the token, you have the token ID, and you know the contract ID, so you can read the NFT information from the blockchain, from other groups.

Vladimir Moshnyager: **If I transfer an NFT, and I want to make sure that the creator gets his royalties, like the 2% of the sale, it’s going to happen automatically?**

**Cheng Wang:** This is not implemented right now.

Vladimir Moshnyager: **In Ethereum, this is implemented in a smart contract, so I’m asking you this question. If you go cross-shard, and the token is sent to group three, but the contract logic and smart contract are stored in the first one, how does that work?**

**Cheng Wang:** I think it will be tricky in this case if you want to do it in another group because you will not access the contract logic to enforce this in the new group.

Vladimir Moshnyager: **Can I restrict the movement of my NFTs, for example, can I just say, “These NFTs can only live in group one? They can only ever be sold in this group?”**

**Cheng Wang:** It is possible to do that. It means you can check if the NFTs belong in this group by checking if the contract is in this group, so that is doable.

Vladimir Moshnyager: **What happens if I wrote some NFTs, people bought them, and then I destroyed the contract?**

**Hongchao Liu:** I guess you can audit the code and ensure that’s not possible. If possible, you probably shouldn’t buy the NFT in the first place.

Vladimir Moshnyager: **You mean someone could write in the contract that this contract is not destructible?**

**Hongchao Liu:** Yes.

**Cheng Wang:** I think that in the code right now, only the owner of the NFT can destroy the contract.

**Hongchao Liu:** In the current implementation, if you own the NFT, then you can destroy the contract, but other people can’t. Even if you wrote this contract, you’re the author, you can’t destroy the contract. Only if you own the NFT.

Vladimir Moshnyager: **When you're talking about the contract, if you create an NFT collection with thousands of tokens, then I am buying 10 tokens, what can I destroy? Nothing. Can only you destroy the contract?**

**Hongchao Liu:** The smart contract is written so that, when I'm the owner, I can sell the NFT to you, for example, and then you become the owner, and then you get the permission to destroy the contract.

### sUTXO Advantages

Vladimir Moshnyager: **How does separating the token, contract state, and contract code create something new? What does it bring that is not possible in the existing paradigm? What does it allow that we haven't seen before in Bitcoin, Ethereum, and all the blockchains?**

**Cheng Wang:** Bitcoin is very secure, but it is simple. Ethereum is complex but not that secure. If we compare ourselves with Ethereum, you can say we have this special structure of the UTXO model. It means the virtual machine and the blockchain, the execution engine, can take advantage of this specific structure, and then they can do more things.

For example, the EVM doesn't know if the user is transferring a token or if you are trying to change smart contract variables. The token balance is just a variable. If I transfer some money to you, it is just like changing the variable of my balance and then increasing your balance by updating the variable of your balance. The EVM knows nothing about whether you are using a token. In Alephium, it's different. The virtual machine knows you are trying to transfer a token in the smart contracts. According to the smart contract, the virtual machine can check if you are doing the right things.

Vladimir Moshnyager: **The first benefit is security because you can check better what's going on. Can you give me an idea, a function, or something that is not possible today that would become possible? Do you have an example that comes to mind?**

**Cheng Wang:** At a high level, everything is possible because both are Turing complete: what you can do in one platform, you can do in the other platform. The most tricky part is how to write programs correctly. Non-technical people usually underestimate this. “It looks like it is very easy to write smart contracts, so I suppose I can write code”. But it's very hard to write proper code. Any small improvements on the platform, on the stack, is a huge benefit for the ecosystem. For example, because of one design flaw, the chance that the engineers may write buggy code is 1%-ish. If you can save 1% of the whole money in the ecosystem. It's going to be huge.

Vladimir Moshnyager: **It's a little bit like you can save a huge amount of capital worldwide by simply reducing transaction fees. It's the same kind of improvement, right? Because when it is way easier to do something much more secure, everyone wins exponentially.**

**Cheng Wang:** Yes. It's not really about what you can do. It's not about whether you can do more, it's about doing things properly. Now it's much easier to do things correctly.

Many autonomous vehicles can operate correctly 99% of the time, but this is not enough. For vehicles to be accepted on normal roads, they must have a 99.999% success rate. The same is true for smart contracts. If the code is only correct 99% of the time, it is not secure enough for financial use. Moving from 99% correctness to a higher percentage is much more challenging.

Vladimir Moshnyager: **That's what we do?**

**Cheng Wang:** We do, exactly. By default, the security will be much higher.

**Hongchao Liu:** One advantage of our approach is that it allows users to self-custody their NFTs or tokens. The current Ethereum model, which relies on a centralized service that calls a smart contract to keep track of NFTs, is less secure. Our approach would be better and more private since we could simply look at the UTXOs to determine which tokens a user owns.

**Cheng Wang:** This example points to something very important in the UTXO model: the separation of assets and contract states. With this separation, you can benefit from increased security. Even if there’s a bug in the smart contract, your assets will not be hacked. For example, when you mint your NFT, you put it in your wallet. If there’s a bug in the smart contract, hackers cannot steal your coins or your NFT because it is in your UTXO. The worst they can do is do something malicious to the smart contract, but they cannot steal your assets. Then the devs can upgrade the smart contract to restore the logic and fix the bugs. This is something unique to this model.

Vladimir Moshnyager: **Can I deposit one Alph when I create my contract and then update it later?**

**Cheng Wang:** You must design your smart contract with migration in mind, but it’s an option. Some projects don’t want to deal with migration, they just want new versions in new smart contracts. For example, Uniswap has different variations, and some smart contracts just want to upgrade and support migration, like Wormhole and MakerDAO. These are two different philosophies.

Vladimir Moshnyager: **They're using what they call proxy contracts, right?**

**Cheng Wang:** Migration based on proxy contracts is a complex system. Every time I read about it, it seems I understand, and the next time, like after two weeks, if you ask me about it, I forget it.

The problem with the EVM migration process is that it's not built-in. It is a standard proposed by consensus. Then there are different implementations of it. One of the implementations by Wormhole was wrong, which caused a bug. In our case, the migration is much simplified. It's a built-in feature. We have a virtual machine instruction for that. It's very dev friendly. It's very easy to understand.

Vladimir Moshnyager: **How does Alephium maintain a reasonable state size? There are incentives to destroy contracts. What else helps us maintain a reasonable state size?**

**Cheng Wang:** To deploy a smart contract on Alephium, you must deposit one Alph. This prevents the mainnet from being overwhelmed with too many smart contracts. We limit how much data each smart contract can store. In Ethereum, every smart contract can create an unlimited number of key-value pairs. This can be a problem because it requires a lot of data storage.

Vladimir Moshnyager: **What happens if my smart contract gets too big? Either I put too much in it, or it gets bigger when I have more users, can I just pay more to store it?**

**Cheng Wang:** There's an upper bound for that.

Vladimir Moshnyager: **Is it possible in some cases that this value won’t be enough for me as a business, and then I have to create a second smart contract? How does that work?**

**Cheng Wang:** The maximum value will be 4 KB because, for the Linux system, one page is 4 KB. That's why we use 4 KB. It means every time you read the smart contract, it will only need one IO read for it.

Vladimir Moshnyager: **Just to give us an idea of scale, a Uniswap contract would be how big? Do you have any idea?**

**Cheng Wang:** Oh, it will be less than 1 KB. This is very interesting. We compared the smart contract size with Ethereum, with Solana. Our smart contract size is around 1 KB for the bridge, the Ethereum is around 10 KB, and the Wormhole is around 1 megabyte for the bridge’s smart contract. We are lightweight. I was impressed by this, to be honest. I did not expect the difference to be so huge.

Vladimir Moshnyager: **Is there a limit to the number of simultaneous smart contracts that can live on an Alephium? What's the max limit of a smart contract in Alephium?**

**Cheng Wang:** There are probably more than 10 million smart contracts on Ethereum. In our case, the number will be less than the circulating supply on ALPH. I don't think that is a problem because there will be an equilibrium. If there are more contracts to be deployed, it means the demand is high. The market will adjust the price properly. It means, in that case, the storage is really expensive. Then the price for depositing will be higher, and the market will adjust it.

### Security on sUTXO

Vladimir Moshnyager: **How does it prevent flash loan attacks by design? For the record, you're one of the first to propose implementing flash loans on Ethereum with the UniFlash, right?**

**Cheng Wang:** Yes, I did. And it's an ambiguous tool. The harm it does is probably bigger than the good it brings. I'm sure many people don't agree with this, but we can agree that it's not only a good thing. It has pros and cons. In our case, we took a more conservative approach in technology regarding design, not only in DeFi. Flash loan is an extreme use case. We prevent it by following the input and output paradigm like Bitcoin, like the eUTXO model.

You have the assets in the input, the transaction happens, and you get the outputs. You cannot reuse the output in the same transaction. That’s the thing. With a flash loan, you need to borrow money from someone, get the outputs, and then you need this output to repay the loan in the same transaction. With the input and output model is not possible. As the flash loan needs to happen in a single transaction, it becomes a trust issue.

Vladimir Moshnyager: **Can’t we do that with the stateful UTXO model?**

**Cheng Wang:** No. And it is a good thing. I think composability is abused on Ethereum. For normal users, you never really want composability. At most, you compose one to three smart contracts. Usually, the composability use case is for hacking smart contracts. It is the same for flash loans. If you follow the input-output model, for the normal users, there's nothing changing, but for the hackers, it's a huge difference.

Vladimir Moshnyager: **I guess it's linked, right? The composability issue with the idea of MEV (Miner Extracted Value). What's the impact of using a stateful UTXO on MEV opportunities?**

**Cheng Wang:** The impact is the same for the flash loans. The flash loan is a very important tool for MEV, so there is no surprise. They're related. Basically, in one transaction, you cannot do crazy stuff. You will have the same rights as normal users. You are following the input-output paradigm. You put your assets, do the transaction, and get the output. There's less opportunity to bring a lot of money just in one transaction.

You're going to have to use multiple transactions to extract the value. It will be more challenging for arbitragers to do it because of the lack of flash loans and the lack of bundling several transactions in just one.

Vladimir Moshnyager: **What about the overflow-underflow features included in the VM?**

**Cheng Wang:** It's a built-in check for mathematical operations. EVM doesn’t have it by default, and now they use libraries for that, but there's a cost. The first issue is you need to be aware about this good practice. The second is the code size gets bigger because you need to use a external library for this check. That means some people still forget about it because the list of things you need to add to your code can be very long.

Vladimir Moshnyager: **With us, the list will be shorter because the system would handle more of the checks, right?**

**Cheng Wang:** I believe so. There will be only something that the virtual machine cannot check, like something you have to check manually with unit tests. The virtual machine has no information about what you are going to build. The virtual machine doesn't know your specs, so it cannot check some of those things. Some things have to be checked by you.

Vladimir Moshnyager: <a href="https://www.youtube.com/watch?v=VVYH9rBJAdA" class="markup--anchor markup--p-anchor" data-href="https://www.youtube.com/watch?v=VVYH9rBJAdA" rel="noopener" target="_blank"><strong>At EthCC</strong></a>**, you say the contract state is immutable but with security considerations, can you elaborate a little on this?**

**Cheng Wang:** One feature is the type system. We have built-in types for the fields. This means this is much better than EVM. There, everything is 32 bytes, which can be dangerous in some cases. Our virtual machine is also different from the EVM because we are a stack-based machine like JVM, like WAVM. The EVM is an old stack machine with more attack surface if the language is not implemented properly, or if the smart contract is not coded properly. This happened in the past. The Wormhole (Portal Bridge) had a problem with that.

Vladimir Moshnyager: **Wormhole is a good counter-indicator.**

**Cheng Wang:** Oh, Wormhole is a great example for learning about smart contract security because they are very high-skilled but still failed at some point. The bugs are usually tricky and mostly related to the blockchain itself, like Solana or EVM.

### Benefits of Building with Stateful UTXO

Vladimir Moshnyager: **You said that Alephium made a lot of effort to be dev-friendly. If you are talking to a dev, a dApp dev, or a DeFi entrepreneur, in terms of being dev-friendly, what has been done specifically?**

**Cheng Wang:** There are multiple important components here. The first one is the language, Ralph. We tried to make the language as simple as possible. We don't want to have advanced features like a borrow checker from Rust. I know some DApp platforms use Rust directly for programming, but it is overkill. So in our case, it's a really simple language. It looks like Rust, but it has very minimal features. It's like a C. Most of the time, people write the functions, and that's it.

That's the first thing, try to make the design as simple as possible. This is not easy because the language has to work with the blockchain. You'd have to have something very specific to the blockchain. It took us quite a lot of effort to design it and to make it very dev-friendly.

Besides the language, there is the stack, the infrastructure, or the toolchain for it. We took a deep dive into the existing toolchain oo the Ethereum ecosystem. We tried to learn how they improve the dev experience. From my point of view, the dev experience of our toolchain is really good.

In our full nodes, we are even providing more utilities to help to build better tools. The API endpoints probably are better than EVM. They don't have the ability to change the API, so they have to introduce many new features on top of that, but we can now introduce those APIs directly into the full nodes.

Vladimir Moshnyager: **About this, I have a few questions. You said our language is more simple and it has less complexity, fewer functions you said, fewer features. Is that only a good thing, or is it something that people will say, "We miss this, we miss that. We need this, we need that"? Can you program everything even with this simple language?**

**Cheng Wang:** Yes: There's no limitation to what you can do.

Vladimir Moshnyager: **In Ethereum, they focused on having multiple implementations of everything from the beginning. There was Geth, and there was Erigon from Vitalik, and they were all developed in different languages and on different platforms. Do we have the same approach of having different clients and implementations of everything?**

**Cheng Wang:** Right now, it is not in our roadmap, partly because we don't have the resources, partly because it's complicated to go that way. It's very hard to manage multiple teams doing the same clients, and you must document the specification properly. Otherwise, they might introduce bugs to the client if they don't write the code properly. If you look at the EVM ecosystem situation, one client is dominating the market. It shows that people don't feel confident enough to try the other clients on sensitive stuff. So for very critical services, they will choose Go Ethereum always.

It means losing the point if we try to have multiple clients because you cannot build two clients and give them the same kind of resources, even the quality will be different. I think the priority is always to have very good full nodes at first, and when you feel comfortable about having a second one, you can start the second one. It's not easy to build a blockchain client.

Vladimir Moshnyager: **What would you say to a DeFi dev or entrepreneur to convince him to come and try stateful UTXO?**

**Cheng Wang:** Right now, we are still in the very early stage. And that is an advantage. With the upcoming Leman Network Upgrade, we will introduce more features for smart contract development, a bridge to Ethereum, and much more. Now would be an excellent time to learn how to code with Alpehium. We have a lot of innovative stuff here. With our growing community, your project would be well-placed to take advantage of this.

[View original.](https://medium.com/p/93df94f064ed)
