---
date: 2023-01-31T15:33:07.995000Z
description: "The Leman Network Upgrade AMA: Most relevant topics and questions - Comprehensive summary of the significant blockchain update covering main components and key discussions."
seoDescription: "Alephium Leman Network Upgrade AMA - most relevant topics and questions. Comprehensive summary of significant blockchain update and key discussions."
featuredImage: image_819f6611c3.png
title: 'The Leman Network Upgrade AMA: Most relevant topics and questions'
---

The [Leman Upgrade](/news/post/announcing-the-leman-network-upgrade-c01a81e65f0e) is a significant update in the main components of the Alephium blockchain. It’s been in the works since the mainnet launch, and last week there was a Tech Talk with Cheng and Hongchao where a lot was discussed and revealed. This article summarizes the most important topics and you can watch the full video recording [here](https://www.youtube.com/watch?v=n7ycJUIfbVg).

### A (big) step forward

Question: **What is the Leman Upgrade? Why have we talked about it for so long, and why is it so important?**

**Cheng:** The Leman Upgrade is the first network upgrade of Alephium. It includes important updates to the blockchain’s functionality, security, and performance. As new features and breaking changes exist, this upgrade is not backward compatible.

Question: **When will it activate? How will we know?**

**Cheng:** All planned features and changes were introduced in the [latest full-node](https://github.com/alephium/alephium/releases/latest) release. These improvements are under testing and, when cleared, will be available for the whole community.

Question: **What are the main changes? What does the Leman Upgrade make possible that wasn’t possible before?**

**Hongchao:** Some of the major changes are:

- A new set of VM instructions and built-in functions to make smart contract development more efficient. Examples include sub-contract systems, dynamic array indexing, and built-in functions for debugging and logging.
- New features at both the language and VM level to make smart contract development more secure. Examples include the new asset permission system and external call check system.
- Improvement of the node APIs and SDK to ease the development cycle for smart contracts, including coding, unit testing, integration testing, and deployment.

The Leman Upgrade enabled us to build a Bridge and prototypes for an NFT Marketplace and a DEX. Those projects were not possible or significantly more error-prone and less efficient before the Leman Upgrade.

### Interoperability

Question: **Will the bridge be available after the mainnet upgrade from day one? Can we test it on testnet already?**

**Hongchao:** After the mainnet upgrade, some time will be spent monitoring the network. There is no specific date for launching the bridge on the mainnet since the bridge’s security is critical for Alephium’s ecosystem, and it makes sense to be extra careful with this piece of infrastructure.

The bridge is already [deployed on testnet](https://portal-bridge.wormhole-testnet.softfork.se/) (which is Leman compatible). Its components have been tested, from UI to the smart contract, from Guardians to infrastructure. The goal is to be very confident about the code, make sure it is correct and secure, and gain more operational experience.

Question: **Which tokens will be supported on the bridge?**

**Hongchao:** Any token can be bridged between ETH and Alephium with the proper setup, which consists of two steps: create a local token pool on the ALPH side and register this token on the ETH side. Once ALPH is bridged to Ethereum, nothing stops the interested party from setting up a pool in Sushiswap or Uniswap (at Goerli testnet).

Question: **Do we have plans to bridge to other chains?**

**Cheng:** There are plans to bridge to other chains, such as Ergo, as part of the Ergo community is particularly interested in Alephium. And that can be done through Wormhole or other bridges that are being considered.

### DevX, tech & security

Question: **Can you talk about the SDK and the tooling for devs? Which changes have we made to our SDK to make it more “dev friendly”?**

**Cheng:** One year after launch, the SDK has been completely redesigned and is now built with TypeScript. This new version of the SDK includes better API endpoints, smart contract development tools, and contract event systems. Additionally, there are now abstractions for common objects, standards for wallets, and utility functions for common tasks. This makes it much easier for developers to build and deploy smart contracts.

Question: **What does it change for devs? Which new features does it bring? Can you give an example of something possible to do but was too hard before?**

**Cheng:** It’s completely redesigned from the initial version. Now we can compile, test and deploy smart contracts in one command line. We could wrap all kinds of wallets into the same interface, and dApps could connect to different wallets without caring about the exact wallet implementation.

Question: **Ralph (Alephium’s programming language, equivalent of Solidity for ETH) has seen a lot of polishing and optimizing over the past year, can you tell us a bit about where it is today**

**Cheng:** Ralph has also seen a lot of improvements over the past year. These include dynamic array indexing, constants, error code, and debugging. The Asset Permission System (APS) has also been updated with a new syntax that makes it much more intuitive to approve assets. Overall, Ralph has been designed to be simple and efficient for smart contract development, and the team feels that this goal has been achieved.

Question: **How does the experience of writing smart contracts in Ralph compare to writing in solidity for Ethereum?**

**Cheng:** Writing smart contracts in Ralph is a much more enjoyable experience than writing in Solidity for Ethereum. There are many security issues to consider when writing in Solidity, and developers must also keep gas cost in mind and sometimes use assembly to optimize code. With Ralph, developers can have more fun writing contracts and not worry about these issues.

### Utility

Question: **NFTs and smart contract interactions will be a big part of the front-end upgrade! Can you tell us more about the wallets? (mobile, desktop, browser extension)**

**Hongchao:** The upgrade will allow for the flourishing of smart contracts, NFTs, and dApps on the Alephium. And it will be easier to interact with them, as the wallet offering will expand from the current desktop to a broader one, with a mobile wallet and browser extension wallet, using the Alephium wallet connect integration. The team has also defined a standard wallet interface that both the Alephium wallet connect integration, and the browser extension wallet will implement.

Question: **When will the mobile wallet be available? Will it be available on iOs and android?**

**Hongchao:** As far as I know, the Android part is ready. The team is working on the IOS part right now.

Question: **You’ve said you’re working on a ledger integration, can you tell us more about this?**

**Cheng:** Yes. A minimal ledger app is ready. Now I am trying to integrate it into our extension wallet. A test version will mostly be available in 2 weeks.

Question: **Can you talk to us about the NFTs? Can we already mint NFTs? Can you tell us more about the prototype that is available on testnet?**

**Hongchao:** We have deployed the NFT prototype on testnet, together with the extension wallet, you should be able to mint an NFT there.

The NFT Marketplace is available at [https://nft.alephium-testnet.softfork.se/](https://nft.alephium-testnet.softfork.se/)

And you can download the browser extension wallet at [https://github.com/alephium/extension-wallet/releases/latest](https://github.com/alephium/extension-wallet/releases/latest)

### Other topics

Question: **DAA — Can you talk to us more about the Difficulty Adjustment Algorithm change you implemented in the 1.6.0 release of the full node?**

**Cheng:** We improved the DAA in 1.6.0 to stabilize the block time across different chains. currently, different chains can have varied difficulty and transaction fee rewards, resulting in different mining incentives. With the new DAA, the target difficulty is calculated by estimating the dynamics across different chains and will be unified across chains. The transaction fee will be all burnt so that the block reward will be the same for all chains. We have triggered this new DAA on the testnet, and the difficulty and block time are more stable.

### Community Questions

#### General Questions

Question: **Which type of bridging will be possible? ALPH to ERC20, ETH to a token on Alephium, and any ERC20 to Alephium?**

**Answer:** The bridge will be permissionless. Any bridging configuration will be possible if both sides have enough liquidity.

Question: **Why bridge to ETH? If security concerns exist, why go to a network with a hack or exploit risk?**

**Answer:** While there were hacks, none happened on the smart contracts, so the bridge is secure. And makes sense to bridge to a very mature ecosystem such as Ethereum

Question: **Is the next Hackathon going to come around after Leman releases?**

**Answer:** We didn’t set a date, but the team is creating tutorials for developers to make onboarding easier from the dev community or other ecosystems.

Question: **How does the number of shards get decided?**

**Answer:** It started with 16 shards to provide a number close to 400 transactions per second, which is close to PayPal’s capacity. If/when the network is congested (getting closer to this number), that’s a good sign as it means good adoption, it is possible to increase the shard count if needed.

#### Listing Questions

Question: **Which is most likely to come first, a non-KYC CEX such as Kucoin/Tradeogre/Ascendex, etc., or an AMM-based DEX?**

**Answer:** The current understanding is that the DEX listing will happen first.

Question: **If an AMM-based DEX such as Uniswap is chosen as the first way forward after the leman update/ bridge is open, who would provide liquidity for the AMM? Does Alephium have funds to provide initial liquidity?**

**Answer:** Alephium would provide the initial liquidity for the AMM, and the community will take it from there.

Question: **If an AMM-based DEX is chosen over a new CEX listing, would you lean towards using Ethereum and Uniswap, or would you lean towards just using own DEX you have been designing first?**

**Answer:** Both ways are being considered and can be deployed simultaneously, as there are use cases for them. But adjustments will be made according to the solution the community leans towards.

#### About Future and Devs coming to \#BuildOnAlephium

Question: **When the Leman Upgrade is stable and CEX and DEX deployment is done, what will be the team’s priorities after those steps are reached?**

**Answer:** To develop light clients, optimizations to storage, test coverages, and explore new directions to leverage the scalability of the blockchain. The new focus can be social network applications (which create massive demand and need a blockchain with high TPS) and different bridges to connect to more ecosystems.

Other integrations with wallets and payments services are also on the radar, and engaging with other communities to attract more devs to Alephium.

---

### TL;DR: The road so far…

Alephium has made significant strides in the past year to make the platform more developer-friendly and versatile, with the ability to bridge any tokens between Ethereum and Alephium, plans to bridge to other chains, and improvements to the SDK, VM, and Ralph. These changes have made writing smart contracts and developing on the Alephium platform more enjoyable and secure. The team is also working on making the mobile wallet available on iOS and Android, integrating a ledger into the extension wallet, and developing prototypes for key dApps such as the bridge, a DEX, and NFT prototypes. Now it’s time for the community to continue to experiment and build on the platform!

If you have questions or want to know more, please come to Alephium’s [Discord](https://discord.gg/JErgRBfRSB), [Telegram](https://t.me/alephiumgroup), or reach out on [Twitter](https://twitter.com/alephium)!
