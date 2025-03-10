---
title: "TECH TALK #2 — Mysteries of stateful UTXO: The Ultimate Guide to Alephium’s accounting model (and…"
date: "2023-08-17"
description: "A discussion with Cheng Wang, inventor of stateful UTXO and founder of Alephium"
---

<div>

# TECH TALK \#2 — Mysteries of stateful UTXO: The Ultimate Guide to Alephium’s accounting model (and…

</div>

<div class="section p-summary" field="subtitle">

A discussion with Cheng Wang, inventor of stateful UTXO and founder of Alephium

</div>

<div class="section e-content" field="body">

<div id="7e9c" class="section section section--body section--first">

<div class="section-divider">

------------------------------------------------------------------------

</div>

<div class="section-content">

<div class="section-inner sectionLayout--insetColumn">

### **TECH TALK \#2 — Mysteries of stateful UTXO: The Ultimate Guide to Alephium’s accounting model (and a little more!) — Part 2**

*A discussion with Cheng Wang, inventor of stateful UTXO and founder of Alephium*

<figure id="632b" class="graf graf--figure graf-after--p">
<img src="https://cdn-images-1.medium.com/max/800/0*BcI9cMWftJpNGIGT" class="graf-image" data-image-id="0*BcI9cMWftJpNGIGT" data-width="1400" data-height="788" data-is-featured="true" />
</figure>

*This is the second of a series of interviews on the technical innovations brought to the world by Alephium. The discussion was conducted in a virtual format in the presence of most of the Alephium team who contributed to the questions and ensuing exchange. The following has been edited for clarity, concision and optimized for readability and cut into two parts, this is part 2. It has already been preceded by an* <a href="https://medium.com/@alephium/an-introduction-to-the-stateful-utxo-model-8de3b0f76749" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/an-introduction-to-the-stateful-utxo-model-8de3b0f76749" target="_blank"><em>Introduction to sUTXO</em></a> *and* <a href="https://twitter.com/alephium/status/1615389097744568320" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium/status/1615389097744568320" rel="noopener" target="_blank"><em>many</em></a> <a href="https://twitter.com/alephium/status/1599808960038461447" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium/status/1599808960038461447" rel="noopener" target="_blank"><em>twitter</em></a> <a href="https://twitter.com/alephium/status/1602684789655420928" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium/status/1602684789655420928" rel="noopener" target="_blank"><em>threads</em></a>*.*

*TL;DR — On the topic of state size, contract storage rent and upgradability / About NFT implementations / Exploring the main benefits of sUTXO: security / Regarding the benefits of building with statefulUTXO*

*If you just stumbled here, find part 1* <a href="https://medium.com/@alephium/tech-talk-2-mysteries-of-stateful-utxo-the-ultimate-guide-to-alephiums-accounting-model-and-de2cf2063615" class="markup--anchor markup--p-anchor" data-href="https://medium.com/@alephium/tech-talk-2-mysteries-of-stateful-utxo-the-ultimate-guide-to-alephiums-accounting-model-and-de2cf2063615" target="_blank"><em>here</em></a>*.*

#### On the topic of state size, contract storage rent and upgradability

**VM: If developers want their code stored in the state, do they have to pay for it? How long does this storage last? Can they destroy it?**

CW: Yes, contract storage has become a significant problem for Ethereum. For every transaction, you must access a small amount of data from an immense 140Gb+ state, execute the smart contract, and then modify the state. This isn’t efficient.

There has long been a search for a mechanism that encourages people to use storage appropriately, which hasn’t been available on the Ethereum platform. If you store something on Ethereum, it stays there indefinitely.

In designing Alephium, we’ve taken a straightforward approach: when you deploy a smart contract, you deposit one Alephium into it. Once you deposit this Alephium into the smart contract, it remains there forever unless you destroy the smart contract. Destroying it removes the data from the blockchain state. This mechanism should help reduce the state size, and I don’t anticipate Alephium reaching 140 gigabytes for many reasons, one being the storage rent.

**VM: So, when you destroy the contract, you reclaim the one Alph deposit? Does this have a time limit? If I create a smart contract and then pass away, does the contract remain?**

CW: Yes, exactly. It’s not a fee but more akin to a deposit.

There are two ways to design storage rent: pay a one-time fee or pay recurring fees. The latter is more challenging to design and implement and usually requires users to manage storage manually.

**VM: Do you think one Alph is sufficient for this?**

CW: I’ve wrestled with this question myself, debating between 10 Alph and 1 Alph. We’re open to altering this mechanism in the future if we find a better proposal, one possible way would be to dynamically adjust the minimum amount based on the network hashrate. For now, this simple approach works, and there is no need to over-engineer it.

**VM: Can I deposit one Alph when creating my contract and then update it later?**

CW: You need to consider migration when designing your smart contract, but it’s optional. Some projects don’t want to handle migration; they prefer new versions in new smart contracts, like Uniswap, while others prefer upgrading and supporting migration, like Wormhole and MakerDAO. These reflect two different philosophies.

Migration based on proxy contracts is a complex system and many protocols have got hacked due to misconfigurations.

The issue with EVM migration is that it’s not built-in. It’s a standard proposed by consensus, leading to various implementations. Wormhole made an error in one of its implementations, which resulted in a bug and a huge exploit. Our approach to migration is much more straightforward, with a built-in feature and a virtual machine instruction for it. It’s very developer-friendly and easy to understand.

**VM: Regarding the reasonable size of contracts — How does Alephium keep a manageable state size? What’s the max size?**

CW: To deploy a smart contract on Alephium, you need to deposit one Alph. This prevents the mainnet from being inundated with too many smart contracts. We restrict how much data each smart contract can store. In Ethereum, every smart contract can generate an unlimited number of key-value pairs, which could necessitate a lot of data storage.

The maximum value is set at 4 KB because, for the Linux system, one default memory page is 4 KB. That’s why we’ve opted for 4 KB for efficient IO read.

**VM: Just to give us an idea of scale, a Uniswap contract would be how big? Do you have any idea?**

CW: It would be less than 1 KB. It’s quite interesting actually; we compared the smart contract size with Ethereum and Solana. Our smart contract size for the bridge is around 1 KB, whereas Ethereum’s is around 10 KB, and Wormhole’s is around 1 MB for the bridge’s smart contract. We are quite lightweight. I was honestly impressed by this; I didn’t expect the difference to be so substantial.

**VM: Is there a limit to the number of simultaneous smart contracts that can live on an Alephium? What’s the maximum limit of a smart contract in Alephium?**

CW: There are likely more than 10 million smart contracts on Ethereum. In our case, the number will be less than the circulating supply of ALPH. I don’t see this as a problem because there will be a natural balance. If there are more contracts to be deployed, it indicates high demand. The market will accordingly adjust the price. In such a scenario, storage becomes quite expensive. Consequently, the price for depositing will rise, and the market will make the necessary adjustments.

#### About NFT implementations

**VM: How does the NFT minting process work as a native token? How do you determine the number of NFTs that will be in a series, and so on?**

Hongchao Liu: The only difference between issuing a fungible token and an NFT is the quantity of tokens you will issue. If you only issue one, then this token is unique. We can build a standard on top of the token itself. For instance, we can state that “For each NFT token, there should be a field that points to an image,” or, “there is some metadata that we can attach to the token.” That’s something built on top of the native support of the token.

**VM: Suppose I have 10,000 unique tokens to form a collection, like bored apes. Are they somehow connected?**

Hongchao Liu: In Ralph (Alephium’s programming language), we don’t have a map data structure to mitigate the state bloating issue. Ethereum supports NFT collections by having a contract containing a map, and then each NFT is an element.

In Alephium, we need to create a collection contract and link all the NFTs to this contract. Essentially, it’s the same, it’s a one-to-many relationship. It’s just the implementation detail.

**VM: If I have an NFT collection with certain logic, like a particular utility, or codified royalty, will it carry the contract state and contract logic when I transfer it from one address to another in a different group?**

CW: No, the design we have allows you to transfer only the token to all groups. Meaning, if you have an NFT, you can transfer the token to another group, but you can’t transfer the smart contract data.

**VM: So, I don’t need to transfer it, it’s going to remain where it was?**

CW: Yes, that’s the practical approach. In some cases, it would be good to transfer the information, but in this example, you can only transfer the token. The information is easily accessible: you have the token, you have the token ID, and you know the contract ID, so you can read the NFT information from the blockchain, from other groups.

**VM: If I trade an NFT, and I want to make sure that the creator gets his royalties, like the 2% of the sale, it’s going to happen automatically?**

**CW:** Royalties can be easily implemented as long as the marketplace is in the same group as the collection and the collection stores the address of the creator.

**VM: In Ethereum, this is implemented in a smart contract, so I’m asking you this question. If you go cross-shard, and the token is sent to group three, but the contract logic and smart contract are stored in the first one, how does that work?**

**CW:** I think it will be tricky in this case if you want to do it in another group because you will not access the contract logic to enforce this in the new group. There are some native ways to bridge the information cross-shard if there is a need, but I don’t see this as in high demand in the near future.

**VM: Can I restrict the movement of my NFTs, for example, can I just say, “These NFTs can only live in group one? They can only ever be sold in this group?”**

**CW:** It is possible to do that. It means you can check if the NFTs belong in this group by checking if the contract is in this group, so that is doable.

**VM:** **What happens if I wrote some NFTs, people bought them, and then I destroyed the contract?**

**Hongchao Liu:** I guess you can audit the code and ensure that’s not possible. If possible, you probably shouldn’t buy the NFT in the first place. The issue can be worse on EVM, as you could destroy all of the NFTs if you are the owner of the contract.

**VM: You mean someone could write in the contract that this contract is not destructible?**

**Hongchao Liu:** In the current implementation, if you own the NFT, then you can destroy the contract, but other people can’t. Even if you wrote this contract, you’re the author, you can’t destroy the contract. Only if you own the NFT.

The smart contract is written so that, when I’m the owner, I can sell the NFT to you, for example, and then you become the owner, and then you get permission to destroy the contract.

#### Exploring the main benefits of sUTXO: security and functionality

**VM: How does the separation of token, contract state, and contract code bring about novelty? What does it provide that isn’t possible in the existing paradigm? What does it allow that we haven’t seen before in Bitcoin, Ethereum, or any other blockchains?**

CW: Bitcoin is remarkably secure but relatively simple. On the other hand, Ethereum is complex but lacks the same level of security. If we’re comparing ourselves to Ethereum, you could say that we employ a unique structure of the UTXO model. This allows both the virtual machine and the blockchain to leverage this specific structure to accomplish more tasks.

For instance, the EVM is not privy to whether a user is transferring a token or attempting to alter smart contract variables. The token balance is simply a variable. A transaction between us would just involve changing the variable of my balance and increasing yours by updating your balance’s variable. The EVM doesn’t distinguish whether you’re utilizing a token. In Alephium, things are different. The virtual machine recognizes that you’re trying to transfer a token in smart contracts. The virtual machine can verify whether you’re performing the operation correctly, based on the smart contract.

A major advantage of the sUTXO model is its significant ease of development. With Alephium’s approach of treating tokens as native assets, developers can seamlessly access all assets connected to a specific address straight from a full node. This contrasts with the EVM where developers must depend on external services to acquire the token balances of a particular account. Not only does this introduce additional costs, but it also challenges the core principles of decentralization.

Non-technical people often underestimate this aspect. It might seem easy to write smart contracts, but writing appropriate and secure code is very challenging as we have seen from the frequent hacks in the EVM ecosystem. Even the smallest improvements to the platform, or the development stack, can immensely benefit the ecosystem.

For example, if a single design flaw increases the chance of engineers writing faulty code by 1%, and you can eliminate this, you effectively save 1% of the entire money in the ecosystem. That could be substantial. So far, reentrancy attacks, flash-loan attacks & unlimited token authorization mismanagement have resulted in billions of dollars of losses for individuals, protocols and companies. Alephium has much better built-in security in that regard and is immune to these sorts of attacks.

**VM: So, it’s somewhat akin to saving a massive amount of capital worldwide by merely reducing transaction fees. It’s the same sort of improvement, right? Because when it becomes considerably easier and safer to perform a task, everyone benefits exponentially.**

CW: Precisely. It’s not really about what you can do, or whether you can do more, it’s about executing tasks properly. Now, it’s significantly easier to do things correctly with Alephium’s VM and contract language.

For instance, many autonomous vehicles operate correctly 99% of the time, but that’s not enough. For them to be accepted on regular roads, they must function correctly 99.999% of the time. The same principle applies to smart contracts. If the code is only correct 99% of the time, it’s not secure enough for financial use. The leap from 99% correctness to a higher percentage is much more challenging. And that’s part of Alephium’s mission: to provide much higher security by default.

Let’s consider the self-custody of NFTs or tokens. The current Ethereum model, which relies on a centralized service that invokes a smart contract to keep track of NFTs, is not as secure. With the separation of contracts and assets, even if there’s a bug in the smart contract, your assets are safe.

For example, when you mint your NFT and store it in your wallet, a potential bug in the smart contract doesn’t pose a threat to your coins or your NFT because they are secured in your UTXO. The worst a hacker could do is compromise the smart contract, but they can’t steal your assets. Developers can then update the smart contract to restore its intended logic and fix the bugs.

This level of protection is a unique characteristic of the sUTXO model.

**VM: How does the sUTXO design inherently prevent flash loan attacks? To my understanding, you were among the first to suggest implementing flash loans on Ethereum with** <a href="https://github.com/uniflash/uniflash" class="markup--anchor markup--p-anchor" data-href="https://github.com/uniflash/uniflash" rel="noopener" target="_blank"><strong>UniFlash</strong></a> **correct?**

CW: Indeed, I was. However, flashloan is a double-edged tool. I believe the harm it can cause potentially outweighs the benefits it brings. While not everyone may agree with this viewpoint, we can concur that it has its upsides and downsides. In our case, we’ve adopted a more conservative technology design approach, not only in the realm of DeFi. A flash loan is an extreme use case. We counter it by adopting the input and output paradigm similar to Bitcoin or the eUTXO model.

In this model, you have the assets as the input, the transaction occurs, and then you get the outputs. You can’t recycle the output within the same transaction. With a flash loan, you need to borrow money, receive the outputs, and then use these outputs to repay the loan within the same transaction. This scenario isn’t possible with the input and output model.

I feel the concept of composability is abused on Ethereum. Regular users don’t usually need complicated composability. At most, they might combine just a few smart contracts. Typically, the involved composability use case is for hacking smart contracts or crazy arbitrage, similar to flash loans. By following the input-output model, there’s no change for regular users, but for hackers, it makes a world of difference. You deposit your assets, execute the transaction, and receive the output. This limits the potential to steal a significant amount of money within a single transaction.

For individuals intending to extract value, they would need to conduct multiple transactions, which would prove more challenging for arbitrageurs due to the absence of flash loans and the inability to bundle multiple transactions into one consecutive one.

**VM: Could you explain the overflow-underflow features integrated into the VM?**

CW: It’s essentially a built-in verification for mathematical operations. The EVM doesn’t have this by default, so they use libraries for that purpose, but this comes with a cost. The first issue is that you need to be conscious of this best practice. The second is the code size grows because you need to use an external library for this check. As a result, some developers might overlook it because the list of checks to add to your code can be extensive.

Alephium simplifies that list because the virtual machine manages more of the checks. There are only a few checks that the virtual machine can’t handle, and developers must manually run these with unit tests. The virtual machine doesn’t have information about what you’re building and doesn’t know your specifications, so it can’t check certain elements. Those aspects are left up to you to check.

### Regarding the Benefits of Building with Stateful UTXO

**VM: Alephium has made substantial efforts to be developer-friendly. If you’re speaking to a developer, a dApp developer, or a DeFi entrepreneur, could you elaborate on the specifics of what’s been done to make it more dev-friendly?**

CW: There are several key components to consider:

The first thing we do is to make sure that the programming paradigm stays friendly for users. Most new devs are less familiar with the UTXO model, so we combined it with the account model in the smart contract VM to make the devX as close to Web2 as possible. All of the assets are created natively with UTXOs, which makes token discovery and balance query very easy with a full node, which is impossible with Ethereum’s full node, for example.

The next one is our programming language, Ralph. We’ve endeavored to make it as simple as possible. Some DApp platforms use Rust directly, but we believe that’s a mismatch as contracts are usually smaller programs than web2 apps but with a high requirement of financial security. Ralph is a domain-specific language purposely built for smart contracts, bearing similarities to Rust/Scala but stripped down to minimal features. Most of the time, developers simply write their functions and that’s it.

Beyond the language, the supporting infrastructure (explorer, wallet, bridge, etc.), SDKs, and documentation are essential. We’ve immersed ourselves in the existing Ethereum toolchain to understand how they enhance the developer experience. In my opinion, our dapp stack offers an impressive dev experience.

Our full nodes offer additional utilities to assist in building better tools. Our API endpoints likely surpass those of the EVM, given that they can’t alter their API and have to layer new features on top, whereas we can introduce APIs directly into the full nodes.

**VM: Ethereum prioritized having multiple implementations from the start. They had Geth, Erigon, and others, all developed in different languages and platforms. Are we adopting the same approach with various clients and implementations?**

CW: At the moment, this is not on our roadmap, largely due to resource constraints and the complexity of that path. Managing multiple teams working on the same clients is tough, and proper specification documentation is crucial to avoid introducing bugs. Looking at the EVM ecosystem, one client dominates the market, indicating people’s lack of confidence in testing other clients with sensitive tasks. So, for critical services, they always opt for Go Ethereum.

It’s no easy task to develop an alternative blockchain client unless you have sufficient resources like the big crypto foundations do. Trying to create multiple clients for a young project seems to miss the point since it’s not feasible to equip two clients with the same resources, and the quality would differ. Our priority is to first establish robust full nodes in Scala, and when comfortable, we can consider a second one.

**VM: What would you tell a DeFi developer or entrepreneur to persuade them to experiment with stateful UTXO?**

CW: Currently, we’re still in the early stages, which presents a challenge but also an opportunity. The SDK and infrastructure are getting pretty stable and we will start to onboard new devs with development workshops and better tutorials.

I believe now is an excellent time to familiarize yourself with coding in Alephium. We’ve got many innovative aspects to explore. Given our growing community, your project could be ideally positioned to leverage these developments. What’s more, it’s secure, friendly and fun to build dapps on Alephium.

**VM: Thanks a lot for that discussion, it’s been fascinating, enlightening and a lot to take in!**

</div>

</div>

</div>

<div id="5aa0" class="section section section--body section--last">

<div class="section-divider">

------------------------------------------------------------------------

</div>

<div class="section-content">

<div class="section-inner sectionLayout--insetColumn">

Have you built something or have a nice idea and want to request a grant or reward? You can access the Alephium <a href="https://github.com/alephium/community/blob/master/Grant%26RewardProgram.md" class="markup--anchor markup--p-anchor" data-href="https://github.com/alephium/community/blob/master/Grant%26RewardProgram.md" rel="noopener" target="_blank">Community Grants &amp; Reward Program</a> page for more info!

If you have questions or suggestions, please come to Alephium’s <a href="https://alephium.org/discord/" class="markup--anchor markup--p-anchor" data-href="https://alephium.org/discord/" rel="noopener" target="_blank">Discord</a>, <a href="https://t.me/alephiumgroup" class="markup--anchor markup--p-anchor" data-href="https://t.me/alephiumgroup" rel="noopener" target="_blank">Telegram</a>, or reach out on <a href="https://twitter.com/alephium" class="markup--anchor markup--p-anchor" data-href="https://twitter.com/alephium" rel="noopener" target="_blank">Twitter</a>!

</div>

</div>

</div>

</div>

By <a href="https://medium.com/@alephium" class="p-author h-card">Alephium</a> on [August 17, 2023](https://medium.com/p/f6b6868ef873).

<a href="https://medium.com/@alephium/tech-talk-2-mysteries-of-stateful-utxo-the-ultimate-guide-to-alephiums-accounting-model-and-f6b6868ef873" class="p-canonical">Canonical link</a>

Exported from [Medium](https://medium.com) on March 10, 2025.
